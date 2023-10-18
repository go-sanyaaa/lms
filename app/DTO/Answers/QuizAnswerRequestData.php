<?php

namespace App\DTO\Answers;

use App\Http\Requests\Lessons\StoreAnswerRequest;

class QuizAnswerRequestData implements AnswerRequestData
{
    public array $responses;

    public function __construct(array $responses = [])
    {
        $this->responses = $responses;
    }

    public static function make(StoreAnswerRequest $request): self
    {
        return new self($request->get('responses'));
    }
}
