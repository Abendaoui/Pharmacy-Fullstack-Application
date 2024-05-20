<?php

namespace App\Http\Resources\Medecine;

use Illuminate\Http\Request;
use App\Http\Resources\Brands\BrandResource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Category\CategoryResource;

class MedecineResource extends JsonResource
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
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'price' => $this->price,
            'medecine_image' => $this->medecine_image,
            'quantity' => $this->quantity,
            'brand' => $this->whenLoaded('brand', function () {
                return $this->brand->brand_name;
            }),
            'category' => $this->whenLoaded('category', function () {
                return $this->category->name;
            }),
        ];
    }
}
