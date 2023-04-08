<?php

namespace App\Http\Middleware;

use App\Enums\Permissions\Roles;
use App\Http\Resources\MentorResource;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed[]
     */
    public function share(Request $request)
    {
        /** @var User $user */
        $user = $request->user();

        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
                'is_auditor' => $user?->hasRole(Roles::Auditor->value),
                'role' => $user?->roles?->first()->name
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'common' => function () use ($user) {
                $common = [];

                if($user?->hasRole(Roles::Controller->value)) {
                    $mentors = $user->subordinateUsers()
                        ->whereHas('roles', fn(Builder $q) => $q->where('name', '=', Roles::Auditor->value))
                        ->get()
                        ->concat([$user]);
                    $common['mentors'] = MentorResource::collection($mentors);
                }

                return $common;
            },
            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ],
        ]);
    }
}
