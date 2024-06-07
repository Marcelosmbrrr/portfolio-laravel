<?php

namespace App\Http\Requests\Project;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EditProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function prepareForValidation()
    {
        $this->merge([
            'technologies' => explode(',', $this->technologies),
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $project_id = $this->route("project");

        $uniqueRule = Rule::unique('projects')
            ->ignore($project_id, "public_id");

        return [
            "phase" => ["required"],
            "name" => ["required", $uniqueRule, "min:3", "max:255"],
            "description" => ["required", "min:30", "max:80"],
            "technologies" => ["required", 'array', 'min:1'],
            "image" => ["nullable", "image", "dimensions:min_height=300, max_height=600, max_width=600"]
        ];
    }
}
