<?php

namespace App\Http\Resources;

use App\Models\Quizzes\Question;
use Illuminate\Http\Resources\Json\JsonResource;

class QuizQuestionResource extends JsonResource
{
    public function toArray($request)
    {
        /** @var Question $question */
        $question = $this->resource;

        return [
            'id' => $question->id,
            'key' => (string) $question->id,
            'question' => $question->question,
            'multiple' => (boolean) $question->multiple,
            'created_at' => $question->created_at,
            'updated_at' => $question->updated_at,
            'answers' => QuizAnswerResource::collection($question->answers)
        ];
    }
}
