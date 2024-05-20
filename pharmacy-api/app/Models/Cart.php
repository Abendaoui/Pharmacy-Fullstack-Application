<?php

namespace App\Models;

use App\Models\User;
use App\Models\Medecine;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'medecine_id',
        'quantity',
        'price',
    ];

    // A cart belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // A cart belongs to a medicine
    public function medecine()
    {
        return $this->belongsTo(Medecine::class);
    }

}
