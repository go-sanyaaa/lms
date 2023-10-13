<?php

namespace App\Models\Quizzes;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

/**
 * App\Models\Quizzes\Quiz
 *
 * @property int $id
 * @property int $lesson_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|Quiz newModelQuery()
 * @method static Builder|Quiz newQuery()
 * @method static Builder|Quiz query()
 * @method static Builder|Quiz whereCreatedAt($value)
 * @method static Builder|Quiz whereId($value)
 * @method static Builder|Quiz whereLessonId($value)
 * @method static Builder|Quiz whereUpdatedAt($value)
 * @mixin Eloquent
 * @property-read Quiz|null $lesson
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Quizzes\Question[] $questions
 * @property-read int|null $questions_count
 */
class Quiz extends Model
{

    protected $guarded = ['id'];

    public function questions(): HasMany
    {
        return $this->hasMany(Question::class, 'quiz_id');
    }

    public function lesson(): BelongsTo
    {
        return $this->belongsTo(Quiz::class, 'lesson_id');
    }
}
