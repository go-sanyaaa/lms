<?php

namespace App\Enums;

enum HomeworkStatusIdTerms: int
{
    case Open = 3;
    case Review = 4;
    case Completed = 5;
    case Rework = 6;
}
