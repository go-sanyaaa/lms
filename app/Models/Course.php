<?php

namespace App\Models;

use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 * App\Models\Course
 *
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string $content
 * @property int|null $status_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Collection|User[] $users
 * @property-read int|null $users_count
 * @method static Builder|Course newModelQuery()
 * @method static Builder|Course newQuery()
 * @method static Builder|Course query()
 * @method static Builder|Course whereContent($value)
 * @method static Builder|Course whereCreatedAt($value)
 * @method static Builder|Course whereDescription($value)
 * @method static Builder|Course whereId($value)
 * @method static Builder|Course whereStatusId($value)
 * @method static Builder|Course whereTitle($value)
 * @method static Builder|Course whereUpdatedAt($value)
 * @property-read Collection|Lesson[] $lessons
 * @property-read int|null $lessons_count
 * @mixin Eloquent
 */
class Course extends Model
{

    protected $fillable = [
        'title', 'content', 'description', 'status_id',
    ];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class)->using(UserCourse::class);
    }

    public function lessons(): HasMany
    {
        return $this->hasMany(Lesson::class, 'course_id');
    }
}
