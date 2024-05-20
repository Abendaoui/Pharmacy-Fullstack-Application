<?php

namespace App\Models;

use App\Models\Order;
use App\Models\Address;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Shipping extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'address_id',
        'shipping_method',
        'shipping_status',
        'shipping_date',
    ];

    // A shipping belongs to an order
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    // A shipping belongs to an address
    public function address()
    {
        return $this->belongsTo(Address::class);
    }
}
