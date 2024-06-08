<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Storage;

class ProjectResource extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->collection->map(function ($project) {
            return [
                "id" => $project->public_id,
                "phase" => $project->phase,
                "name" => $project->name,
                "description" => $project->description,
                "technologies" => implode(",", json_decode($project->technologies)),
                "image" => Storage::url($project->image),
                "created_at" => $project->created_at,
                "updated_at" => $project->updated_at
            ];
        })->all();
    }
}
