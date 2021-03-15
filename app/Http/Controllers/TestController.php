<?php

namespace App\Http\Controllers;

use App\Models\TestModel;


class TestController extends Controller
{



    //==============================CRUD=================================
    public function create(TestModel $test){
       $tst=TestModel::query()->create($test);
        return view('test',compact('data','tst'));
    }
    public function get(){

        $data=TestModel::with('questions')->get()->all();
        return view('test',compact('data',$data));
    }
    public function getByID($id){
       // $data=null;
       // $tst=TestModel::with('questions')->where("id",$id)->get();
        $data=TestModel::with('questions')->where("id",$id)->get();


        //return view('main',compact('data',$tst));
        return view('test',compact('data'));
    }

    public static function update(TestModel $test){
        $tst=TestModel::query()->update($test);
        return view('test',compact('data','tst'));
    }

    public static function delete($id){
        TestModel::query()->where('id',$id)->delete($id);
      $tst='OK';
        return view('test',compact('data','tst'));
    }
}
