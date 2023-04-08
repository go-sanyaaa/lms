<?php

namespace App\Http\Resources;

use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Http\Resources\Json\JsonResource;

class LessonResource extends JsonResource
{
    public function toArray($request)
    {
        /** @var Lesson $lesson */
        $lesson = $this->resource;

        return [
            'id' => $lesson->id,
            'title' => $lesson->title,
            'description' => $lesson->description,
            'content' => $lesson->content,
            'course' => CourseListResource::make($lesson->course),
            'attachments' => MediaUploadResource::collection($lesson->media)
        ];
    }
}
