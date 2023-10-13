<?php

namespace App\DTO;

class QuizAnswerRequestData
{

    public ?int $id;
    public string $text;
    public bool $isCorrect;

    public function __construct(?int $id, string $text, bool $isCorrect)
    {
        $this->text = $text;
        $this->isCorrect = $isCorrect;
        $this->id = $id;
    }
}
