<?php

namespace App\Http\Requests\Technology;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EditTechRequest extends FormRequest
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
        $tech_id = $this->route("technology");

        $uniqueRule = Rule::unique('technologies')
        ->ignore($tech_id, "public_id");

        return [
            "name" => ["required", $uniqueRule, "min:3", "max:255"],
            "description" => ["required", "min:30", "max:80"],
            "icons" => ["required", 'array', 'min:1']
        ];
    }
}
