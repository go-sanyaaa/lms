<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class HomeworkGradeRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'grade' => ['required', 'integer', Rule::in([3, 4, 5]),]
        ];
    }
}
