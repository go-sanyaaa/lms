<?php

namespace App\Policies;

use App\Enums\Permissions\Roles;
use App\Models\Course;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class CoursePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  User  $user
     * @return Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  User  $user
     * @param  Course  $course
     * @return Response|bool
     */
    public function view(User $user, Course $course)
    {
        return $user->hasRole([Roles::Auditor->value, Roles::Controller->value]) || $user->courses()->where('id', '=', $course->id)->exists();
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  User  $user
     * @return Response|bool
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  User  $user
     * @param  Course  $course
     * @return Response|bool
     */
    public function update(User $user, Course $course)
    {
        return $user->hasRole(Roles::Controller->value);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  User  $user
     * @param  Course  $course
     * @return Response|bool
     */
    public function delete(User $user, Course $course)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  User  $user
     * @param  Course  $course
     * @return Response|bool
     */
    public function restore(User $user, Course $course)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  User  $user
     * @param  Course  $course
     * @return Response|bool
     */
    public function forceDelete(User $user, Course $course)
    {
        //
    }
}
