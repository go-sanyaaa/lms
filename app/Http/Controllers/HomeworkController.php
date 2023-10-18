<?php

namespace App\Http\Controllers;

use App\Enums\HomeworkStatusIdTerms;
use App\Exports\HomeworksExport;
use App\Http\Requests\HomeworkChangeStatusRequest;
use App\Http\Requests\HomeworkGradeRequest;
use App\Http\Requests\Lessons\StoreAnswerRequest;
use App\Http\Requests\Lessons\StoreHomeworkAnswerRequest;
use App\Http\Resources\HomeworkResource;
use App\Models\Answer;
use App\Models\Homework;
use App\Models\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class HomeworkController extends Controller
{
    /**
     * @throws AuthorizationException
     */
    public function changeStatus(HomeworkChangeStatusRequest $request, Homework $homework,)
    {
        $statusId = $request->get('status_id');

        $this->authorize('changeStatus', [$homework, $statusId]);

        $homework->status_id = $statusId;
        $homework->save();

        return back(303);
    }

    /**
     * @param HomeworkGradeRequest $request
     * @param Homework $homework
     * @return RedirectResponse
     * @throws AuthorizationException
     */
    public function grade(HomeworkGradeRequest $request, Homework $homework,)
    {
        $this->authorize('grade', [$homework]);

        $homework->status_id = HomeworkStatusIdTerms::Completed->value;
        $homework->grade = $request->get('grade');
        $homework->save();

        return back(303);
    }

    public function show(Homework $homework)
    {
        $homework->load(['answers', 'status', 'lesson', 'answers.author', 'answers.media']);

        return HomeworkResource::make($homework);
    }

    /**
     * @param Homework $homework
     * @param StoreHomeworkAnswerRequest $request
     * @return RedirectResponse
     * @throws AuthorizationException
     */
    public function answer(Homework $homework, StoreHomeworkAnswerRequest $request)
    {
        /** @var User $user */
        $user = $request->user();

        $this->authorize('create', [Answer::class, $homework]);

        DB::beginTransaction();

        $answer = $homework->answers()->create([
            'content' => $request->get('content'),
            'user_id' => $user->id
        ]);

        $mediaIds = collect($request->get('attachments'))->pluck('id')->toArray();
        $answer->syncMedia($mediaIds, 'attachments');

        DB::commit();

        return back(303);
    }

    public function export()
    {
        $this->authorize('export', Homework::class);

        return Excel::download(new HomeworksExport, 'users.xlsx');
    }
}
