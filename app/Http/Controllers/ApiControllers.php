<?php


namespace App\Http\Controllers;


use Throwable;

abstract class ApiControllers  extends Controller
{
    protected $request; //Для валидации
    protected $model;   //Для работы с БД



    public function create() {

        try{
            $data = $this->request->validated();
            $this->model->fill($data)->push();
            return $this->sendResponse(null,"Create successful",200);
        }
        catch (Throwable $error) {
            return $this->sendError('Not Found', 404);
        }

    }

    public function get(){
        $result= $this->model->get();
        return $this->sendResponse($result,'OK',200);

    }


    public function detail(int $entityId){
        // return  $this->sendResponse($entityId,'OK',200)

        $entity=$this->model->find($entityId);
        if(is_null($entity)) {
            return $this->sendError('Not Found', 404);
        }
        return  $this->sendResponse($entity,'OK',200);
    }



    public function update(int $entityId) {  //Доделать обновление.

        try{
            $this->model->find($entityId);
            $data = $this->request->validated();
            $this->model->fill($data)->push();
        }
        catch (Throwable $error){
            return $this->sendError('Not Found', 404);
        }

        return $this->sendResponse(null, 'Updated',200); //Код 204 -сервер успешно обработал запрос, но не возвращает никакого содержимого
    }


    public function delete(int $entityId) {

        try{
            $entity=$this->model->find($entityId);
            $entity->delete();
        }
        catch (Throwable $error){
            return $this->sendError('Not Found', 404);
        }

        return $this->sendResponse(null, 'Deleted',200);     //Код 204 -сервер успешно обработал запрос, но не возвращает никакого содержимого

    }



}

