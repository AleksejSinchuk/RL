<?php

namespace App\Traits;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

trait ApiResponse
{
    public function sendResponse($result,$message,$code){

        return response()->json(self::makeResponse($message,$result),$code);

    }

    public function sendError($error, $code = 400, $data = []) {

        return response()->json(self::makeError($error, $data), $code);
    }

    public static function makeResponse($message, $data)
    {
        $res= array(
            'success' => true,
            'message' => $message,
        );
        if($data!=null){
            $res['data'] = array($data);
        }
        return $res;
    }

    public static function makeError($message, array $data = [])
    {
        $res = array(
            'success' => false,
            'message' => $message,
        );

        if (!empty($data)) {
            $res['data'] = array($data);
        }

        return $res;
    }
}
