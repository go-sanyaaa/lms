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

function convert($size)
{
    $unit = array('b', 'kb', 'mb', 'gb', 'tb', 'pb');
    return @round($size / pow(1024, ($i = floor(log($size, 1024)))), 2) . ' ' . $unit[$i];
}

Artisan::command('calc-user-access', function () {
    $c = collect()->range(10001, 40000);

    ini_set('memory_limit', '128M');

    echo ini_get('memory_limit');
    echo convert(memory_get_usage());
    echo "\n";

    $users = User::query()->get();

    \Illuminate\Support\Facades\Notification::send($users, new \App\Notifications\UserInviteNotification('123@asd.ru', '123'));

//    $users = User::query()
//        ->get();
//
    echo convert(memory_get_usage());
    echo "\n";
});
