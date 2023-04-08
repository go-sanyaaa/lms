@component('mail::message')
## Вам предоставлен доступ на платформу

Данные для авторизации: <br><br>
**Ссылка на платформу:** {{ route('home') }}<br/>
**Логин:** {{ $email }}<br/>
**Пароль:** {{ $password }}<br/>

@endcomponent
