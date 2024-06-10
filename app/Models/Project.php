<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Project extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected function uuid(): Attribute
    {
        return Attribute::make(
            set: fn () => Str::uuid(),
        );
    }

    protected function casts(): array
    {
        return [
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
                ->orWhere('phase', 'LIKE', '%' . $value . '%')
                ->orWhere('technologies', 'LIKE', '%' . $value . '%')
                ->orWhere('description', 'LIKE', '%' . $value . '%');
        });
    }
}
