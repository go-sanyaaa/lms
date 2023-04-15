<?php

namespace App\Http\Controllers;

use App\Enums\Permissions\Roles;
use App\Exports\StudentsExport;
use App\Http\Requests\UpdateStudentRequest;
use App\Http\Resources\StudentListResource;
use App\Http\Resources\StudentResource;
use App\Models\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Inertia\Response;
use Maatwebsite\Excel\Facades\Excel;

class StudentController extends Controller
{
    /**
     * @return Response
     * @throws AuthorizationException
     */
    public function index(Request $request)
    {
        /** @var User $user */
        $user = $request->user();

        $this->authorize('viewStudents', User::class);

        $students = User::query()
            ->whereHas('roles', fn(Builder $q) => $q->where('name', '=', Roles::Student->value))
            ->where(fn(Builder $q) => $q
                ->orWhereHas('mentor.headUsers', fn($q) => $q->where('id', '=', $user->id))
                ->orWhere('mentor_id', '=', $user->id)
                ->orWhereHas('headUsers', fn($q) => $q->where('id', '=', $user->id))
            )
            ->with(['mentor'])
            ->withCount(['homeworks', 'completedHomeworks'])
            ->paginate();

        return Inertia::render('Students/StudentsPage')
            ->with([
                'students' => StudentListResource::collection($students)
            ]);
    }

    public function show(User $user)
    {
        $this->authorize('show', $user);

        $user->load(['homeworks', 'mentor']);

        return StudentResource::make($user);
    }

    public function update(User $user, UpdateStudentRequest $request)
    {
        $this->authorize('update', $user);

        $user->fill($request->validated());

        $user->save();

        Session::flash('message', __('messages.student.update'));

        return back(303);
    }

    public function export()
    {
        $this->authorize('exportStudents', User::class);

        return Excel::download(new StudentsExport, 'students.xlsx');
    }
}
