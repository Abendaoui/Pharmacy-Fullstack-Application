<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\Category\StoreCategoryRequest;
use App\Http\Requests\Category\UpdateCategoryRequest;
use App\Http\Resources\Category\CategoryCollection;
use App\Http\Resources\Category\CategoryResource;
use App\Filters\Categories\CategoryFilter;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new CategoryFilter();
        $queryItems = $filter->transform($request);

        $categories = Category::where($queryItems);

        return new CategoryCollection($categories->paginate(50)->appends($request->query()));
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        $data = $request->validated();
        Category::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'created_at' => date('Y-m-d h:i:s')
        ]);
        return response()->json(['message' => 'Category created successfully'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        return new CategoryResource($category->load('medecines'));
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $data = $request->validated();
        $category->update($data);
        return response()->json(['message' => 'Category Updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json(['message' => 'Category Deleted successfully']);
    }
}
