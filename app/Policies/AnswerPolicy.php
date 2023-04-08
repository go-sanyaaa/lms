<?php

namespace App\Policies;

use App\Enums\HomeworkStatusIdTerms;
use App\Enums\Permissions\Roles;
use App\Models\Homework;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AnswerPolicy
{
    use HandlesAuthorization;

    public function create(User $user, Homework $homework): bool
    {
        $isController = $user->hasRole(Roles::Controller->value);
        if($isController) return true;

        $isAuditor = $user->hasRole(Roles::Auditor->value);
        if ($isAuditor) return $homework->auditor_id == $user->id;

        return $homework->user_id == $user->id && (
            in_array($homework->status_id, [HomeworkStatusIdTerms::Open->value, HomeworkStatusIdTerms::Rework->value])
        );
    }
}
