<?php

namespace App\Services;

use App\DTO\Answers\AnswerRequestData;
use App\DTO\Answers\HomeworkAnswerRequestData;
use App\DTO\Answers\QuizAnswerRequestData;
use App\Models\Answer;
use App\Models\Homework;
use App\Models\Lesson;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;

class LessonService
{
    private UsersService $usersService;

    public function __construct(UsersService $usersService)
    {
        $this->usersService = $usersService;
    }

    public function addAnswer(User $user, Lesson $lesson, AnswerRequestData $storeAnswerData)
    {
        return DB::transaction(function () use ($user, $lesson, $storeAnswerData) {
            switch (true) {
                case $storeAnswerData instanceof QuizAnswerRequestData:
                {
                    return $this->makeQuizAnswer($user, $lesson, $storeAnswerData);
                }
                case $storeAnswerData instanceof HomeworkAnswerRequestData:
                {
                    return $this->makeHomeworkAnswer($user, $lesson, $storeAnswerData);
                }
                default:
                {
                    return null;
                }
            }
        });
    }

    private function makeHomeworkAnswer(User $user, Lesson $lesson, HomeworkAnswerRequestData $answerRequestData): Answer
    {
        if (!$user->mentor_id) {
            $mentor = $this->usersService->setMentor($user);
        }

        /** @var Homework $hw */
        $hw = $user->homeworks()->where('lesson_id', '=', $lesson->id)->first();

        if (is_null($hw)) {
            Gate::authorize('create', [Homework::class, $lesson]);

            $hw = $user->homeworks()->create([
                'lesson_id' => $lesson->id,
                'auditor_id' => $mentor->id ?? $user->mentor_id
            ]);
        }

        Gate::authorize('create', [Answer::class, $hw]);

        /** @var Answer $answer */
        $answer = $hw->answers()->create([
            'content' => $answerRequestData->content,
            'user_id' => $user->id
        ]);

        $mediaIds = collect($answerRequestData->attachments)->pluck('id')->toArray();
        $answer->syncMedia($mediaIds, 'attachments');

        return $answer;
    }

    private function makeQuizAnswer(User $user, Lesson $lesson, QuizAnswerRequestData $answerRequestData)
    {
        dd($answerRequestData->responses);
    }
}
