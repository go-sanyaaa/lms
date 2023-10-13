<?php

namespace App\DTO;

class QuizQuestionRequestData
{
    /** @var QuizAnswerRequestData[] $answers */
    public array $answers;
    public string $question;
    public bool $multiple;
    public ?int $id;

    public function __construct(?int $id, string $question, array $answers, bool $multiple = false)
    {
        $this->question = $question;
        $this->multiple = $multiple;

        foreach ($answers as $answer) {
            $this->answers[] = new QuizAnswerRequestData($answer['id'] ?? null, $answer['text'], $answer['is_correct']);
        }
        $this->id = $id;
    }
}
