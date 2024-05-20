<?php

namespace App\Models;

use App\Models\User;
use App\Models\Address;
use App\Models\Returns;
use App\Models\Shipping;
use App\Models\OrderDetails;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'address_id',
        'order_date',
        'total_price',
        'order_status',
        'payment_method',
    ];


    // An order belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // An order belongs to an address
    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    // An order has many order details
    public function orderDetails()
    {
        return $this->hasMany(OrderDetails::class);
    }

    // An order has one shipping
    public function shipping()
    {
        return $this->hasOne(Shipping::class);
    }

    // An order has one return
    public function return()
    {
        return $this->hasMany(Returns::class);
    }
}
