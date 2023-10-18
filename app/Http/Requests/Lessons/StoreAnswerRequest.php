<?php

namespace App\Http\Requests\Lessons;

use App\DTO\Answers\HomeworkAnswerRequestData;
use App\DTO\Answers\QuizAnswerRequestData;
use App\Enums\LessonTypeEnum;
use App\Models\Lesson;
use Illuminate\Foundation\Http\FormRequest;

class StoreAnswerRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        /** @var Lesson $lesson */
        $lesson = $this->route()->parameter('lesson');

        if ($lesson->type === LessonTypeEnum::Homework->value) {
            return [
                'content' => ['required_without:attachments', 'nullable', 'string'],
                'attachments' => ['array'],
                'attachments.*.id' => ['required_without:content', 'exists:media,id']
            ];
        }

        return [
            'responses' => ['required', 'array'],
            'responses.*.question_id' => ['required', 'exists:questions,id'],
            'responses.*.answers_ids' => ['required', 'array', 'exists:questions_answers,id'],
        ];

    }

    public function data()
    {
        /** @var Lesson $lesson */
        $lesson = $this->route()->parameter('lesson');

        switch ($lesson->type) {
            case LessonTypeEnum::Homework->value:
            {
                return HomeworkAnswerRequestData::make($this);
            }
            case LessonTypeEnum::Testing->value:
            {
                return QuizAnswerRequestData::make($this);
            }
            default:
                return null;
        }
    }
}
