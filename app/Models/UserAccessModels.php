<?php

namespace App\Models;

use Barryvdh\LaravelIdeHelper\Eloquent;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

/**
 * App\Models\UserAccessModels
 *
 * @method static \Illuminate\Database\Eloquent\Builder|UserAccessModels newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserAccessModels newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserAccessModels query()
 * @mixin Eloquent
 * @property int $user_id
 * @property int $model_id
 * @property string $model_type
 * @property-read \Illuminate\Database\Eloquent\Model|\Eloquent $model
 * @method static \Illuminate\Database\Eloquent\Builder|UserAccessModels whereModelId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserAccessModels whereModelType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserAccessModels whereUserId($value)
 */
class UserAccessModels extends Pivot
{
    public function model(): MorphTo
    {
        return $this->morphTo();
    }
}
