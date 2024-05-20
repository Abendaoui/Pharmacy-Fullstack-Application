<?php

namespace App\Http\Controllers;

use App\Models\OrderDetails;
use App\Http\Requests\OrderDetails\StoreOrderDetailsRequest;
use App\Http\Requests\OrderDetails\UpdateOrderDetailsRequest;
use App\Http\Resources\OrderDetails\OrderDetailsResource;
use App\Http\Resources\Orders\OrderCollection;

class OrderDetailsController extends Controller
{

    public function getSubOrders()
    {
        $subOrders = OrderDetails::with('medecine')->where('order_id', request()->input('order_id'))->get();
        return response()->json(['subOrder' => $subOrders]);
    }
}
