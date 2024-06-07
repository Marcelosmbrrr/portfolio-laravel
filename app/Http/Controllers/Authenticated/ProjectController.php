<?php

namespace App\Http\Controllers\Authenticated;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Project;
use App\Http\Requests\Project\CreateProjectRequest;
use App\Http\Requests\Project\EditProjectRequest;

class ProjectController extends Controller
{
    public function __construct(Project $model)
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
            ->paginate((int) $limit, $columns = ['*'], $pageName = 'projects', (int) $page);

        return Inertia::render("Projects/Index", [
            "projects" => $data,
            "queryParams" => request()->query() ?: null,
            "success" => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Projects/CreateProject");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateProjectRequest $request)
    {
        $project = $this->model->create($request->validated());

        return redirect()->route('projects.index', ['search' => $project->public_id->toString()])
            ->with('success', 'Project created!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $project = $this->model->where("public_id", $id)->first();

        // Show Project
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $project = $this->model->where("public_id", $id)->first();

        return Inertia::render("Projects/EditProject", [
            "project" => $project
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EditProjectRequest $request, string $id)
    {
        $project = $this->model->where("public_id", $id)->first();
        $project->update($request->validated());

        return redirect()->route('projects.index', ['search' => $project->public_id->toString()])
            ->with('success', 'Project updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $project = $this->model->where("public_id", $id)->first();
        $project->delete();

        return redirect()->route('projects.index')
            ->with('success', 'Project deleted!');
    }
}
