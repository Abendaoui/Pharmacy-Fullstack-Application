<?php

namespace App\Models;

use App\Models\User;
use App\Models\Order;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'street_address',
        'city',
        'state',
        'zip_code',
    ];

    // An address belongs to a user

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // An address can have many orders
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
