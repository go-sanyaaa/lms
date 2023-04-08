<?php

use App\Imports\ManagersImport;
use App\Imports\StudentsImport;
use App\Imports\StudentsResendEmailImport;
use App\Models\User;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('users:import', function () {
    $usersPath = storage_path('/users2.csv');

    Excel::import(new StudentsImport(), $usersPath);
})->purpose('Импорт пользователей');


Artisan::command('users:resend', function () {
    $usersPath = storage_path('/resend_users.csv');

    Excel::import(new StudentsResendEmailImport(), $usersPath);
})->purpose('Повторная отправка доступов пользователям');

Artisan::command('managers:import', function () {
    $usersPath = storage_path('/managers.csv');

    Excel::import(new ManagersImport(), $usersPath);
})->purpose('Импорт менеджеров');

Artisan::command('debug-sentry', function () {
    throw new Exception('My first Sentry error!');
});

Artisan::command('calc-user-access', function () {
    $users = User::query()
        ->with('mentor.headUsers')
        ->whereHas('mentor.headUsers')
        ->get();

    DB::beginTransaction();

    $users->each(fn(User $user) =>
        $user->headUsers()->sync($user->mentor->headUsers, false)
    );

    DB::commit();
});
