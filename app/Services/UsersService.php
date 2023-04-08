<?php

namespace App\Services;

use App\Enums\Permissions\Roles;
use App\Models\User;

class UsersService
{
    /**
     * Функция назначения менторов
     */
    public function setMentor(User $user, User $mentor = null)
    {
        if ($mentor) {
            $user->mentor()->associate($mentor)->save();

            return $mentor;
        }

        $mentor = $this->getVacantController();

        $mentor->subordinateUsers()->sync($user, false);

        $user->mentor_id = $mentor->id;
        $user->save();

        return $user->mentor;
    }

    public function getVacantController()
    {
        $controllersIDs = config('mentors.controllers_ids');

        return User::query()
            ->when($controllersIDs, fn($q) => $q
                ->whereIn('id', $controllersIDs)
            )
            ->whereHas('roles', fn($q) => $q->where('name', '=', Roles::Controller->value))
            ->withCount(['subordinateUsers' => fn($q) => $q->whereHas('roles',
                fn($q) => $q->where('name', '=', Roles::Student->value)
            )])
            ->orderBy('subordinate_users_count')
            ->first();
    }
}
