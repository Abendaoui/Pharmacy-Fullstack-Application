<?php

namespace App\Http\Controllers\Admin;

use App\Models\Coupon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Coupons\StoreCouponRequest;

class CouponController extends Controller
{
    public function create(StoreCouponRequest $request)
    {
        $data = $request->validated();

        $coupon = Coupon::create($data);

        return response()->json($coupon, 201);
    }

    public function validateCoupon(Request $request)
    {
        $request->validate(['code' => 'required']);

        $coupon = Coupon::where('code', $request['code'])
            ->where('expiry_date', '>=', now())
            ->first();

        if (!$coupon) {
            return response()->json(['message' => 'Invalid or expired coupon'], 404);
        }

        return response()->json($coupon);
    }
}
