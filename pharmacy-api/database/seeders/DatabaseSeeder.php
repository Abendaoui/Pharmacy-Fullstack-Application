<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\OrderDetail;
use App\Models\ProductReview;
use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\OrderSeeder;
use Database\Seeders\ProductSeeder;
use Database\Seeders\CustomerSeeder;
use Database\Seeders\OrderDetailSeeder;
use Database\Seeders\ProductReviewSeeder;
use Database\Seeders\ProductCategorySeeder;
use Database\Seeders\ShippingAddressSeeder;
use Database\Seeders\ProductCollectionSeeder;
use Database\Seeders\ProductCollectionDetailSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            CustomerSeeder::class,
            ShippingAddressSeeder::class,
            ProductCategorySeeder::class,
            ProductSeeder::class,
            ProductCollectionSeeder::class,
            ProductCollectionDetailSeeder::class,
            OrderSeeder::class,
            OrderDetailSeeder::class,
            ProductReviewSeeder::class,
        ]);
    }
}
