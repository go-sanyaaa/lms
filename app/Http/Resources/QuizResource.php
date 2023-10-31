<?php

namespace App\Http\Resources;

use App\Models\Answer;
use App\Models\Quizzes\Quiz;
use Illuminate\Http\Resources\Json\JsonResource;

class QuizResource extends JsonResource
{
    public function toArray($request)
    {
        /** @var Quiz $quiz */
        $quiz = $this->resource;

        $lastAnswer = $quiz->relationLoaded('userAnswers') ? $quiz->userAnswers->last() : null;

        return [
            'id' => $quiz->id,
            'questions' => QuizQuestionResource::collection($quiz->questions->sortBy('index')),
            'last_answer' => $lastAnswer ?[
                'id' => $lastAnswer->id,
                'percent' => $lastAnswer->data['percent']
            ] : null,
        ];
    }
}
