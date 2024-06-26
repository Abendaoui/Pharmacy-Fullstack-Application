<?php

namespace App\Http\Requests\BlogPosts;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
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
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'post_image' => ['required', 'image', 'mimes:png,jpg,jpeg,gif,svg,webp,avif', 'max:2048'],
            'tags' => ['required', 'string']
        ];
    }
}
