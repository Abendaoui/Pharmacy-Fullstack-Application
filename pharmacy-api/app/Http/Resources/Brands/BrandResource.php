<?php

namespace App\Http\Resources\Brands;

use App\Http\Resources\Medecine\MedecineCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BrandResource extends JsonResource
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
            'brand_name' => $this->brand_name,
            'brand_desc' => $this->brand_desc,
            'brand_image' => $this->brand_image,
            'medecines' => MedecineCollection::collection($this->whenLoaded('medecines')),
            'created_at' => $this->created_at,
        ];
    }
}
