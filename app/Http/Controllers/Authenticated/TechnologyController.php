<?php

namespace App\Http\Controllers\Authenticated;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Technology;
use App\Http\Requests\Technology\CreateTechRequest;
use App\Http\Requests\Technology\EditTechRequest;

class TechnologyController extends Controller
{
    public function __construct(Technology $model)
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
            ->paginate((int) $limit, $columns = ['*'], $pageName = 'technologies', (int) $page);

        return Inertia::render("Technologies/Index", [
            "technologies" => $data,
            "queryParams" => request()->query() ?: null,
            "success" => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Technologies/CreateTech");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateTechRequest $request)
    {
        $technology = $this->model->create($request->validated());

        return redirect()->route('technologies.index', ['search' => $technology->public_id->toString()])
            ->with('success', 'Technology created!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $technology = $this->model->where("public_id", $id)->first();

        return Inertia::render("Technologies/EditTech", [
            "technology" => $technology
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EditTechRequest $request, string $id)
    {
        $technology = $this->model->where("public_id", $id)->first();
        $technology->update($request->validated());

        return redirect()->route('technologies.index', ['search' => $technology->public_id->toString()])
            ->with('success', 'Technology updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $technology = $this->model->where("public_id", $id)->first();
        $technology->delete();

        return redirect()->route('technologies.index')
            ->with('success', 'Technology deleted!');
    }
}
