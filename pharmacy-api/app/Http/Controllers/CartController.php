<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Medecine;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\Cart\CartResource;
use App\Http\Resources\Cart\CartCollection;
use App\Http\Requests\Cart\StoreCartRequest;
use App\Http\Requests\Cart\UpdateCartRequest;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected function getTotalPrice()
    {
        $cartsItems = Cart::where('user_id', Auth::id())
            ->with('medecine')
            ->select('price', 'quantity')
            ->get();
        $totalPrice = 0;
        foreach ($cartsItems as $cart) {
            $totalPrice += $cart->price * $cart->quantity;
        }
        return (float) $totalPrice;
    }
    public function index()
    {
        $cartItems = Cart::where('user_id', Auth::id())
            ->with('medecine') // Eager load medicine details
            ->get();

        return response()->json([
            'carts' => new CartCollection($cartItems),
            'totalPrice' => $this->getTotalPrice(),
        ]);
    }
    public function getCount()
    {
        $count = Cart::where('user_id', Auth::id())->count();
        return response()->json($count);
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(StoreCartRequest $request)
    {
        $data = $request->validated();
        $medecine = Medecine::find($request['medecine_id']);
        $price = $medecine->price;

        $existingItem = Cart::where('user_id', Auth::id())
            ->where('medecine_id', $data['medecine_id'])
            ->first();

        if ($existingItem) {
            $existingItem->increment('quantity');
        } else {
            Cart::create([
                'user_id' => Auth::id(),
                'medecine_id' => $data['medecine_id'],
                'quantity' => 1,
                'price' => $price, // Assuming price is provided in request
                'created_at' => date('Y-m-d h:i:s')
            ]);
        }

        return response()->json(['message' => 'Item added to cart'], 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCartRequest $request, Cart $cart)
    {
        $data = $request->validated();

        $cart->quantity = $data['quantity'];
        $cart->save();

        return response()->json(['message' => 'Cart item quantity updated']);
    }

    public function destroy(Cart $cart)
    {
        $cart->delete();
        return response()->json(['message' => 'Item removed from cart'],200);
    }

    public function deleteAll()
    {
        Cart::where('user_id', auth()->id())->delete();

        return response()->json([
            'msg' => 'All Items In Card removed successfully'
        ], 200);
    }
}
