<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# LMS - Learning Management System

Платформа позволяет проводить обучения по курсам

В системе существует 3 роли
- Студент - обучающийся в системе, может выполнять назначенные ему уроки в рамках курса
- Преподаватель - имеет возможность проверять ДЗ студентов и отправлять им обратную связь
- Тьютор - может создавать уроки в рамках курса и назначать преподователей по студентам

## Подготовка docker-окружения разработки

### Требования к системе
- docker 1.13.0+
- yarn 1.22.17+

---

Копируем переменные окружения из примера и настраиваем по необходимости
```sh 
cp .env.example .env
```

Устанавливаем зависимости
```shell
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
```

Запускаем сервис с необходимым окружением
```sh 
sail up -d 
```

Запускаем миграции (подготовка БД)
```sh 
sail artisan migrate
```

Запускаем сиды (заполнение БД тестовыми данным)
```sh 
sail artisan db:seed
```

**Sail** - это командный интерфейс для взаимодействия с docker-окружением в среде разработки в Laravel
Подробнее о работе sail можно найти в [документации](https://laravel.com/docs/10.x/sail)

---

**Также необходимо собрать клиентскую часть приложения**

Устанавливаем зависимости
```sh 
yarn
```
Сборка клиентского приложения
```sh 
yarn build
```
Запуск клиента в режиме разработки
```sh 
yarn dev
```

## Документация по работе с сервисом

После запуска сидов в системе должно появится 4 пользователя:
- Студент: student@mail.ru:password
- Преподаватель: teacher@mail.ru:password
- Преподаватель2: teacher2@mail.ru:password
- Тьютор: controller@mail.ru:password

Пользователю "Студент" назначен курс "Основы HTML и CSS"

### Импорт студентов
Файл с данным студентов находится в storage/users2.csv

Для импорта студентов запустите команду
```shell
sail artisan users:import
```
Команду создаст студентов и отправит на их почту письма с данными для входа в систему.
Всем перечисленным студентам будет назначен первый курс.

### Импорт преподавателей
Файл с данным преподавателей находится в storage/managers.csv

Для импорта преподавателей запустите команду
```shell
sail artisan managers:import
```
Команду создаст преподавателей и отправит на их почту письма с данными для входа в систему.

### Повторная отправка писем студентам
Файл с данным для повторной отправки находится в storage/resend_users.csv

Для импорта повторной отправки запустите команду
```shell
sail artisan users:resend
```
