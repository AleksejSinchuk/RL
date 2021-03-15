<?php

use Illuminate\Support\Facades\Route;



//use App\Http\Controllers\MemberController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


//Route::get('/','MainController@index');


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
Route::any('{any}', function()  { return view('layouts.react');})->where('any', '.*');

//=======================================================


//Route::prefix('/test')->group(function (){
//    Route::get('/','TestController@get');
//    Route::get('/{id}','TestController@getByID');
//    Route::delete('/delete/{Id}',['uses'=>'TestController@delete'])->where(['Id'=>'[0-9+]']);
//    Route::put('/update',['uses'=>'TestController@update']);
//});

//Route::prefix('/vacancy')->group(function (){
//    Route::get('/','VacancyController@get');
//    Route::get('/{id}',['uses'=>'VacancyController@getByID'])->where(['Id'=>'[0-9+]']);
//    Route::post('/add',['uses'=>'VacancyController@create']);
//    Route::delete('/delete/{Id}',['uses'=>'VacancyController@delete'])->where(['Id'=>'[0-9+]']);
//    Route::put('/update',['uses'=>'CompanyController@update']);
//});

