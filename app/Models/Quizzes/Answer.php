<?php

namespace App\Models\Quizzes;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

/**
 * App\Models\Quizzes\Answer
 *
 * @property int $id
 * @property int $question_id
 * @property string $text
 * @property int $is_correct
 * @property string|null $deleted_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|Answer newModelQuery()
 * @method static Builder|Answer newQuery()
 * @method static Builder|Answer query()
 * @method static Builder|Answer whereCreatedAt($value)
 * @method static Builder|Answer whereDeletedAt($value)
 * @method static Builder|Answer whereId($value)
 * @method static Builder|Answer whereIsCorrect($value)
 * @method static Builder|Answer whereQuestionId($value)
 * @method static Builder|Answer whereText($value)
 * @method static Builder|Answer whereUpdatedAt($value)
 * @mixin Eloquent
 * @method static \Illuminate\Database\Query\Builder|Answer onlyTrashed()
 * @method static \Illuminate\Database\Query\Builder|Answer withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Answer withoutTrashed()
 */
class Answer extends Model
{
    use SoftDeletes;

    protected $table = 'questions_answers';

    protected $guarded = ['id'];
}
