<?php

namespace App\Http\Resources;

use App\Models\Quizzes\Quiz;
use Illuminate\Http\Resources\Json\JsonResource;

class QuizResource extends JsonResource
{
    public function toArray($request)
    {
        /** @var Quiz $quiz */
        $quiz = $this->resource;

        return [
            'id' => $quiz->id,
            'questions' => QuizQuestionResource::collection($quiz->questions->sortBy('index')),
        ];
    }
}
