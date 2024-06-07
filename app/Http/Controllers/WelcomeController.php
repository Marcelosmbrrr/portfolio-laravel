<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use App\Models\Post;
use App\Models\Project;
use App\Models\Technology;
use App\Http\Resources\TechResource;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\PostResource;

class WelcomeController extends Controller
{
    public function __construct(Project $project, Post $post, Technology $technology)
    {
        $this->projectModel = $project;
        $this->techModel = $technology;
        $this->postModel = $post;
    }

    public function index()
    {
        return Inertia::render('Welcome', [
            'projects' => new ProjectResource($this->projectModel->all()),
            'techs' => new TechResource($this->techModel->all()),
            'posts' => new PostResource($this->postModel->all())
        ]);
    }

    protected function loadProjects()
    {
        $projects = $this->projectModel->limit(10)->get();

        return $projects->map(function ($project) {
            return [
                "id" => $project->id,
                "uuid" => $project->uuid,
                "status" => $project->status,
                "name" => $project->name,
                "description" => $project->description,
                "technologies" => json_decode($project->technologies),
                "image" => Storage::disk('public')->url($project->image),
                "created_at" => $project->created_at,
                "updated_at" => $project->updated_at
            ];
        });
    }

    protected function loadPosts()
    {
        $posts = $this->postModel->limit(10)->get();

        return $posts->map(function ($post) {
            return [
                "uuid" => $post->uuid,
                "name" => $post->name,
                "tags" => explode(",", $post->tags),
                "description" => $post->description,
                "image" => Storage::disk('public')->url($post->image),
                "created_at" => $post->created_at,
                "updated_at" => $post->updated_at
            ];
        });
    }

    public function postView(string $id)
    {
        $post = $this->postModel->findOrFail($id);

        return Inertia::render('Guest/PostView', $post);
    }
}
