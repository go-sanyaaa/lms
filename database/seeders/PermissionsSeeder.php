<?php

namespace Database\Seeders;

use App\Enums\Permissions\Roles;
use App\Enums\StatusesTerms;
use App\Models\Taxonomy;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::query()->updateOrCreate(['name' => Roles::Auditor]);
        Role::query()->updateOrCreate(['name' => Roles::Controller]);
        Role::query()->updateOrCreate(['name' => Roles::Student]);
    }
}
