<?php

namespace App\Providers;

use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(AdminMiddleware::class, function ($app) {
            return new AdminMiddleware;
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
