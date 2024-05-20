<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Filters\Categories\CategoryFilter;
use App\Http\Requests\Category\StoreCategoryRequest;

class CategoryController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new CategoryFilter();
        $queryItems = $filter->transform($request);

        $categories = Category::select('id', 'name', 'description', 'created_at')
            ->where($queryItems)
            ->get();

        return response()->json($categories);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        $data = $request->validated();
        Category::create($data);
        return response()->json(['message' => 'Category created successfully'], 201);
    }
}
