<?php


namespace App\Http\Controllers;
use App\Models\UserModel;
use Illuminate\Http\Request;

class UserController extends Controller
{
public  function create(UserModel $model,Request $request){
    $test= new UserModel($model,$request);
    return 'OK';
}

}
