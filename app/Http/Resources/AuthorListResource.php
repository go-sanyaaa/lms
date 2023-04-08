<?php

namespace App\Http\Resources;

use App\Models\Homework;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthorListResource extends JsonResource
{
    public function toArray($request)
    {
        /** @var User $user */
        $user = $this->resource;

        return [
            'id' => $user->id,
            'name' => $user->surname . ' ' . $user->name . ' ' . mb_strtoupper(mb_substr($user->patronymic,0,1)) . '.'
        ];
    }
}
