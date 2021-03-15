<?php


namespace App\Http\Controllers\Api_V1;

use App\Http\Controllers\Api_V1;
use App\Http\Controllers\ApiControllers;
use App\Models\TestModel;
use App\Http\Requests\TestRequest;
use Illuminate\Http\Request;

class ApiTestController extends ApiControllers
{
    public function __construct(TestModel $model,TestRequest $request)
    {
        $this->request=$request;
        $this->model=$model;
    }
    public function  get(){
        $limit=(int)$this->request->get('limit',20);
        $offset=(int) $this->request->get('offset',0);
        $result= $this->model->with('questions')->limit($limit)->offset($offset)->get();
        return $this->sendResponse($result,'OK',200);

    }

    public function detail(int $entityId){


        $entity=$this->model->with('questions')->find($entityId);
        if(is_null($entity)) {
            return $this->sendError('Not Found', 404);
        }
        return  $this->sendResponse($entity,'OK',200);
    }
}
