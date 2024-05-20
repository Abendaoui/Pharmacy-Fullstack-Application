<?php

namespace App\Http\Requests\OrderDetails;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrderDetailsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'order_id' => 'required|integer|exists:orders,id', // Add order_id validation
            'medecine_id' => 'required|integer|exists:medecines,id',
            'quantity' => 'required|integer|min:1',
            'price' => 'required|numeric',
        ];
    }
}
