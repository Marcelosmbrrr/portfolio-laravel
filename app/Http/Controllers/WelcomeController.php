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
            'posts' => new PostResource($this->postModel->where("is_published", true)->get())
        ]);
    }

    public function postView(string $id)
    {
        $post = $this->postModel->where("public_id", $id)->first();

        return Inertia::render('Posts/ShowPost', [
            "post" => [
                "id" => $post->public_id,
                "is_published" => $post->is_published,
                "name" => $post->name,
                "description" => $post->description,
                "tags" => json_decode($post->tags),
                "category" => $post->category,
                "content" => json_decode($post->content),
                "image" => Storage::url($post->image),
                "created_at" => $post->created_at->format('d/m/Y h:i'),
                "updated_at" => $post->updated_at->format('d/m/Y h:i')
            ]
        ]);
    }
}
