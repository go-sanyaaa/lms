<?php

namespace App\Policies;

use App\Enums\HomeworkStatusIdTerms;
use App\Enums\Permissions\Roles;
use App\Models\Homework;
use App\Models\Lesson;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class HomeworkPolicy
{
    use HandlesAuthorization;

    public function changeStatus(User $user, Homework $homework, int $statusId): bool
    {
        $isAuthor = $user->id === $homework->user_id;
        if ($isAuthor) {
            return $statusId == HomeworkStatusIdTerms::Review->value;
        }

        $isAuditor = $user->id === $homework->auditor_id;
        if ($isAuditor) {
            return true;
        }

        $isController = $user->hasRole(Roles::Controller->value);
        if($isController) {
            return true;
        }

        return false;
    }

    public function create(User $user, Lesson $lesson): bool
    {
        $studentHaveCourse = $user->courses()->where('id', '=', $lesson->course_id)->exists();

        if($studentHaveCourse && $lesson->finished_at?->isPast()) {
            return true;
        }

        $prevLesson = Lesson::query()
            ->where('course_id', '=', $lesson->course_id)
            ->where('id', '<', $lesson->id)
            ->orderBy('id', 'DESC')
            ->first();

        $completePrevLesson = !$prevLesson || $user->homeworks()
                ->where('lesson_id', '=', $prevLesson->id)
                ->where('status_id', '=', HomeworkStatusIdTerms::Completed->value)
                ->exists();

        return $studentHaveCourse && $completePrevLesson;
    }

    public function grade(User $user, Homework $homework): bool
    {
        return $homework->auditor_id === $user->id || $user->hasRole(Roles::Controller->value);
    }

    public function export(User $user): bool
    {
        return $user->hasRole(Roles::Controller->value);
    }
}
