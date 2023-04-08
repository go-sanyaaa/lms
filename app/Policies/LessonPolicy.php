<?php

namespace App\Policies;

use App\Enums\HomeworkStatusIdTerms;
use App\Enums\Permissions\Roles;
use App\Models\Lesson;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class LessonPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Lesson  $lesson
     * @return Response|bool
     */
    public function view(User $user, Lesson $lesson): Response|bool
    {
        $isManager = $user->hasRole([Roles::Auditor->value, Roles::Controller->value]);

        if($isManager) return true;

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
                ->where('status_id', '!=', HomeworkStatusIdTerms::Open->value)
                ->exists();

        return $studentHaveCourse && $completePrevLesson;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return Response|bool
     */
    public function create(User $user)
    {
        return $user->hasRole(Roles::Controller->value);
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Lesson  $lesson
     * @return Response|bool
     */
    public function update(User $user, Lesson $lesson)
    {
        return $user->hasRole(Roles::Controller->value);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Lesson  $lesson
     * @return Response|bool
     */
    public function delete(User $user, Lesson $lesson)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Lesson  $lesson
     * @return Response|bool
     */
    public function restore(User $user, Lesson $lesson)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Lesson  $lesson
     * @return Response|bool
     */
    public function forceDelete(User $user, Lesson $lesson)
    {
        //
    }
}
