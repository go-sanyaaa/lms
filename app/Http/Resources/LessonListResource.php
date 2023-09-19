<?php

namespace App\Http\Resources;

use App\Models\Lesson;
use Illuminate\Http\Resources\Json\JsonResource;

class LessonListResource extends JsonResource
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
            'finished_at' => $lesson->finished_at,
            'type' => $lesson->type,
            'attachments' => $this->when(
                $lesson->relationLoaded('media'),
                fn() => MediaUploadResource::collection($lesson->media)
            )
        ];
    }
}
