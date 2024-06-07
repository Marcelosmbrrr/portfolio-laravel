<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Storage;

class PostResource extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->collection->map(function ($post) {
            return [
                "id" => $post->public_id,
                "is_published" => $post->is_published,
                "name" => $post->name,
                "description" => $post->description,
                "tags" => json_decode($post->tags),
                "image" => Storage::url($post->image),
                "created_at" => $post->created_at,
                "updated_at" => $post->updated_at
            ];
        })->all();
    }
}
