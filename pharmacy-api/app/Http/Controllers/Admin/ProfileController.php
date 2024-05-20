<?php

namespace App\Http\Controllers\Admin;

use App\Models\Address;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    protected function getFirstAddress()
    {
        $address = Address::where('user_id', Auth::id())
            ->select('street_address', 'city', 'zip_code')
            ->first();
        return $address;
    }

    protected function getCurrentAuthAdmin()
    {
        if (Auth::check()) {
            return User::where('id', Auth::id())
                ->select('fullname', 'email', 'phone')
                ->first();
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function getAdminProfile()
    {
        $admin = $this->getCurrentAuthAdmin();

        if (!$admin) {
            return $admin;
        }

        $address = $this->getFirstAddress();

        $fullNameParts = explode(' ', $admin->fullname);
        $firstName = $fullNameParts[0];
        $lastName = count($fullNameParts) > 1 ? $fullNameParts[1] : '';

        $profile = [
            'fullname' => $admin->fullname,
            'first' => $firstName,
            'last' => $lastName,
            'email' => $admin->email,
            'phone' => $admin->phone ?? null,
            'date' => $admin->created_at
        ];

        if ($address) {
            $profile += [
                'streetAddress' => $address->street_address,
                'city' => $address->city,
                'zipCode' => $address->zip_code,
            ];
        }

        return response()->json($profile, 200);
    }

    public function updateAdminProfile(Request $request)
    {
        $admin = $this->getCurrentAuthAdmin();

        if (!$admin) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $validatedData = $request->validate([
            'fullname' => 'required|string',
            'phone' => 'nullable|string',
            'streetAddress' => 'nullable|string',
            'city' => 'nullable|string',
            'zipCode' => 'nullable|string',
        ]);

        $admin->update([
            'fullname' => $validatedData['fullname'],
            'phone' => $validatedData['phone'],
        ]);

        $address = $admin->address; // assuming you have a one-to-one relationship between users and addresses

        if ($address) {
            $address->update([
                'street_address' => $validatedData['streetAddress'],
                'city' => $validatedData['city'],
                'zip_code' => $validatedData['zipCode'],
            ]);
        } else {
            // create a new address if it doesn't exist
            $address = new Address();
            $address->user_id = $admin->id;
            $address->street_address = $validatedData['streetAddress'];
            $address->city = $validatedData['city'];
            $address->zip_code = $validatedData['zipCode'];
            $address->save();
        }

        return response()->json(['message' => 'Profile updated successfully'], 200);
    }
}
