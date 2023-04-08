<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Plank\Mediable\Media;

class MediaUploadResource extends JsonResource
{
    public function toArray($request)
    {
        /** @var Media $media */
        $media = $this->resource;

        try {
            $url = $media->getUrl();
        } catch (\Exception $e) {
            $url = null;
        }

        return [
            'id' => $media->id,
            'type' => $media->aggregate_type,
            'size' => $media->size,
            'created_at' => $media->created_at,
            'extension' => $media->extension,
            'filename' => $media->filename,
            'title' => $media->variant_name ?? $media->filename,
            'url' => $url
        ];
    }
}
