<?php

namespace App\Http\Resources;

use App\Models\Course;
use Illuminate\Http\Resources\Json\JsonResource;

class CourseListResource extends JsonResource
{
    public function toArray($request)
    {
        /** @var Course $course */
        $course = $this->resource;

        return [
            'id' => $course->id,
            'title' => $course->title,
            'description' => $course->description,
            'content' => $course->content,
        ];
    }
}
