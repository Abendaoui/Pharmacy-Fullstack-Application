<?php

namespace App\Models;

use App\Models\Medecine;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    // A category has many medicines
    public function medecines()
    {
        return $this->hasMany(Medecine::class);
    }
}
