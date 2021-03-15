<?php


namespace App\Http\Controllers;


use App\Models\TestModel;
use App\Models\VacancyModel;

class GeneralController extends Controller
{
    protected $model;
    protected $request;

    public function create(){
        $data = $this->request->validated();
        $this->model->fill($data)->push();
    }

    public function getByID(int $id){
        $entity=$this->model->find($id);
        return view('main',compact('data','entity'));
    }
    public function get(){
        $entity=$this->model->all();
        return view('main',compact('data','entity'));
    }

    public  function update(int $id){                        //?????????????????????
        $data = $this->request->validated($this->request);
        $this->model->query()->update($data);

    }

    public  function delete(int $id){
        $entity=$this->model->find($id);
        $entity->delete();
    }

}
