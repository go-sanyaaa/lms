<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentListResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        /** @var User $user */
        $user = $this->resource;

        return [
            'id' => $user->id,
            'name' => $user->full_name,
            'email' => $user->email,
            'homeworks' => [
                'all' => $user->homeworks_count,
                'completed' => $user->completed_homeworks_count
            ],
            'phone' => $user->phone,
            'description' => $user->description,
            'mentor' => new MentorResource($this->whenLoaded('mentor')),
        ];
    }
}
