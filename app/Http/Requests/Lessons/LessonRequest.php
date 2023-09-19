<?php

namespace App\Http\Requests\Lessons;

use App\Enums\LessonTypeEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class LessonRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'content' => ['required', 'string'],
            'attachments' => ['array'],
            'type' => [Rule::in([LessonTypeEnum::Testing->value, LessonTypeEnum::Homework->value])],
            'attachments.*.id' => ['required','exists:media,id']
        ];
    }
}
