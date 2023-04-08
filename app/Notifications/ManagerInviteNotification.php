<?php

namespace App\Notifications;

use App\Models\User;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ManagerInviteNotification extends Notification
{
    private string $email;
    private string $password;

    public function __construct(string $email, string $password)
    {
        $this->email = $email;
        $this->password = $password;
    }

    public function via($notifiable): array
    {
        return ['mail'];
    }

    public function toMail(User $notifiable)
    {
        return (new MailMessage())
            ->subject('Доступ на платформу')
            ->markdown('emails.manager-invite', [
                'email' => $this->email,
                'password' => $this->password,
            ]);
    }

    public function toArray($notifiable): array
    {
        return [];
    }
}
