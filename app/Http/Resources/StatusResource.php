<?php

namespace App\Http\Resources;

use App\Models\TaxonomyTerm;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StatusResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        /** @var TaxonomyTerm $status */
        $status = $this->resource;

        return [
            'id' => $status->id,
            'key' => $status->key,
            'title' => $status->title
        ];
    }
}
