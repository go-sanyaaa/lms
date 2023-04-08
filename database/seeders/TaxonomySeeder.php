<?php

namespace Database\Seeders;

use App\Enums\HomeworkStatusIdTerms;
use App\Enums\HomeworkStatusTerms;
use App\Enums\StatusesTerms;
use App\Models\Taxonomy;
use Illuminate\Database\Seeder;

class TaxonomySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /** @var Taxonomy $statuses */
        $statuses = Taxonomy::query()
            ->updateOrCreate([
                'title' => 'Статус',
                'key' => \App\Enums\Taxonomy::Statuses->value,
            ]);

        $statuses->terms()->updateOrCreate([
            'id' => 1,
            'key' => StatusesTerms::Active,
            'title' => 'Активный',
        ]);

        $statuses->terms()->updateOrCreate([
            'id' => 2,
            'key' => StatusesTerms::Disabled,
            'title' => 'Неактивный',
        ]);

        /** @var Taxonomy $statuses */
        $userLessonStatuses = Taxonomy::query()
            ->updateOrCreate([
                'title' => 'Статус урока',
                'key' => \App\Enums\Taxonomy::UserLessonStatus->value,
            ]);

        $userLessonStatuses->terms()->updateOrCreate([
            'id' => HomeworkStatusIdTerms::Open,
            'key' => HomeworkStatusTerms::Open,
        ], [
            'title' => 'В работе',
        ]);
        $userLessonStatuses->terms()->updateOrCreate([
            'id' => HomeworkStatusIdTerms::Review,
            'key' => HomeworkStatusTerms::Review,
        ], [
            'title' => 'На проверке',
        ]);
        $userLessonStatuses->terms()->updateOrCreate([
            'id' => HomeworkStatusIdTerms::Completed,
            'key' => HomeworkStatusTerms::Completed,
        ], [
            'title' => 'Выполнен',
        ]);
        $userLessonStatuses->terms()->updateOrCreate([
            'id' => HomeworkStatusIdTerms::Rework,
            'key' => HomeworkStatusTerms::Rework,
        ], [
            'title' => 'На доработке',
        ]);
    }
}
