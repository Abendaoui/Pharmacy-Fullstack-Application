<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\Shipping;
use App\Models\Returns;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\Orders\OrderResource;
use App\Http\Requests\Order\StoreOrderRequest;
use App\Http\Resources\Orders\OrderCollection;
use App\Http\Requests\Order\UpdateOrderRequest;
use App\Models\OrderDetails;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::where('user_id', Auth::id())
            ->orderBy('order_date', 'desc')
            ->get();

        return new OrderCollection($orders);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {
        $data = $request->validated();
        $cart_items = Cart::where('user_id', Auth::id())->get();

        $order = Order::create([
            'user_id' => Auth::id(),
            'address_id' => $data['address_id'],
            'order_date' => date('Y-m-d H:i:s'),
            'total_price' => $data['total_price'],
            'payment_method' => $data['payment_method']
        ]);

        foreach ($cart_items as $cart_item) {
            OrderDetails::create([
                'order_id' => $order->id,
                'medecine_id' => $cart_item->medecine_id,
                'quantity' => $cart_item->quantity,
                'price' => $cart_item->price,
            ]);
        }
        Cart::where('user_id', Auth::id())->delete();
        return response()->json([
            'msg' => 'Order Created SuccessFully'
        ],201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        return new OrderResource($order);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        $data = $request->validated();
        $orderStatus = $data['order_status'];

        switch ($orderStatus) {
            case 'shipped':
                Shipping::create([
                    'order_id' => $order->id,
                    'address_id' => $order->address_id,
                    'shipping_method' => $request['shipping_method'],
                    'shipping_status' => 'pending',
                    'shipping_date' => date('Y-m-d H:i:s'),
                ]);
                $order->update([
                    'order_status' => $orderStatus,
                ]);
                return response()->json(['msg' => 'Order Shipped SuccesssFully']);
            case 'returned':
                Returns::create([
                    'order_id' => $order->id,
                    'user_id' => Auth::id(),
                    'return_date' => date('Y-m-d H:i:s'),
                    'reason' => $request['reason'],
                ]);
                $order->update([
                    'order_status' => $orderStatus,
                ]);
                return response()->json(['msg' => 'Order Returned SuccesssFully']);
            default:
                $order->update([
                    'order_status' => $orderStatus,
                ]);
                return response()->json(['msg' => 'Success']);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        $order->delete();

        return response()->json([
            'msg' => 'Order Deleted SuccessFully'
        ], 200);
    }
}
