<?php

namespace App\Exports;

use App\Enums\Permissions\Roles;
use App\Models\Lesson;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;

class StudentsExport implements FromCollection
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $lessons = Lesson::query()->where('course_id', '=', 1)->get();

        $students = collect([[
            'ID', 'ФИО', 'Почта', 'Институт', ...$lessons->pluck('description')->toArray()
        ]]);

        User::query()
            ->whereHas('roles', fn($q) => $q->where('name', '=', Roles::Student->value))
            ->where('id', '>', 5)
            ->with('homeworks')
            ->chunk(100, function (Collection $collection) use ($students, $lessons) {
                $students->push(
                    ...$collection->map(fn(User $user) => [
                    $user->id,
                    $user->fullName,
                    $user->email,
                    $user->description,
                    ...$lessons->map(fn(Lesson $lesson) => $user->homeworks->where('lesson_id', '=', $lesson->id)->first()?->grade ?? ''
                    )->toArray()
                ])->toArray()
                );
            });

        return $students;
    }
}
