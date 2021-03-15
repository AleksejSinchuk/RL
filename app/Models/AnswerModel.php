<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnswerModel extends Model
{
    protected $table='answers';
    public $timestamps=false;
    protected $fillable=[
        'id',
        'question_id',
        'answer',
        'is_true'
    ];




    public function questions(){
        return $this->belongsTo('App\Models\QuestionModel');
    }
}
