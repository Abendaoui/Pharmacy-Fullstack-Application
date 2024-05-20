<?php

namespace App\Http\Resources\OrderDetails;

use App\Http\Resources\Medecine\MedecineResource;
use App\Http\Resources\Orders\OrderResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderDetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'order' => new OrderResource($this->order),
            'medecine' => new MedecineResource($this->medecine),
            'quantity' => $this->quantity,
            'price' => $this->price,
        ];
    }
}
