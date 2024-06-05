<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            "name" => "Marcelo Moreira",
            "username" => env("ADMIN_USERNAME"),
            "email" => env("ADMIN_EMAIL"),
            "password" => env("ADMIN_PASSWORD"),
            "email_verified_at" => now()
        ]);
    }
}
