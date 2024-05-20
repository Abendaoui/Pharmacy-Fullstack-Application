<?php

namespace App\Http\Controllers\Admin;

use App\Models\Brand;
use Illuminate\Http\Request;
use App\Filters\Brands\BrandFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\Brand\StoreBrandRequest;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new BrandFilter();
        $queryItem = $filter->transform($request);

        $brands = Brand::select('id', 'brand_name', 'brand_desc', 'brand_image', 'created_at')
            ->where($queryItem)
            ->get();
        return response()->json($brands);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBrandRequest $request)
    {
        $data = $request->validated();
        if (!isset($data['brand_image'])) {
            return response()->json(['error' => 'Image is required'], 422);
        }
        // $data['created_at'] = date('Y-m-d h:i:s');

        $image = $data['brand_image'];
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images/brands'), $imageName);
        $data['brand_image'] = $imageName;

        Brand::create($data);
        return response()->json([
            'msg' => 'Brand created successfully'
        ],201);
    }
}
