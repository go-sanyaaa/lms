<?php

namespace App\Enums\Permissions;

enum Roles: string
{
    case Controller = 'controller';
    case Auditor = 'auditor';
    case Student = 'student';
}
