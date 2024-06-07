<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class TechResource extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->collection->map(function ($tech) {
            return [
                "id" => $tech->public_id,
                "name" => $tech->name,
                "description" => $tech->description,
                "icons" => json_decode($tech->icons),
                "created_at" => $tech->created_at,
                "updated_at" => $tech->updated_at
            ];
        })->all();
    }
}
