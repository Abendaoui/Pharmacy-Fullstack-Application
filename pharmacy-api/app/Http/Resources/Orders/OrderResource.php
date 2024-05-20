<?php

namespace App\Http\Resources\Orders;

use App\Http\Resources\Addresses\AddressResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'fullname' => $this->whenLoaded('user', function () {
                return $this->user->fullname;
            }),
            'address' => $this->whenLoaded('address', function () {
                return $this->address->city;
            }),
            'order_date' => $this->order_date,
            'total_price' => $this->total_price,
            'order_status' => $this->order_status,
            'payment_method' => $this->payment_method,
            'created_at' => $this->created_at,
        ];
    }
}
