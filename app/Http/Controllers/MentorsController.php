<?php

namespace App\Http\Controllers;

use App\Enums\Permissions\Roles;
use App\Http\Requests\UpdateMentorStudentsRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Http\Resources\StudentListResource;
use App\Http\Resources\StudentResource;
use App\Models\Homework;
use App\Models\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Inertia\Response;

class MentorsController extends Controller
{
    public function updateStudents(User $user, UpdateMentorStudentsRequest $request)
    {
        $this->authorize('update-mentors');

        DB::beginTransaction();

        User::query()
            ->whereIn('id', $request->get('students'))
            ->update(['mentor_id' => $user->id]);

        if($request->get('deep')) {
            Homework::query()
                ->whereIn('user_id', $request->get('students'))
                ->update(['auditor_id' => $user->id]);
        }

        DB::commit();

        Session::flash('message', __('messages.mentors.students.update'));

        return back(303);
    }
}
