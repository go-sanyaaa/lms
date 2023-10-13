<?php

namespace App\DTO;

class QuizRequestData
{
    /**
     * @var QuizQuestionRequestData[]
     */
    public array $questions;

    public ?int $id;

    public function __construct(?array $quiz = [])
    {
        $this->id = $quiz['id'] ?? null;

        if(!isset($quiz)) {
            return;
        }

        foreach ($quiz['questions'] as $question) {
            $this->questions[] = new QuizQuestionRequestData($question['id'] ?? null, $question['question'], $question['answers'], $question['multiple']);
        }
    }
}
