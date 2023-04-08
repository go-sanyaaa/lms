<?php

namespace App\Http\Resources;

use App\Models\Homework;
use Illuminate\Http\Resources\Json\JsonResource;

class HomeworkResource extends JsonResource
{
    public function toArray($request)
    {
        /** @var Homework $homework */
        $homework = $this->resource;

        return [
            'id' => $homework->id,
            'status' => StatusResource::make($homework->status),
            'created_at' => $homework->created_at,
            'grade' => $homework->grade,
            'answers' => AnswerResource::collection($homework->answers),
            'lesson' => LessonListResource::make($homework->lesson)
        ];
    }
}
