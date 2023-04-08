<?php

namespace App\Policies;

use App\Enums\Permissions\Roles;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function viewStudents(User $user): bool
    {
        return $user->hasRole(Roles::Controller->value);
    }

    public function show(User $user): bool
    {
        return $user->hasRole(Roles::Controller->value);
    }

    public function update(User $user): bool
    {
        return $user->hasRole(Roles::Controller->value);
    }


    public function exportStudents(User $user): bool
    {
        return $user->hasRole(Roles::Controller->value);
    }
}
