<?php

namespace Database\Seeders;

use App\Enums\Permissions\Roles;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class ManagersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $auditor = User::query()->create([
            'name' => 'Светлана',
            'surname' => 'Кононова',
            'patronymic' => '',
            'email' => 'S.Kononova@i-digit.ru',
            'password' => Hash::make('UsqL98h'), // password
            'email_verified_at' => now(),
        ]);
        $auditor->assignRole(Roles::Auditor->value);
    }
}
