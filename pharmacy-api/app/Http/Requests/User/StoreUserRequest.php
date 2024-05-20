<?php

namespace App\Http\Requests\User;

use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
            'fullname' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => [
                'required',
                'string',
                Password::min(8)->mixedCase()->numbers()->uncompromised(),
            ],
            'role' => 'string|in:customer,admin',
            'phone' => 'nullable|string',
        ];
    }
}
