<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Technology;

class TechSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Technology::insert([
            [
                "name" => "Frontend Essencial",
                "description" => "Domínio da tríade HTML, CSS e JavaScript, além de conhecimentos em Typescript.",
                "icons" => json_encode(["html5/html5-original", "css3/css3-original", "javascript/javascript-original", "typescript/typescript-original"])
            ],
            [
                "name" => "Frameworks Frontend",
                "description" => "Conhecimento e experiência em ReactJs, NextJs e VueJs.",
                "icons" => json_encode(["react/react-original", "nextjs/nextjs-original", "vuejs/vuejs-original"])
            ],
            [
                "name" => "PHP",
                "description" => "Conhecimento e experiência em de PHP e Laravel.",
                "icons" => json_encode(["php/php-original", "laravel/laravel-original"])
            ],
            [
                "name" => "NodeJS",
                "description" => "Conhecimento em NodeJS e desenvolvimento de apis com NestJS e AdonisJs.",
                "icons" => json_encode(["nodejs/nodejs-original", "nestjs/nestjs-original", "adonisjs/adonisjs-original"])
            ],
            [
                "name" => "Banco de Dados",
                "description" => "Conhecimento em banco de dados relacionais, como MySQL e PostgreSQL.",
                "icons" => json_encode(["mysql/mysql-original", "postgresql/postgresql-original"])
            ],
            [
                "name" => "DevOps",
                "description" => "Conhecimento em Docker, CI/CD com Github Actions e Cloud Hosting com AWS e Digital Ocean.",
                "icons" => json_encode(["docker/docker-original", "amazonwebservices/amazonwebservices-plain-wordmark", "digitalocean/digitalocean-original"])
            ],
        ]);
    }
}
