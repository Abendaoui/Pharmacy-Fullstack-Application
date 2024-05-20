<?php

namespace App\Http\Requests\OrderDetails;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOrderDetailsRequest extends FormRequest
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
            'order_id' => 'sometimes|integer|exists:orders,id', // Add order_id validation
            'medecine_id' => 'sometimes|integer|exists:medecines,id',
            'quantity' => 'sometimes|integer|min:1',
            'price' => 'sometimes|numeric',
        ];
    }
}
