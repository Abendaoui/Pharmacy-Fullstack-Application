<?php

namespace App\Http\Controllers\Admin;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Orders\OrderCollection;
use App\Http\Resources\Orders\OrderResource;

class OrdersController extends Controller
{
    public function index()
    {
        $orders = Order::orderBy('order_date', 'desc')
            ->with(['address', 'user'])
            ->get();

        return new OrderCollection($orders);
    }

    public function show($id)
    {
        $order = Order::where('id',$id)->first();
        return new OrderResource($order->load(['address','user']));
    }
    
    public function edit($id)
    {
        $order = Order::where('id',$id)->first();
        return new OrderResource($order->load(['address','user']));
    }


}
