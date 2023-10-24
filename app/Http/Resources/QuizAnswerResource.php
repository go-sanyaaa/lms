<?php

namespace App\Http\Resources;

use App\Enums\Permissions\Roles;
use App\Models\Quizzes\Answer;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class QuizAnswerResource extends JsonResource
{
    public function toArray($request)
    {
        $user = Auth::user();

        /** @var Answer $answer */
        $answer = $this->resource;

        return [
            'id' => $answer->id,
            'key' => (string) $answer->id,
            'text' => $answer->text,
            'is_correct' => $user->hasRole([Roles::Auditor->value, Roles::Controller->value]) ? (boolean) $answer->is_correct : null,
        ];
    }
}
