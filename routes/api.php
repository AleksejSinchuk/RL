<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/auth')->group( function(){
    Route::post('/login', [\App\Http\Controllers\Api_V1\Auth\AuthController::class, 'login']);
    Route::get('/postUser/{access_token}', [\App\Http\Controllers\Api_V1\Auth\AuthController::class, 'postUser']);
    Route::post('/registr', [\App\Http\Controllers\Api_V1\Auth\AuthController::class, 'register']);
});




Route::prefix('/test')->group(function (){
   // Route::get('/',['uses'=>'Api_V1\ApiTestController@get']);
    Route::get('/{entityId}',['uses'=>'Api_V1\ApiTestController@detail'])->where(['entityId'=>'[0-9+]']);
    Route::post('/add',['uses'=>'Api_V1\ApiTestController@create']);
    Route::delete('/{entityId}',['uses'=>'Api_V1\ApiTestController@delete'])->where(['entityId'=>'[0-9+]']);
    Route::put('/{entityId}',['uses'=>'Api_V1\ApiTestController@update'])->where(['entityId'=>'[0-9+]']);
});
Route::prefix('/vacancy')->group(function (){
    Route::get('/',['uses'=>'Api_V1\ApiVacancyController@get']);
    Route::get('/{entityId}',['uses'=>'Api_V1\ApiVacancyController@detail'])->where(['entityId'=>'[0-9+]']);
    Route::post('/add',['uses'=>'Api_V1\ApiVacancyController@create']);
    Route::delete('/delete/{entityId}',['uses'=>'Api_V1\ApiVacancyController@delete'])->where(['entityId'=>'[0-9+]']);
    Route::put('/update/{entityId}',['uses'=>'Api_V1\ApiVacancyController@update'])->where(['entityId'=>'[0-9+]']);
});

Route::prefix('/users')->group(function (){
    Route::get('/',['uses'=>'Api_V1\ApiUserController@get']);
    Route::get('/{entityId}',['uses'=>'Api_V1\ApiUserController@detail'])->where(['entityId'=>'[0-9+]']);
    Route::post('/add',['uses'=>'Api_V1\ApiUserController@create']);
    Route::delete('/delete/{entityId}',['uses'=>'Api_V1\ApiUserController@delete'])->where(['entityId'=>'[0-9+]']);
    Route::put('/update',['uses'=>'Api_V1\ApiUserController@update']);
});
