<?php

namespace App\Models;

use App\Models\Order;
use App\Models\Medecine;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderDetails extends Model
{
    use HasFactory;
    protected $fillable = [
        'order_id',
        'medecine_id',
        'quantity',
        'price',
    ];

    // An order detail belongs to an order
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    // An order detail belongs to a medicine
    public function medecine()
    {
        return $this->belongsTo(Medecine::class);
    }
}
