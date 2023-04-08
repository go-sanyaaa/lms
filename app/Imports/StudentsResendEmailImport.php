<?php

namespace App\Imports;

use App\Enums\Permissions\Roles;
use App\Models\User;
use App\Notifications\UserInviteNotification;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Output\ConsoleOutput;

class StudentsResendEmailImport implements ToCollection, WithHeadingRow
{
    public function collection(Collection $rows)
    {

        $output = new ConsoleOutput();
        $bar = new ProgressBar($output);

        $bar->start($rows->count());

        $rows->each(function ($row) use ($bar) {
            if (!$row['email']) {
                $bar->advance();
                return null;
            }

            $names = explode(' ', $row['name']);

            $password = $row['password'] ?? Str::random(8);

            $user = User::query()->updateOrCreate([
                'email' => $row['email'],
            ],[
                'name' => $names[1] ?? '',
                'surname' => $names[0] ?? null,
                'patronymic' => $names[2] ?? null,
                'password' => Hash::make($password),
                'phone' => $row['phone'],
                'description' => $row['desc']
            ]);

            $user->markEmailAsVerified();

            $user->save();

            $user->assignRole(Roles::Student->value);

            $user->courses()->sync([1]);

            $user->notify(new UserInviteNotification($user->email, $password));

            $bar->advance();

            return $user;
        });

        $bar->finish();
    }
}
