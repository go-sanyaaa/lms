<?php

namespace App\Http\Controllers;

use App\DTO\QuizRequestData;
use App\Enums\HomeworkStatusIdTerms;
use App\Http\Requests\Lessons\LessonRequest;
use App\Http\Requests\Lessons\StoreAnswerRequest;
use App\Http\Resources\HomeworkListResource;
use App\Http\Resources\LessonResource;
use App\Models\Course;
use App\Models\Homework;
use App\Models\Lesson;
use App\Models\User;
use App\Services\LessonService;
use App\Services\QuizService;
use App\Services\UsersService;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Spatie\Activitylog\Models\Activity;

class LessonController extends Controller
{
    private QuizService $quizService;
    private LessonService $lessonService;

    public function __construct(
        QuizService $quizService,
        LessonService $lessonService
    )
    {
        $this->quizService = $quizService;
        $this->lessonService = $lessonService;
    }

    /**
     * @throws \Throwable
     */
    public function show(Request $request, Lesson $lesson)
    {
        /** @var User $user */
        $user = $request->user();

        $this->authorize('view', $lesson);

        $lesson->load(['course', 'media', 'quiz',
            'quiz.userAnswers' => fn(MorphMany $b) => $b->where('user_id', '=', $user->id)
        ]);

        /** @var Homework $homework */
        $homework = $lesson->homeworks()
            ->where('user_id', '=', $user->id)
            ->with('answers.author','answers.media')
            ->first();

        /** @var null|Activity $lastSendToReworkActivity */
        $lastSendToReworkActivity = $homework
            ?->activities()
            ->whereJsonContains('properties->old->status_id', HomeworkStatusIdTerms::Review)
            ->whereJsonContains('properties->attributes->status_id', HomeworkStatusIdTerms::Rework)
            ->latest('created_at')
            ->first();

        return Inertia::render('Lesson', [
            'lesson' => LessonResource::make($lesson),
            'canAddHomework' => $user->can('create', [Homework::class, $lesson]),
            'lastReworkDate' => $lastSendToReworkActivity?->created_at,
            'homework' => $homework ? HomeworkListResource::make($homework) : null
        ]);
    }

    /**
     * @param  Lesson  $lesson
     * @param  LessonRequest  $request
     * @return RedirectResponse
     * @throws AuthorizationException
     */
    public function update(Lesson $lesson, LessonRequest $request): RedirectResponse
    {
        $this->authorize('update', $lesson);

        $data = $request->only(['title', 'content', 'description', 'type']);
        $lesson->fill($data)->save();

        $this->quizService->syncQuiz($lesson, new QuizRequestData($request->get('quiz', [])));

        $mediaIds = collect($request->get('attachments'))->pluck('id')->toArray();
        $lesson->syncMedia($mediaIds, 'attachments');

        Session::flash('message', __('messages.lesson.update'));

        return back(303);
    }

    /**
     * @param  LessonRequest  $request
     * @return RedirectResponse
     * @throws AuthorizationException
     */
    public function store(LessonRequest $request, Course $course): RedirectResponse
    {
        $this->authorize('create', Lesson::class);
        $data = $request->only(['title', 'content', 'description', 'type']);

        $lesson = Lesson::query()->make($data);
        $lesson->course_id = $course->id;
        $lesson->save();

        $this->quizService->syncQuiz($lesson, new QuizRequestData($request->get('quiz', [])));

        $mediaIds = collect($request->get('attachments'))->pluck('id')->toArray();
        $lesson->syncMedia($mediaIds, 'attachments');

        Session::flash('message', __('messages.lesson.create'));

        return back(303);
    }

    /**
     * @param StoreAnswerRequest $request
     * @param Lesson $lesson
     * @return RedirectResponse
     * @throws AuthorizationException
     */
    public function addAnswer(StoreAnswerRequest $request, Lesson $lesson)
    {
        /** @var User $user */
        $user = $request->user();

        $requestData = $request->data();

        $this->lessonService->addAnswer($user, $lesson, $requestData);

        Session::flash('message', __('messages.answer.create'));

        return back(303);
    }
}
