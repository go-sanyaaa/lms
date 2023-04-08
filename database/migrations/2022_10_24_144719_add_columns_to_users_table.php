<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('surname')->after('mentor_id')->nullable();
            $table->string('patronymic')->after('name')->nullable();
            $table->string('phone')->after('email')->nullable();
            $table->string('description')->after('phone')->nullable();
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['surname', 'patronymic', 'phone', 'description']);
        });
    }
};
