<?php

namespace App\Http\Resources;

use App\Models\Quizzes\Answer;
use Illuminate\Http\Resources\Json\JsonResource;

class QuizAnswerResource extends JsonResource
{
    public function toArray($request)
    {
        /** @var Answer $answer */
        $answer = $this->resource;

        return [
            'id' => $answer->id,
            'key' => (string) $answer->id,
            'text' => $answer->text,
            'is_correct' => (boolean) $answer->is_correct,
        ];
    }
}
