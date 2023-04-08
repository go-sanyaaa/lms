<?php

namespace App\Models;

use App\Enums\HomeworkStatusIdTerms;
use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Notifications\DatabaseNotificationCollection;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Sanctum\PersonalAccessToken;
use Rappasoft\LaravelAuthenticationLog\Traits\AuthenticationLoggable;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Traits\HasRoles;

/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read DatabaseNotificationCollection|DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read Collection|PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static Builder|User newModelQuery()
 * @method static Builder|User newQuery()
 * @method static Builder|User query()
 * @method static Builder|User whereCreatedAt($value)
 * @method static Builder|User whereEmail($value)
 * @method static Builder|User whereEmailVerifiedAt($value)
 * @method static Builder|User whereId($value)
 * @method static Builder|User whereName($value)
 * @method static Builder|User wherePassword($value)
 * @method static Builder|User whereRememberToken($value)
 * @method static Builder|User whereUpdatedAt($value)
 * @property-read Collection|Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read Collection|Role[] $roles
 * @property-read int|null $roles_count
 * @method static Builder|User permission($permissions)
 * @method static Builder|User role($roles, $guard = null)
 * @property-read Collection|Activity[] $actions
 * @property-read int|null $actions_count
 * @property-read Collection|Course[] $courses
 * @property-read int|null $courses_count
 * @property-read Collection|Lesson[] $lessons
 * @property-read int|null $lessons_count
 * @property-read Collection|Homework[] $homeworks
 * @property-read int|null $homeworks_count
 * @property int|null $mentor_id
 * @method static Builder|User whereMentorId($value)
 * @property-read User|null $mentor
 * @property-read Collection|User[] $students
 * @property-read int|null $students_count
 * @property-read Collection|\App\Models\Homework[] $tasks
 * @property-read int|null $tasks_count
 * @property string $surname
 * @property string $patronymic
 * @method static Builder|User wherePatronymic($value)
 * @method static Builder|User whereSurname($value)
 * @property string|null $phone
 * @property string|null $description
 * @method static Builder|User whereDescription($value)
 * @method static Builder|User wherePhone($value)
 * @mixin Eloquent
 * @property-read Collection|\Rappasoft\LaravelAuthenticationLog\Models\AuthenticationLog[] $authentications
 * @property-read int|null $authentications_count
 * @property-read Collection|\App\Models\Homework[] $completedHomeworks
 * @property-read int|null $completed_homeworks_count
 * @property-read \Rappasoft\LaravelAuthenticationLog\Models\AuthenticationLog|null $latestAuthentication
 * @property-read Collection|User[] $subordinateUsers
 * @property-read int|null $subordinate_users_count
 * @property-read Collection|User[] $headUsers
 * @property-read int|null $head_users_count
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles, CausesActivity, AuthenticationLoggable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'surname',
        'patronymic',
        'description',
        'phone'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function courses(): BelongsToMany
    {
        return $this
            ->belongsToMany(Course::class, 'user_course')
            ->using(UserCourse::class)
            ->withTimestamps();
    }

    public function homeworks(): HasMany
    {
        return $this->hasMany(Homework::class, 'user_id');
    }

    public function completedHomeworks(): HasMany
    {
        return $this->homeworks()->where('status_id', '=', HomeworkStatusIdTerms::Completed->value);
    }

    public function mentor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'mentor_id');
    }

    /**
     * Студенты преподавателя
     *
     * @return HasMany
     */
    public function students(): HasMany
    {
        return $this->hasMany(User::class, 'mentor_id');
    }

    /**
     * Подчиненные пользователи
     *
     */
    public function subordinateUsers(): MorphToMany
    {
        return $this->morphedByMany(User::class, 'model', 'user_access_model');
    }

    public function headUsers(): MorphToMany
    {
        return $this->morphToMany(User::class, 'model', 'user_access_model');
    }

    public function tasks(): HasMany
    {
        return $this->hasMany(Homework::class, 'auditor_id');
    }

    public function fullName(): Attribute
    {
        return Attribute::get(fn($value, $user) => join(" ", [
            $user['surname'] ?? '', $user['name'] ?? '', $user['patronymic'] ?? ''
        ]));
    }
}
