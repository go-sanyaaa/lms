<?php

namespace App\Services;

use App\DTO\QuizAnswerRequestData;
use App\DTO\QuizQuestionRequestData;
use App\DTO\QuizRequestData;
use App\Enums\LessonTypeEnum;
use App\Models\Lesson;
use App\Models\Quizzes\Answer;
use App\Models\Quizzes\Question;
use App\Models\Quizzes\Quiz;
use DB;

class QuizService
{
    public function syncQuiz(Lesson $lesson, QuizRequestData $quizData): ?Quiz
    {
        return DB::transaction(function () use ($quizData, $lesson) {

            if ($lesson->type !== LessonTypeEnum::Testing->value) {
                $lesson->quiz()->delete();

                return null;
            }

            $quiz = $lesson->quiz ?? $lesson->quiz()->create();

            $editedQuestions = $this->syncQuestions($quiz, $quizData->questions);
            $quiz->questions()
                ->whereNotIn('id', array_map(fn(Question $q) => $q->id, $editedQuestions))
                ->delete();

            return $quiz;
        });
    }

    /**
     * @param Quiz $quiz
     * @param QuizQuestionRequestData[] $questions
     * @return array|Question[]
     */
    private function syncQuestions(Quiz $quiz, array $questions): array
    {
        $editedQuestions = [];
        foreach ($questions as $index => $questionData) {
            $question = Question::query()->findOrNew($questionData->id);

            $question->fill([
                'question' => $questionData->question,
                'multiple' => $questionData->multiple,
                'index' => $index,
                'quiz_id' => $quiz->id
            ]);

            $question->save();

            $this->syncAnswers($question, $questionData->answers);

            $editedQuestions[] = $question;
        }

        return $editedQuestions;
    }

    /**
     * @param Question $question
     * @param QuizAnswerRequestData[] $answers
     * @return void
     */
    private function syncAnswers(Question $question, array $answers): void
    {
        foreach ($answers as $answerData) {
            $answer = Answer::query()->findOrNew($answerData->id);

            $answer->fill([
                'text' => $answerData->text,
                'is_correct' => $answerData->isCorrect,
                'question_id' => $question->id
            ]);

            $answer->save();
        }
    }
}
