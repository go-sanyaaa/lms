<?php

namespace Database\Seeders;

use App\Enums\StatusesTerms;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\TaxonomyTerm;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $statuses = TaxonomyTerm::query()
            ->statuses()
            ->get();

        /** @var TaxonomyTerm $activeStatus */
        $activeStatus = $statuses->where('key', '=', StatusesTerms::Active->value)->first();
        /** @var TaxonomyTerm $disableStatus */
        $disableStatus = $statuses->where('key', '=', StatusesTerms::Disabled->value)->first();

        /** @var Course $html */
        $html = Course::query()
            ->create([
                'title' => 'Основы HTML и CSS',
                'content' => '<h3>Приветствуем</h3>',
                'description' => 'Курс посвящен HTML и CSS',
                'status_id' => $activeStatus->id
            ]);

//        $html->lessons()->createMany([
//            ['title' => 'Введение в веб-разработку'],
//            ['title' => 'Текс в HTML. Часть 1'],
//            ['title' => 'Текс в HTML. Часть 2'],
//            ['title' => 'Текс в HTML. Часть 3'],
//            ['title' => 'Текс в HTML. Часть 4'],
//            ['title' => 'Текс в HTML. Часть 5'],
//            ['title' => 'Списки в HTML'],
//            ['title' => 'Основы CSS'],
//        ]);

//        $html->lessons->each(fn(Lesson $lesson
//        ) => $lesson->addMediaFromUrl('https://kuzbass-online.ru/uploads/attachments/os8/os8Bzf33cByysCN0lpPL0iz2TJ4ntCZ9kcOzAODT.jpeg')
//            ->usingFileName('Docs')
//            ->toMediaCollection('attachments')
//        );

        $js = Course::query()
            ->create([
                'title' => 'Основы JavaScript',
                'content' => '<h3>Это пустой курс</h3>',
                'description' => 'Этот курс не будет запущен',
                'status_id' => $disableStatus->id,
            ]);
    }
}
