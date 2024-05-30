<?php

namespace App\Http\Resources\BlogPost;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogPostsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'post_image' => $this->post_image,
            'tags' => $this->tags,
            'created_at' => $this->created_at->toDateTimeString()
        ];
    }
}
