<?php

namespace App\Enums;

enum HomeworkStatusTerms: string
{
    case Open = 'open';
    case Review = 'review';
    case Completed = 'completed';
    case Rework = 'rework';
}
