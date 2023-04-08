<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMentorStudentsRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'deep' => ['boolean'],
            'students' => ['required','array'],
            'students.*' => ['integer', 'exists:users,id'],
        ];
    }
}
