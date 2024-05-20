<?php

namespace App\Http\Resources\User;

use App\Http\Resources\Addresses\AddressCollection;
use App\Http\Resources\Orders\OrderCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'fullname' => $this->fullname,
            'email' => $this->email,
            'phone' => $this->phone,
            'role' => $this->role,
            'created_at' => $this->created_at,
            // 'orders' => OrderCollection::collection($this->whenLoaded('orders')),
            'orders' => $this->whenLoaded('orders', function () {
                return [
                    'id' => $this->address->id,
                    'order_date' => $this->address->order_date,
                    'order_status' => $this->address->order_status,
                    'total_price' => $this->address->total_price,
                ];
            }),
            'addresses' => AddressCollection::collection($this->whenLoaded('addresses'))
        ];
    }
}
