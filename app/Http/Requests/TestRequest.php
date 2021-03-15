<?php


namespace App\Http\Requests;


class TestRequest extends ApiRequest
{
    public function rules()
    {
      return [
//            'description'=>'string',
//            'location'=>'string',
//            'phone'=>'string',
//            'email'=>'string',
//            'site'=>'string',
//            'name'=>'string'
       ];
    }
    public function messages(){
        return [
//            'description.string'=>'Description should be string',
//            'location.string'=>'Location should be int',
//            'phone.string'=>'Location should be int',
//            'email.string'=>'Location should be int',
//            'site.string'=>'Location should be int',
//            'name.string'=>'Location should be int',
//
       ];
    }

}
