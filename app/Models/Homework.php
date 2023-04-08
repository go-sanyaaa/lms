<?php

namespace App\Models;

use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Support\Carbon;
use Laravel\Sail\Console\PublishCommand;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * App\Models\Homework
 *
 * @property int $user_id
 * @property int $lesson_id
 * @property int|null $auditor_id
 * @property int $status_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read User|null $auditor
 * @property-read Lesson $lesson
 * @property-read TaxonomyTerm $status
 * @property-read User $user
 * @method static Builder|Homework newModelQuery()
 * @method static Builder|Homework newQuery()
 * @method static Builder|Homework query()
 * @method static Builder|Homework whereAuditorId($value)
 * @method static Builder|Homework whereCreatedAt($value)
 * @method static Builder|Homework whereLessonId($value)
 * @method static Builder|Homework whereStatusId($value)
 * @method static Builder|Homework whereUpdatedAt($value)
 * @method static Builder|Homework whereUserId($value)
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Activitylog\Models\Activity[] $activities
 * @property-read int|null $activities_count
 * @mixin Eloquent
 * @property int $grade
 * @property-read \Plank\Mediable\MediableCollection|\App\Models\Answer[] $answers
 * @property-read int|null $answers_count
 * @method static Builder|Homework whereGrade($value)
 * @property int $id
 * @method static Builder|Homework whereId($value)
 */
class Homework extends Pivot
{
    use LogsActivity;

    protected $table = 'homeworks';

    public $incrementing = true;

    protected static function booted(): void
    {
        static::creating(static function (Homework $userLesson) {
            $userLesson->status_id = 3;
        });
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function auditor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'auditor_id');
    }

    public function lesson(): BelongsTo
    {
        return $this->belongsTo(Lesson::class, 'lesson_id');
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(TaxonomyTerm::class, 'status_id');
    }

    public function answers(): MorphMany
    {
        return $this->morphMany(Answer::class, 'answerable');
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll();
    }
}
