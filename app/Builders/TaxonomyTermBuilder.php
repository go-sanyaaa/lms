<?php

namespace App\Builders;

use App\Enums\Taxonomy;
use Illuminate\Database\Eloquent\Builder;

class TaxonomyTermBuilder extends Builder
{
    public function statuses(): self
    {
        return $this->whereHas('taxonomy',
            fn(Builder $b) => $b->where('key', '=', Taxonomy::Statuses->value)
        );
    }

    public function userLessonStatuses(): self
    {
        return $this->whereHas('taxonomy',
            fn(Builder $b) => $b->where('key', '=', Taxonomy::UserLessonStatus->value)
        );
    }
}
