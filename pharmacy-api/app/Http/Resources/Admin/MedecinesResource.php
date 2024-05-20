<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MedecinesResource extends JsonResource
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
            'medecine_image' => $this->medecine_image,
            'quantity' => $this->quantity,
            'brand' => $this->whenLoaded('brand', function () {
                return $this->brand->brand_name;
            }),
        ];
    }
}
