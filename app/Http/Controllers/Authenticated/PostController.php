<?php

namespace App\Http\Controllers\Authenticated;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Models\Post;
use App\Http\Requests\Post\CreatePostRequest;
use App\Http\Requests\Post\EditPostRequest;
use App\Http\Resources\PostResource;

class PostController extends Controller
{
    public function __construct(Post $model)
    {
        $this->model = $model;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $limit = request("limit", "10");
        $page = request("page", "1");
        $search = request("search", "");

        $data = $this->model
            ->search($search) // scope
            ->paginate((int) $limit, $columns = ['*'], $pageName = 'posts', (int) $page);

        return Inertia::render("Posts/Index", [
            "posts" => new PostResource($data),
            "queryParams" => request()->query() ?: null,
            "success" => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Posts/CreatePost");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreatePostRequest $request)
    {
        $post = DB::transaction(function () use ($request) {

            $public_id = Str::uuid();
            $image_path = "posts/" . $public_id . ".jpeg";

            $post = $this->model->create([
                ...$request->validated(),
                "tags" => json_encode($request->tags),
                "public_id" => $public_id,
                "image" => $image_path
            ]);

            if ($request->hasFile('image') && !Storage::disk('public')->exists($image_path)) {
                Storage::disk('public')->putFileAs('', $request->file('image'), $image_path);
            }

            return $post;
        });

        return redirect()->route('posts.index', ['search' => $post->public_id])
            ->with('success', 'Post created!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $post = $this->model->where("public_id", $id)->first();

        // Show Post
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $post = $this->model->where("public_id", $id)->first();

        return Inertia::render("Posts/EditPost", [
            "post" => $post
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EditPostRequest $request, string $id)
    {
        $post = DB::transaction(function () use ($request, $id) {

            $post = $this->model->where("public_id", $id)->first();

            $post->update([
                ...$request->validated(),
                "tags" => json_encode($request->tags)
            ]);

            if ($request->hasFile('image') && !Storage::disk('public')->exists($post->path)) {
                Storage::disk('public')->putFileAs('', $request->file('image'), $post->path);
            }

            return $post;
        });

        return redirect()->route('posts.index', ['search' => $post->public_id])
            ->with('success', 'Post updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = $this->model->where("public_id", $id)->first();
        $post->delete();

        Storage::disk('public')->delete($post->path);

        return redirect()->route('post.index')
            ->with('success', 'Post deleted!');
    }
}
