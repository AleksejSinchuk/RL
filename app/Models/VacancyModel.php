<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VacancyModel extends Model
{
    protected $table='vacancies';
    public $timestamps=false;
    protected $fillable=[
        'id',
        'email',
        'test_id',
        'description',
        'date',
        'user_id',
        'type'
    ];
}
