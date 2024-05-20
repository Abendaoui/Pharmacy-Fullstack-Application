<?php

namespace App\Http\Resources\Cart;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Medecine\MedecineResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return
            [
                'id' => $this->id,
                'quantity' => $this->quantity,
                'price' => $this->price,
                'medecine' => new MedecineResource($this->medecine), // Include medicine details
            ];
    }
}
