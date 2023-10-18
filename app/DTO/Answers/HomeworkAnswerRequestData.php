<?php

namespace App\DTO\Answers;

use App\Http\Requests\Lessons\StoreAnswerRequest;

class HomeworkAnswerRequestData implements AnswerRequestData
{
    public string $content;
    public array $attachments;

    public function __construct(string $content, array $attachments = [])
    {
        $this->content = $content;
        $this->attachments = $attachments;
    }

    public static function make(StoreAnswerRequest $request): self
    {
        return new self($request->get('content'), $request->get('attachments'));
    }
}
