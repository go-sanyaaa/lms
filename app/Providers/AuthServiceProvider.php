<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use App\Enums\Permissions\Roles;
use App\Models\Answer;
use App\Models\Course;
use App\Models\Homework;
use App\Models\Lesson;
use App\Models\User;
use App\Policies\AnswerPolicy;
use App\Policies\CoursePolicy;
use App\Policies\HomeworkPolicy;
use App\Policies\LessonPolicy;
use App\Policies\UserPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Course::class => CoursePolicy::class,
        Lesson::class => LessonPolicy::class,
        Homework::class => HomeworkPolicy::class,
        Answer::class => AnswerPolicy::class,
        User::class => UserPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('update-mentors', function (User $user) {
            return $user->hasRole(Roles::Controller->value);
        });
    }
}
