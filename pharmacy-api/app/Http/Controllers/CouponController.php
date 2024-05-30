<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use Illuminate\Http\Request;

class CouponController extends Controller
{
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
