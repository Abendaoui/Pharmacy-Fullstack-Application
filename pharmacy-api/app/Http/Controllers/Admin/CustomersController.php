<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
    public function index()
    {
        // $customers = User::select('fullname', 'email', 'phone', 'created_at')
        //     ->whereHas('orders', function ($query) {
        //         $query->where('order_status', 'paid');
        //     })
        //     ->with('orders')
        //     ->get();
        $customers = User::select('fullname', 'email', 'phone', 'created_at')
        ->whereHas('orders', function ($query) {
            $query->where('order_status', 'delivered');
        })
            ->with(['orders' => function ($query) {
                $query->where('order_status', 'delivered');
            }])
            ->get();

        return response()->json($customers);
    }

    public function customers()
    {
        $customers = User::select('fullname', 'email', 'phone', 'created_at')
            ->whereDoesntHave('orders', function ($query) {
                $query->where('order_status', 'paid');
            })->get();

        return response()->json($customers);
    }
}
