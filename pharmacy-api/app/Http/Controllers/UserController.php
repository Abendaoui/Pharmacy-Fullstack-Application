<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Filters\Users\UserFilter;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\User\UserResource;
use App\Http\Resources\User\UserCollection;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Models\Address;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new UserFilter();
        $queryItem = $filter->transform($request);

        $customers = User::where($queryItem);
        $customers->where('role', 'customer');
        $customers->with('orders');

        return new UserCollection($customers->paginate(50)->appends($request->query()));
    }
    /**
     * Display a listing of the resource.
     */
    public function getAdmins(Request $request)
    {
        $filter = new UserFilter();
        $queryItem = $filter->transform($request);

        $admins = User::where($queryItem)->where('role', 'admin')->get();
        // $admins->;

        return new UserCollection($admins);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $user = User::create($request->all());
        return response()->json(['message' => 'User created successfully'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update($request->all());
        return response()->json(['message' => 'User updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(['message' => 'User deleted successfully'], 200);
    }

    public function notFound()
    {
        return response()->json(['error' => 'Not found'], 404);
    }

    public function profile()
    {
        $user = User::find(Auth::id());
        $address = Address::where('user_id', Auth::id())->first();
        $profile = [
            'fullname' => $user['fullname'],
            'email' => $user['email'],
            'first' => explode(' ', $user['fullname'])[0],
            'last' => explode(' ', $user['fullname'])[1],
            'streetAddress' => $address['street_address'],
            'city' => $address['city'],
            'state' => $address['state'],
            'zipCode' => $address['zip_code'],
        ];
        return response()->json([
            'profile' => $profile
        ]);
    }
}
