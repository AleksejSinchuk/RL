<?php

namespace App\Models;

use http\Env\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestModel extends Model
{
    protected $table='tests';

    public $timestamps=false;
    protected $fillable=[
        'id',
        'name',

    ];

    public  function questions(){
        return $this->hasMany('App\Models\QuestionModel',"test_id")->with("answers");
    }
}
