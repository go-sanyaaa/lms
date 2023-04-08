<?php

namespace App\Models;

use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * App\Models\UserCourse
 *
 * @method static Builder|UserCourse newModelQuery()
 * @method static Builder|UserCourse newQuery()
 * @method static Builder|UserCourse query()
 * @property-read \App\Models\Course|null $course
 * @property-read \App\Models\User|null $user
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Activitylog\Models\Activity[] $activities
 * @property-read int|null $activities_count
 * @property int $user_id
 * @property int $course_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static Builder|UserCourse whereCourseId($value)
 * @method static Builder|UserCourse whereCreatedAt($value)
 * @method static Builder|UserCourse whereUpdatedAt($value)
 * @method static Builder|UserCourse whereUserId($value)
 * @mixin Eloquent
 */
class UserCourse extends Pivot
{
    use LogsActivity;

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class, 'course_id');
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll();
    }
}
