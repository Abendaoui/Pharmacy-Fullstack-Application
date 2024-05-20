<?php

namespace App\Http\Controllers;

use App\Filters\Medecines\MedecineFilter;
use App\Models\Medecine;
use App\Http\Requests\Medecine\StoreMedecineRequest;
use App\Http\Requests\Medecine\UpdateMedecineRequest;
use App\Http\Resources\Medecine\MedecineCollection;
use App\Http\Resources\Medecine\MedecineResource;
use Illuminate\Http\Request;

class MedecineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new MedecineFilter();
        $filterItems = $filter->transform($request);

        $medecines = Medecine::where($filterItems);
        $medecines->with(['brand', 'category']);
        $count = 16;
        $medecines = $medecines->inRandomOrder();
        return new MedecineCollection($medecines->paginate($count)->appends($request->query()));
    }
    public function allMedecines(Request $request)
    {
        $filter = new MedecineFilter();
        $filterItems = $filter->transform($request);

        $medecines = Medecine::where($filterItems);
        $medecines->with(['brand', 'category']);
        $count = 24;
        $medecines = $medecines->inRandomOrder();
        return new MedecineCollection($medecines->paginate($count)->appends($request->query()));
    }

    public function getFoodBaby()
    {
        $medecines = Medecine::where('category_id', 1);
        $medecines->with(['brand', 'category']);
        $medecines = $medecines->inRandomOrder();
        return new MedecineCollection($medecines->paginate(4));
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

        Medecine::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'price' => $data['price'],
            'medecine_image' => $data['medecine_image'],
            'quantity' => $data['quantity'],
            'brand_id' => $data['brand_id'],
            'category_id' => $data['category_id'],
        ]);

        return response()->json([
            'msg' => 'Medecine Created SuccessFully'
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Medecine $medecine)
    {
        return new MedecineResource($medecine->load(['brand', 'category']));
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
}
