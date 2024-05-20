<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Cart;
use App\Models\Order;
use App\Models\Address;
use App\Models\Returns;
use App\Models\Favorite;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'fullname',
        'email',
        'password',
        'role',
        'phone',
    ];

    protected $table = 'users';


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }


    /**
     * Check If the Current Auth User Is An Admin Or Not
     */
    public function isAdmin()
    {
        return $this->role === 'admin';
    }
    // A user has one address
    public function addresses()
    {
        return $this->hasMany(Address::class);
    }

    // A user has many orders
    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    // A user has many favorites
    public function favorites()
    {
        return $this->hasMany(Favorite::class);
    }

    // A user has one cart
    public function carts()
    {
        return $this->hasMany(Cart::class);
    }
    // One-to-Many relationship with Returns
    public function returns()
    {
        return $this->hasMany(Returns::class);
    }
}
