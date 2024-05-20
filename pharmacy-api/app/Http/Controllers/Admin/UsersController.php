<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Filters\Users\UserFilter;
use App\Http\Controllers\Controller;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class UsersController extends Controller
{
    public function index(Request $request)
    {
        $filter = new UserFilter();
        $queryItem = $filter->transform($request);

        $admins = User::where($queryItem)
            ->where('role', 'customer')
            ->select('id', 'fullname', 'email', 'phone', 'created_at')
            ->get();

        return response()->json($admins, 200);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'fullname' => ['required', 'string'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'string', Password::min(8)->mixedCase()->numbers()],
            'phone' => ['nullable', 'string'],
        ]);

        $user = User::create($data);
        if ($user) {
            return response()->json(['msg' => 'User Created SuccessFully'], 201);
        }
    }

    public function show(User $user)
    {
        return response()->json($user);
    }

    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'fullname' => ['sometimes', 'string'],
            'email' => ['sometimes', 'email', Rule::unique('users')->ignore($user->id)],
            'password' => ['sometimes', 'string', Password::min(8)->mixedCase()->numbers()],
            'phone' => ['nullable', 'string']
        ]);

        $user->update($data);

        return response()->json(['msg' => 'User Updated SuccessFully']);
    }

    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(['msg' => 'User Deleted SuccessFully']);
    }
}
