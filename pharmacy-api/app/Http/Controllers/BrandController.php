<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Filters\Brands\BrandFilter;
use App\Http\Requests\Brand\StoreBrandRequest;
use App\Http\Requests\Brand\UpdateBrandRequest;
use App\Http\Resources\Brands\BrandResource;
use App\Http\Resources\Brands\BrandCollection;
use Illuminate\Http\Request;


class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new BrandFilter();
        $queryItem = $filter->transform($request);

        $brands = Brand::where($queryItem);
        return new BrandCollection($brands->paginate(8)->appends($request->query()));
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
        $data['created_at'] = date('Y-m-d h:i:s');

        $image = $data['brand_image'];
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images/brands'), $imageName);
        $data['brand_image'] = $imageName;

        Brand::create($data);
        return response()->json([
            'msg' => 'Brand created successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Brand $brand)
    {
        return new BrandResource($brand->load('medecines'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBrandRequest $request, Brand $brand)
    {
        $data = $request->validated();

        if ($request->hasFile('brand_image')) {
            $image = $request->file('brand_image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images/brands'), $imageName);
            $data['brand_image'] = $imageName;
        }
        $brand->update($data);

        return response()->json([
            'msg' => 'Brand updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Brand $brand)
    {
        $brand->delete();
        return response()->json(['message' => 'Brand Deleted successfully']);
    }
}
