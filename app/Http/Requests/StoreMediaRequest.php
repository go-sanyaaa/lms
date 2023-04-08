<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rules\File;

class StoreMediaRequest extends \Illuminate\Foundation\Http\FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'file' => ['required', File::default()->max(10 * 1024)],
            'filename' => ['nullable', 'string']
        ];
    }
}
