<?php

namespace App\Models;

use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Taxonomy
 *
 * @property int $id
 * @property string $key
 * @property string $title
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\TaxonomyTerm[] $terms
 * @property-read int|null $terms_count
 * @method static \Illuminate\Database\Eloquent\Builder|Taxonomy newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Taxonomy newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Taxonomy query()
 * @method static \Illuminate\Database\Eloquent\Builder|Taxonomy whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Taxonomy whereKey($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Taxonomy whereTitle($value)
 * @mixin Eloquent
 */
class Taxonomy extends Model
{
    public $timestamps = false;

    public function terms(): HasMany
    {
        return $this->hasMany(TaxonomyTerm::class, 'taxonomy_id');
    }
}
