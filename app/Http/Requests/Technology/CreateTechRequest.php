<?php

namespace App\Http\Requests\Technology;

use Illuminate\Foundation\Http\FormRequest;

class CreateTechRequest extends FormRequest
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
            "name" => ["required", "unique", "min:3", "max:255"],
            "description" => ["required", "min:15", "max:25"],
            "icons" => ["required", 'array', 'min:1']
        ];
    }
}
