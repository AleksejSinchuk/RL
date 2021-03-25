<?php

namespace App\Http\Controllers\Api_V1\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $login = $request->validate(
            [
                'email' => 'required|string',
                'password' => 'required|string'
            ]
        );

        if (!Auth::attempt($login, true)){
            return response(['status'=> false, 'message'=>'Invalid email or pswd'], 403);
        }
        // 'user_name' => Auth::user()->name
        return response(['status'=> true,
                        'access_token' => Auth::user()->getRememberToken(),
                        'name' =>  Auth::user()->name,
                        'role_id'=>Auth::user()->role_id],
                     200);
    }


    public function postUser($access_token){
        $user = User::where(['remember_token'=>$access_token])->first();
        return $user;
        //return response(['status'=> true, 'user' => Auth::user()], 200);
    }


    public function register (Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 422);
        }
        $request['password']=Hash::make($request['password']);
        $request['remember_token'] = Str::random(40);
        $user = User::create($request->toArray());
        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $response = ['token' => $token];
        return response($response, 200);
    }

}
