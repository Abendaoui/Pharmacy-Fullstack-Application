<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\Addresses\AddressResource;
use App\Http\Requests\Address\StoreAddressRequest;
use App\Http\Requests\Address\UpdateAddressRequest;
use App\Http\Resources\Addresses\AddressCollection;

class AddressController extends Controller
{
    public function index()
    {
        $addresses = Address::where('user_id', Auth::user()->id)->get();
        return new AddressCollection($addresses);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAddressRequest $request)
    {
        $request->validated();

        Address::create([
            'user_id' => Auth::user()->id,
            'street_address' => $request->input('street_address'),
            'city' => $request->input('city'),
            'state' => $request->input('state'),
            'zip_code' => $request->input('zip_code'),
        ]);

        return response()->json(['message' => 'Address created successfully'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Address $address)
    {
        return new AddressResource($address);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAddressRequest $request, Address $address)
    {
        $request->validated();
        $address->update($request->all());
        return response()->json(['message' => 'Address updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Address $address)
    {

        $address->delete();
        return response()->json(['message' => 'Address deleted successfully'], 200);
    }
}
