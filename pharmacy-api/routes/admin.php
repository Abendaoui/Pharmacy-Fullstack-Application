<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\BrandController;
use App\Http\Controllers\Admin\CustomersController;
use App\Http\Controllers\Admin\MedecineController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\OrdersController;
use App\Http\Controllers\Admin\TransactionsController;

Route::middleware('auth:sanctum')->group(function () {
    // Profile
    Route::get('/profile', [ProfileController::class, 'getAdminProfile']);
    Route::patch('/update_profile', [ProfileController::class, 'updateAdminProfile']);

    // Dashboard
    Route::get('/card_data', [DashboardController::class, 'cardsData']);
    Route::get('/sales', [DashboardController::class, 'getLatestSales']);
    Route::get('/latest_transactions', [DashboardController::class, 'latestPaidOrders']);
    Route::get('/latest_customers', [DashboardController::class, 'latestCustomers']);
    Route::get('/latest_medecines', [DashboardController::class, 'latestMedecinesAdded']);

    // Admins
    Route::apiResource('/admins', AdminController::class);

    // Users
    Route::apiResource('/users', UsersController::class);

    // Customer
    Route::get('/customers', [CustomersController::class, 'index']);
    Route::get('/get_customers', [CustomersController::class, 'customers']);

    // Brand
    Route::apiResource('/brands', BrandController::class);

    // Brand
    Route::apiResource('/categories', CategoryController::class);

    // Medecines
    Route::apiResource('/medecines', MedecineController::class);
    Route::get('/get_brands', [MedecineController::class, 'getBrands']);
    Route::get('/get_categories', [MedecineController::class, 'getCategories']);

    // Brand
    Route::apiResource('/orders', OrdersController::class);
    Route::get('/orders/{id}', [OrdersController::class,'show']);
    Route::put('/orders/{id}', [OrdersController::class,'edit']);

    // Medecines
    Route::apiResource('/transactions', TransactionsController::class);
});

// Route::apiResources([
//     'user' => 'UserController',
//     'product' => 'ProductController',
//     'order' => 'OrderController',
// ]);
