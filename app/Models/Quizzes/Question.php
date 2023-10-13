<?php

namespace App\Models\Quizzes;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;


/**
 * App\Models\Quizzes\Question
 *
 * @property int $id
 * @property int|null $quiz_id
 * @property string $question
 * @property int $multiple
 * @property int $index
 * @property Carbon|null $deleted_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Collection|Answer[] $answers
 * @property-read int|null $answers_count
 * @method static Builder|Question newModelQuery()
 * @method static Builder|Question newQuery()
 * @method static \Illuminate\Database\Query\Builder|Question onlyTrashed()
 * @method static Builder|Question query()
 * @method static Builder|Question whereCreatedAt($value)
 * @method static Builder|Question whereDeletedAt($value)
 * @method static Builder|Question whereId($value)
 * @method static Builder|Question whereIndex($value)
 * @method static Builder|Question whereMultiple($value)
 * @method static Builder|Question whereQuestion($value)
 * @method static Builder|Question whereQuizId($value)
 * @method static Builder|Question whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|Question withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Question withoutTrashed()
 * @mixin Eloquent
 */
class Question extends Model
{
    use SoftDeletes;

    protected $guarded = ['id'];

    public function answers(): HasMany
    {
        return $this->hasMany(Answer::class, 'question_id');
    }
}
