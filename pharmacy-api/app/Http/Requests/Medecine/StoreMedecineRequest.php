<?php

namespace App\Http\Requests\Medecine;

use Illuminate\Foundation\Http\FormRequest;

class StoreMedecineRequest extends FormRequest
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
            'name' => 'required|string|max:100',
            'description' => 'required|string|max:255',
            'price' => 'required|decimal:0',
            'medecine_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp,avif|max:2048',
            'quantity' => 'required|integer',
            'brand_id' => 'required|exists:brands,id',
            'category_id' => 'required|exists:categories,id'
        ];
    }
}
