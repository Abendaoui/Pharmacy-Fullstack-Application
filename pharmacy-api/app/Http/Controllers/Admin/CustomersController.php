<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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

    // public function customers()
    // {


    //     // $orders = User::select(
    //     //     'users.fullname',
    //     //     'users.email',
    //     //     'users.phone',
    //     //     'users.created_at',
    //     //     'orders.id',
    //     //     'orders.order_date',
    //     //     'orders.order_status',
    //     //     'orders.total_price'
    //     // )
    //     //     ->join('orders', 'orders.user_id', '=', 'users.id')
    //     //     ->where('orders.order_status', 'delivered')
    //     //     ->get();

    //     // return response()->json($orders);

    // }
    public function customers()
    {
        // Retrieve all users who have at least one delivered order
        $users = User::select('users.id', 'users.fullname', 'users.email', 'users.phone', 'users.created_at')
            ->join('orders', 'orders.user_id', '=', 'users.id')
            ->where('orders.order_status', 'delivered')
            ->distinct()
            ->get();

        // Initialize an array to hold the response
        $response = [];

        foreach ($users as $user) {
            // For each user, get their delivered orders
            $orders = Order::select('id', 'order_date', 'order_status', 'total_price')
                ->where('user_id', $user->id)
                ->where('order_status', 'delivered')
                ->get();

            // Add user and their orders to the response array
            $response[] = [
                'fullname' => $user->fullname,
                'email' => $user->email,
                'phone' => $user->phone,
                'created_at' => $user->created_at,
                'orders' => $orders
            ];
        }

        return response()->json($response);
    }
}
