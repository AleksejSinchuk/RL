<?php


namespace App\Traits;


trait Encrypte
{

    public function Hesh($massege,$key){
        return hash_hmac('sha256',$massege,$key);
    }

}
