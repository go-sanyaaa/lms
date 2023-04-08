<?php

namespace App\Http\Resources;

use App\Models\Homework;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskListResource extends JsonResource
{
    public function toArray($request)
    {
        /** @var Homework $homework */
        $homework = $this->resource;

        return [
            'id' => $homework->id,
            'author' => AuthorListResource::make($homework->user),
            'auditor' => [
                'id' => $homework?->auditor->id,
                'name' => $homework?->auditor->name,
                'surname' => $homework?->auditor->surname,
            ],
            'lesson' => LessonListResource::make($homework->lesson),
            'status' => StatusResource::make($homework->status),
            'created_at' => $homework->created_at,
            'grade' => $homework->grade,
        ];
    }
}
