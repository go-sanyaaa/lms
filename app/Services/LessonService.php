<?php

namespace App\Services;

use App\DTO\Answers\AnswerRequestData;
use App\DTO\Answers\HomeworkAnswerRequestData;
use App\DTO\Answers\QuizAnswerRequestData;
use App\Models\Answer;
use App\Models\Homework;
use App\Models\Lesson;
use App\Models\Quizzes\Question;
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

    private function makeQuizAnswer(User $user, Lesson $lesson, QuizAnswerRequestData $answerRequestData): Answer
    {
        $quiz = $lesson->quiz;
        $quiz->load(['questions.answers']);

        $questions = collect($answerRequestData->responses)->keyBy('question_id')->map(function ($data) use ($quiz) {
            /** @var Question $question */
            $question = $quiz->questions->where('id', '=', $data['question_id'])->first();

            $correctAnswersIds = $question->answers->where('is_correct', '=', true)->pluck('id')->sortDesc()->join(',');

            $userAnswers = collect($data['answers_ids'])->sortDesc()->join(',');

            return $correctAnswersIds == $userAnswers;
        });

        $countCorrectQuestions = $questions->filter()->count();
        $percent = 100 / $quiz->questions->count() * $countCorrectQuestions;


        $data = array(
            'count_correct_questions' => $countCorrectQuestions,
            'percent' => $percent,
            'responses' => $answerRequestData->responses,
        );

        $answer = $lesson->quiz->userAnswers()->create([
            'data' => $data,
            'user_id' => $user->id
        ]);

        return $answer;
    }
}
