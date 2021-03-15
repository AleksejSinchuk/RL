<?php

namespace App\Models;

use http\Env\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserModel extends User
{
    public $name;
    public $model;
    public  $request;

public function __construct(UserModel $model,Request $request)
{
   $this->model=$model;
   $this->request=$request;
}

    public function create(){
        $data = $this->request->validated();
        $this->model->fill($data)->push();
    }
}
