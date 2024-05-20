<?php

namespace App\Http\Requests\Medecine;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMedecineRequest extends FormRequest
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
            'name' => 'sometimes|required|string|max:100',
            'description' => 'sometimes|required|string|max:255',
            'price' => 'sometimes|required|integer',
            'medecine_image' => 'sometimes|required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'quantity' => 'sometimes|required|integer',
            'brand_id' => 'sometimes|required|exists:brands,id',
            'category_id' => 'sometimes|required|exists:categories,id'
        ];
    }
}
