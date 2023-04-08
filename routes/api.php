<?php

use App\Http\Controllers\HomeworkController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth'])->group(function () {
    Route::get('/homeworks/export', [HomeworkController::class, 'export'])->name('homeworks.export');
    Route::get('/homeworks/{homework}', [HomeworkController::class, 'show'])->name('api.homework.show');
    Route::get('/students/export', [StudentController::class, 'export'])->name('students.export');
    Route::get('/students/{user}', [StudentController::class, 'show'])->name('student.show');
});

