<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Technology extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'icons' => 'array',
            'created_at' => 'datetime:d/m/Y H:i:s',
            'updated_at' => 'datetime:d/m/Y H:i:s'
        ];
    }

    function scopeSearch($query, $value)
    {
        return $query->when((bool) $value, function ($query) use ($value) {
            $query
                ->where('public_id', $value)
                ->orWhere('name', 'LIKE', '%' . $value . '%')
                ->orWhere('description', 'LIKE', '%' . $value . '%');
        });
    }
}
