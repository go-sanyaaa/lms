<?php

namespace App\Models;

use App\Models\Quizzes\Quiz;
use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Carbon;
use Plank\Mediable\Media;
use Plank\Mediable\Mediable;
use Plank\Mediable\MediableCollection;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * App\Models\Lesson
 *
 * @property int $id
 * @property int $course_id
 * @property int $type
 * @property string $title
 * @property string|null $description
 * @property string|null $content
 * @property Carbon|null $created_at
 * @property Carbon|null $finished_at
 * @property Carbon|null $updated_at
 * @property-read Collection|Activity[] $activities
 * @property-read int|null $activities_count
 * @property-read \App\Models\Course $course
 * @property-read Collection|\App\Models\Homework[] $homeworks
 * @property-read int|null $homeworks_count
 * @property-read Collection|Media[] $media
 * @property-read int|null $media_count
 * @method static MediableCollection|static[] all($columns = ['*'])
 * @method static MediableCollection|static[] get($columns = ['*'])
 * @method static Builder|Lesson newModelQuery()
 * @method static Builder|Lesson newQuery()
 * @method static Builder|Lesson query()
 * @method static Builder|Lesson whereContent($value)
 * @method static Builder|Lesson whereCourseId($value)
 * @method static Builder|Lesson whereCreatedAt($value)
 * @method static Builder|Lesson whereDescription($value)
 * @method static Builder|Lesson whereFinishedAt($value)
 * @method static Builder|Lesson whereHasMedia($tags = [], bool $matchAll = false)
 * @method static Builder|Lesson whereHasMediaMatchAll(array $tags)
 * @method static Builder|Lesson whereId($value)
 * @method static Builder|Lesson whereTitle($value)
 * @method static Builder|Lesson whereUpdatedAt($value)
 * @method static Builder|Lesson withMedia($tags = [], bool $matchAll = false, bool $withVariants = false)
 * @method static Builder|Lesson withMediaAndVariants($tags = [], bool $matchAll = false)
 * @method static Builder|Lesson withMediaAndVariantsMatchAll($tags = [])
 * @method static Builder|Lesson withMediaMatchAll(bool $tags = [], bool $withVariants = false)
 * @method static Builder|Lesson whereType($value)
 * @mixin Eloquent
 * @property-read Quiz|null $quiz
 */
class Lesson extends Model
{
    use LogsActivity, Mediable;

    protected $fillable = [
        'title', 'description', 'content', 'type'
    ];

    protected $casts = [
        'finished_at' => 'datetime'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id');
    }


    public function homeworks(): HasMany
    {
        return $this->hasMany(Homework::class, 'lesson_id');
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()->logAll();
    }

    public function quiz(): HasOne
    {
        return $this->hasOne(Quiz::class, 'lesson_id');
    }
}
