<?php

namespace App\Models;

use App\Builders\TaxonomyTermBuilder;
use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\TaxonomyTerm
 *
 * @property int $id
 * @property string $key
 * @property string $title
 * @property int $taxonomy_id
 * @property-read \App\Models\Taxonomy $taxonomy
 * @method static TaxonomyTermBuilder|TaxonomyTerm newModelQuery()
 * @method static TaxonomyTermBuilder|TaxonomyTerm newQuery()
 * @method static TaxonomyTermBuilder|TaxonomyTerm query()
 * @method static TaxonomyTermBuilder|TaxonomyTerm statuses()
 * @method static TaxonomyTermBuilder|TaxonomyTerm whereId($value)
 * @method static TaxonomyTermBuilder|TaxonomyTerm whereKey($value)
 * @method static TaxonomyTermBuilder|TaxonomyTerm whereTaxonomyId($value)
 * @method static TaxonomyTermBuilder|TaxonomyTerm whereTitle($value)
 * @method static TaxonomyTermBuilder|TaxonomyTerm userLessonStatuses()
 * @mixin Eloquent
 */
class TaxonomyTerm extends Model
{
    public $timestamps = false;

    public function newEloquentBuilder($query): TaxonomyTermBuilder
    {
        return new TaxonomyTermBuilder($query);
    }

    public function taxonomy(): BelongsTo
    {
        return $this->belongsTo(Taxonomy::class, 'taxonomy_id');
    }
}
