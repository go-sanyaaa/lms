<?php

namespace App\Http\Requests\Lessons;

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
        return [
            'content' => ['required_without:attachments', 'nullable', 'string'],
            'attachments' => ['array'],
            'attachments.*.id' => ['required_without:content','exists:media,id']
        ];
    }
}
