<?php

namespace App\Models;

use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Support\Carbon;
use Plank\Mediable\Media;
use Plank\Mediable\Mediable;
use Plank\Mediable\MediableCollection;

/**
 * App\Models\Answer
 *
 * @property int $id
 * @property string $content
 * @property int $answerable_id
 * @property string $answerable_type
 * @property int $user_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Model|Eloquent $answerable
 * @property-read User $author
 * @property-read Collection|Media[] $media
 * @property-read int|null $media_count
 * @method static MediableCollection|static[] all($columns = ['*'])
 * @method static MediableCollection|static[] get($columns = ['*'])
 * @method static Builder|Answer newModelQuery()
 * @method static Builder|Answer newQuery()
 * @method static Builder|Answer query()
 * @method static Builder|Answer whereAnswerableId($value)
 * @method static Builder|Answer whereAnswerableType($value)
 * @method static Builder|Answer whereContent($value)
 * @method static Builder|Answer whereCreatedAt($value)
 * @method static Builder|Answer whereHasMedia($tags = [], bool $matchAll = false)
 * @method static Builder|Answer whereHasMediaMatchAll(array $tags)
 * @method static Builder|Answer whereId($value)
 * @method static Builder|Answer whereUpdatedAt($value)
 * @method static Builder|Answer whereUserId($value)
 * @method static Builder|Answer withMedia($tags = [], bool $matchAll = false, bool $withVariants = false)
 * @method static Builder|Answer withMediaAndVariants($tags = [], bool $matchAll = false)
 * @method static Builder|Answer withMediaAndVariantsMatchAll($tags = [])
 * @method static Builder|Answer withMediaMatchAll(bool $tags = [], bool $withVariants = false)
 * @mixin Eloquent
 */
class Answer extends Model
{
    use HasFactory, Mediable;

    protected $fillable = [
        'content', 'user_id'
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function answerable(): MorphTo
    {
        return $this->morphTo();
    }
}
