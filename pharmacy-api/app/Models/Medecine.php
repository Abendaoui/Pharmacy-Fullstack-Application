<?php

namespace App\Models;

use App\Models\Cart;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Favorite;
use App\Models\OrderDetails;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Medecine extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'slug',
        'description',
        'price',
        'medecine_image',
        'quantity',
        'brand_id',
        'category_id'
    ];
    protected $table = "medecines";

    // A medicine belongs to a brand
    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    // A medicine belongs to a category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // A medicine has many order details
    public function orderDetails()
    {
        return $this->hasMany(OrderDetails::class);
    }

    // A medicine has many favorites
    public function favorites()
    {
        return $this->hasMany(Favorite::class);
    }

    // A medicine has many cart items
    public function carts()
    {
        return $this->hasMany(Cart::class);
    }
}
