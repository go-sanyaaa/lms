<?php

namespace App\Http\Resources;

use App\Enums\Permissions\Roles;
use App\Models\Answer;
use App\Models\Homework;
use Illuminate\Http\Resources\Json\JsonResource;

class AnswerResource extends JsonResource
{
    public function toArray($request)
    {
        /** @var Answer $answer */
        $answer = $this->resource;

        return [
            'id' => $answer->id,
            'content' => $answer->content,
            'attachments' => MediaUploadResource::collection($answer->media),
            'created_at' => $answer->created_at,
            'author' => [
                'id' => $answer->author->id,
                'name' => $answer->author->hasRole([Roles::Controller->value, Roles::Auditor->value]) ? 'Преподаватель' :  $answer->author->name,
            ],
        ];
    }
}
