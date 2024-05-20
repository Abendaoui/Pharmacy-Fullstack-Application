<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Http\Requests\Favorite\StoreFavoriteRequest;
use App\Http\Resources\Favorite\FavoriteCollection;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $favorites = Favorite::where('user_id', Auth::user()->id)->get();
        return new FavoriteCollection($favorites);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFavoriteRequest $request)
    {
        $data = $request->validated();

        Favorite::create([
            'user_id' => Auth::user()->id,
            'medecine_id' => $data['medecine_id']
        ]);
        return response()->json([
            'msg' => 'Add To Favorite SuccessFully'
        ], 201);
    }

    public function destroy(Favorite $favorite)
    {
        if ($favorite->user_id !== Auth::user()->id) {
            abort(403, 'Unauthorized');
        }

        $favorite->delete();
        return response()->json([
            'msg' => 'Favorite removed successfully'
        ], 200);
    }
    /**
     * Remove all favorites for the authenticated user.
     */
    public function deleteAll()
    {
        Favorite::where('user_id', auth()->id())->delete();

        return response()->json([
            'msg' => 'All favorites removed successfully'
        ], 200);
    }
}
