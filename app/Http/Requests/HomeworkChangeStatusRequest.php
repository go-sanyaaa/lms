<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HomeworkChangeStatusRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'status_id' => ['required', 'exists:taxonomy_terms,id']
        ];
    }
}
