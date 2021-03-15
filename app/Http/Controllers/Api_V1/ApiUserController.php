<?php


namespace App\Http\Controllers\Api_V1;


use App\Http\Controllers\ApiControllers;
use App\Http\Requests\VacancyRequest;
use App\Models\VacancyModel;

class ApiUserController extends ApiControllers
{
    public function __construct(VacancyModel $model,VacancyRequest $request)
    {
        $this->request=$request;
        $this->model=$model;
    }
}
