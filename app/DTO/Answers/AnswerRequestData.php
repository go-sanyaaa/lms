<?php

namespace App\DTO\Answers;

use App\Http\Requests\Lessons\StoreAnswerRequest;

interface AnswerRequestData
{
    public static function make(StoreAnswerRequest $request);
}
