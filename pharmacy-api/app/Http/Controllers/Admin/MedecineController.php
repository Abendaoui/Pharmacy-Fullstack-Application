<?php

namespace App\Http\Controllers\Admin;

use App\Models\Medecine;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Filters\Medecines\MedecineFilter;
use App\Http\Resources\Medecine\MedecineResource;
use App\Http\Resources\Medecine\MedecineCollection;
use App\Http\Requests\Medecine\StoreMedecineRequest;
use App\Http\Requests\Medecine\UpdateMedecineRequest;
use App\Models\Brand;
use App\Models\Category;

class MedecineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new MedecineFilter();
        $filterItems = $filter->transform($request);

        $medecines = Medecine::select()
            ->where($filterItems)
            ->with(['brand', 'category'])
            ->get();
        return new MedecineCollection($medecines);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMedecineRequest $request)
    {
        $data = $request->validated();

        if (!isset($data['medecine_image'])) {
            return response()->json(['error' => 'Image is required'], 422);
        }
        $image = $data['medecine_image'];
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images/medecines'), $imageName);
        $data['medecine_image'] = $imageName;
        $data['slug'] = Str::slug($data['name']);
        /*
        [
            'name' => $data['name'],
            'description' => $data['description'],
            'price' => $data['price'],
            'medecine_image' => $data['medecine_image'],
            'quantity' => $data['quantity'],
            'brand_id' => $data['brand_id'],
            'category_id' => $data['category_id'],
        ]
        */

        Medecine::create($data);

        return response()->json([
            'msg' => 'Medecine Created SuccessFully'
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Medecine $medecine)
    {
        // return new MedecineResource($medecine->load(['brand', 'category']));
        return response()->json($medecine->load(['brand', 'category']));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMedecineRequest $request, Medecine $medecine)
    {
        $data = $request->validated();

        if ($request->hasFile('medecine_image')) {
            $image = $request->file('medecine_image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images/medecines'), $imageName);
            $data['medecine_image'] = $imageName;
        }
        $medecine->update($data);

        return response()->json([
            'msg' => 'Medecine updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Medecine $medecine)
    {
        $medecine->delete();
        return response()->json(['message' => 'Medecine deleted successfully'], 200);
    }

    public function getBrands()
    {
        $brands = Brand::select('id as value', 'brand_name as label')
            ->get();

        return response()->json($brands);
    }
    public function getCategories()
    {
        $categories = Category::select('id as value', 'name AS label')
            ->get();

        return response()->json($categories);
    }
}
