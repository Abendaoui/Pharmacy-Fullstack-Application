<?php

namespace App\Http\Controllers\Admin;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Orders\OrderCollection;

class TransactionsController extends Controller
{
    public function index()
    {
        $orders = Order::where('order_status', 'delivered')
            ->orderBy('order_date', 'desc')
            ->with(['address', 'user'])
            ->get();

        return new OrderCollection($orders);
    }
}
