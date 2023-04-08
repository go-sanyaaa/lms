<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::rename('user_lesson', 'homeworks');
        Schema::table('homeworks', function (Blueprint $table) {
            $table->id()->first();
            $table->smallInteger('grade')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('homeworks', function (Blueprint $table) {
            $table->dropColumn('grade');
            $table->dropColumn('id');
        });
        Schema::rename('homeworks', 'user_lesson');
    }
};
