<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Returns extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'user_id',
        'return_date',
        'reason',
    ];

    // A return belongs to an order
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    // A return belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
