<?php

namespace Database\Seeders;

use App\Enums\Permissions\Roles;
use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $auditor = User::query()->create([
            'name' => 'Хвича Кварацхелия',
            'email' => 'controller@mail.ru',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'email_verified_at' => now(),
        ]);
        $auditor->assignRole(Roles::Controller->value);

        $auditor2 = User::query()->create([
            'name' => 'Преподователь Один',
            'email' => 'teacher@mail.ru',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'email_verified_at' => now(),
        ]);
        $auditor2->assignRole(Roles::Auditor->value);

        $auditor3 = User::query()->create([
            'name' => 'Преподователь Два',
            'email' => 'teacher2@mail.ru',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'email_verified_at' => now(),
        ]);
        $auditor3->assignRole(Roles::Auditor->value);

        $student = User::query()->create([
            'name' => 'Виктор Осимхен',
            'email' => 'student@mail.ru',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'email_verified_at' => now(),
        ]);
        $student->assignRole(Roles::Student->value);

        /** @var Course $html */
        $html = Course::query()->first();
        $student->courses()->attach($html->id);
    }
}
