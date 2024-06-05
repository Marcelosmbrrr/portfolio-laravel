<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "uuid" => "1995f057-a876-4215-b947-40dbbc83fe79",
                "status" => "finalizado",
                "name" => "Portfolio v1",
                "description" => "Primeira versão do portfolio, feita com NextJS e hospedada na Vercel.",
                "technologies" => json_encode(["Nextjs 13", "TypeScript", "Tailwind CSS", "Prisma ORM", "Planet Scale", "Auth0", "Vercel"]),
                "image" => "projects/1995f057-a876-4215-b947-40dbbc83fe79.png",
            ],
            [
                "uuid" => "c36d5994-5fb2-4d32-8a75-2cfc769f9eaf",
                "status" => "produção",
                "name" => "Portfolio v2",
                "description" => "Segunda versão do portfolio, que é a atual, feita com Laravel, VueJS e hospedada na Heroku.",
                "technologies" => json_encode(["Laravel 10", "Inertiajs", "ReactJs", "TypeScript", "Tailwind CSS", "AWS S3", "Supabase", "Heroku"]),
                "image" => "projects/c36d5994-5fb2-4d32-8a75-2cfc769f9eaf.png",
            ],
        ];

        foreach ($data as $project) {
            Project::create($project);
        }
    }
}
