<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
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
            'name' => $user->name,
            'surname' => $user->surname,
            'patronymic' => $user->patronymic,
            'email' => $user->email,
            'homeworks' => HomeworkListResource::collection($user->homeworks),
            'phone' => $user->phone,
            'description' => $user->description,
            'mentor' => new MentorResource($this->whenLoaded('mentor')),
        ];
    }
}
