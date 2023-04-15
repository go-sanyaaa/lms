<?php

namespace App\Http\Controllers;

use App\Enums\Permissions\Roles;
use App\Http\Requests\UpdateCourseRequest;
use App\Http\Resources\CourseResource;
use App\Http\Resources\HomeworkListResource;
use App\Http\Resources\TaskListResource;
use App\Models\Course;
use App\Models\Homework;
use App\Models\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CourseController extends Controller
{
    /**
     * @throws \Throwable
     */
    public function index(Request $request)
    {
        /** @var User $user */
        $user = $request->user()->load(['homeworks']);

        /** @var null|Course $course */
        $course = Course::query()->find(1);

        throw_unless($course, NotFoundHttpException::class);

        $this->authorize('view', $course);

        $tasks = $user->hasRole(Roles::Controller->value)
            ? Homework::query()
                ->where(fn(Builder $q) => $q
                    ->orWhereHas('auditor.headUsers', fn($q) => $q->where('id', '=', $user->id))
                    ->orWhere('auditor_id', $user->id)
                    ->orWhereHas('user.headUsers', fn($q) => $q->where('id', '=', $user->id))
                    ->orWhereHas('user.mentor.headUsers', fn($q) => $q->where('id', '=', $user->id))
                )
                ->with(['lesson', 'status', 'user', 'auditor'])
                ->paginate()
            : Homework::query()
                ->where(fn(Builder $q) => $q
                    ->where('auditor_id', $user->id)
                    ->orWhereHas('user.headUsers', fn($q) => $q->where('id', '=', $user->id))
                )
                ->with(['lesson', 'status', 'user', 'auditor'])
                ->paginate();

        return Inertia::render('Home', [
            'course' => CourseResource::make($course),
            'homeworks' => HomeworkListResource::collection($user->homeworks->load(['status', 'lesson'])),
            'tasks' => TaskListResource::collection($tasks),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Course $course
     * @return Response
     * @throws AuthorizationException
     */
    public function edit(Course $course): Response
    {
        $this->authorize('update', $course);

        $course->load(['lessons' => fn($b) => $b->withMedia('attachments')]);

        return Inertia::render('Courses/CourseEditPage', [
            'course' => CourseResource::make($course),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UpdateCourseRequest  $request
     * @param  Course  $course
     * @return RedirectResponse
     * @throws AuthorizationException
     */
    public function update(UpdateCourseRequest $request, Course $course)
    {
        $this->authorize('update', $course);

        $data = $request->validated();

        $course->fill($data)->save();

        Session::flash('message', __('messages.course.update'));

        return back(303);
    }
}
