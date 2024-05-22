<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\MedecineController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDetailsController;
use App\Models\OrderDetails;

Route::middleware('auth:sanctum')->group(function () {
    // User Controller Functions
    Route::apiResource('/users', UserController::class);
    Route::get('/admins', [UserController::class, 'getAdmins']);
    Route::get('/profile', [UserController::class, 'profile']);

    // Address Controller Functions
    Route::apiResource('/addresses', AddressController::class);

    // Brand Controller Functions
    Route::apiResource('/brands', BrandController::class);

    // Category Controller Functions
    Route::apiResource('/categories', CategoryController::class);

    // Medecine Controller Functions
    Route::apiResource('/medecines', MedecineController::class);
    Route::get('/all_medecines', [MedecineController::class,'allMedecines']);
    Route::get('/food_baby', [MedecineController::class, 'getFoodBaby']);
    Route::get('/search/{term}', [MedecineController::class, 'search']);


    // Favorite Controller Functions
    Route::apiResource('/favorites', FavoriteController::class);
    Route::delete('/delete_all_favorites', [FavoriteController::class, 'deleteAll']);

    // Cart Controller Fuunctions
    Route::apiResource('/carts', CartController::class);
    Route::delete('/delete_all_carts', [CartController::class, 'deleteAll']);
    Route::get('/count', [CartController::class, 'getCount']);

    // Orders Controller Functions
    Route::apiResource('/orders', OrderController::class);

    // Orders Controller Functions
    Route::get('/suborders', [OrderDetailsController::class, 'getSubOrders']);
});
