<?php

namespace App\Http\Controllers\Authenticated;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\Post;
use App\Models\Technology;

class DashboardController extends Controller
{
    public function __invoke()
    {
        return Inertia::render("Dashboard", [
            "data" => [
                "projects" => Project::count(),
                "posts" => Post::count(),
                "technologies" => Technology::count()
            ]
        ]);
    }
}
