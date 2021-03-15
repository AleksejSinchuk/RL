<?php

namespace App\Http\Controllers;
use App\Models\VacancyModel;
use App\Http\Requests\VacancyRequest;




class VacancyController extends Controller
{
    public function create(VacancyModel $vac){
        VacancyModel::query()->create($vac);
        $data='Created';
        return view('main',compact('data',$data));
    }
    public function get(){
        $data=VacancyModel::all();
        return view('main',compact("data",$data));
    }
    public function getByID($id){
        $data=VacancyModel::all()->where("id",$id);
        return view('main',compact('data',$data));
    }

    public static function update(VacancyModel $vac){
        $data=VacancyModel::query()->update($vac);
        return view('main',compact('data',$data));
    }

    public static function delete($id){
        VacancyModel::query()->where('id',$id)->delete($id);
        $data='OK';
        return view('main',compact('data',$data));
    }

}
