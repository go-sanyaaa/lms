<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('user_access_model', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->unsignedBigInteger('model_id');
            $table->string('model_type');

            $table->unique(['user_id', 'model_id', 'model_type']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_access_model');
    }
};
