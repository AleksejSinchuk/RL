<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionModel extends Model
{
    protected $table='questions';
    public $question;
    public $timestamps=false;
    protected $fillable=[
        'id',
        'test_id',
        'question',

    ];



    public function answers(){
        return $this->hasMany('App\Models\AnswerModel',"question_id");
    }

    public function test(){
        return $this->belongsTo('App\Models\TestModel')->with('answers');
    }


}
