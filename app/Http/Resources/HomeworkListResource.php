<?php

namespace App\Http\Resources;

use App\Models\Course;
use App\Models\Homework;
use Illuminate\Http\Resources\Json\JsonResource;

class HomeworkListResource extends JsonResource
{
    public function toArray($request)
    {
        /** @var Homework $homework */
        $homework = $this->resource;

        return [
            'id' => $homework->id,
            'lesson_id' => $homework->lesson_id,
            'status' => StatusResource::make($homework->status),
            'created_at' => $homework->created_at,
            'grade' => $homework->grade,
            'answers' => $this->when(
                $homework->relationLoaded('answers'),
                fn() => AnswerResource::collection($homework->answers)
            )
        ];
    }
}
