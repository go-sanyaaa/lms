<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\HomeworkController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\MentorsController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => ['auth', 'verified']], function () {

    Route::get('/', [CourseController::class, 'index'])->name('home');

    Route::prefix('/lessons')->group(static function () {
        Route::get('/{lesson}', [LessonController::class, 'show'])->name('lesson');
        Route::put('/{lesson}/update', [LessonController::class, 'update'])->name('lesson.update');
        Route::post('/{lesson}/answer', [LessonController::class, 'addAnswer'])->name('lesson.answer.store');
    });

    Route::prefix('/courses')->group(static function () {
        Route::get('{course}/edit', [CourseController::class, 'edit'])->name('course.edit');
        Route::put('{course}/edit', [CourseController::class, 'update'])->name('course.update');

        Route::post('{course}/lessons', [LessonController::class, 'store'])->name('lesson.store');
    });

    Route::prefix('/homeworks')->group(function () {
        Route::post('{homework}/change-status', [HomeworkController::class, 'changeStatus'])->name('homework.status.change');
        Route::post('{homework}/grade', [HomeworkController::class, 'grade'])->name('homework.status.grade');
        Route::post('{homework}/answer', [HomeworkController::class, 'answer'])->name('homework.answer.store');
    });

    Route::prefix('/students')->group(function () {
        Route::get('/', [StudentController::class, 'index'])->name('student.index');
        Route::put('/{user}/update', [StudentController::class, 'update'])->name('student.update');
    });

    Route::prefix('/mentors')->group(function () {
        Route::put('/{user}/students/update', [MentorsController::class, 'updateStudents'])->name('mentors.students.update');
    });

    Route::post('/upload', [MediaController::class, 'store'])->name('upload');
});





require __DIR__.'/auth.php';
