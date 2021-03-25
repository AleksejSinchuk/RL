<?php


namespace App\Http\Controllers\Api_V1;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Passport\Passport;


class ApiUserController extends Controller
{
    public function create(Request $data) {
        try{
            $users=new User();
            $users->email=$data['email'];
            $users->password=Hash::make($data['password']);
            $users->remember_token=Str::random(60);
            $users->name=$data['name'];
            $users->role_id=$data['role_id'];
            $users->updated_at=DB::raw(NOW());
            $users->created_at=DB::raw(NOW());
            $users->save();



            return $this->sendResponse(null,"Create successful",200);
        }
        catch (Throwable $error) {
            return $this->sendError('Not Found', 404);
        }

    }

    public function get(){

        $result=User::all()->whith('roles')->get();
        return $this->sendResponse($result,'OK',200);
    }


    public function detail(int $entityId){

        $data=User::all()->where("id",$entityId);
        if(is_null($data)) {
            return $this->sendError('Not Found', 404);
        }
        return  $this->sendResponse($data,'OK',200);
    }



    public function update(Request $user) {  //Доделать обновление.

        try{

            User::query()->push($user->all());
        }
        catch (Throwable $error){
            return $this->sendError('Not Found', 404);
        }

        return $this->sendResponse(null, 'Updated',200); //Код 204 -сервер успешно обработал запрос, но не возвращает никакого содержимого
    }


    public function delete(int $entityId) {

        try{
            User::deleted()->where("id",$entityId);;

        }
        catch (Throwable $error){
            return $this->sendError('Not Found', 404);
        }

        return $this->sendResponse(null, 'Deleted',200);     //Код 204 -сервер успешно обработал запрос, но не возвращает никакого содержимого

    }


}
