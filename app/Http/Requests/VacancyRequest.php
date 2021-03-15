<?php


namespace App\Http\Requests;


class VacancyRequest extends ApiRequest
{
    public function rules()
    {
        return [
            'description'=>'string',
            'location'=>'string',
            'phone'=>'string',
            'email'=>'string',
            'site'=>'string',
            'name'=>'string',
            'type'=>'int'
        ];
    }
    public function messages(){
        return [
            'description.string'=>'Description should be string',
            'location.string'=>'Location should be string',
            'phone.string'=>'Location should be string',
            'email.string'=>'Location should be string',
            'site.string'=>'Location should be string',
            'name.string'=>'Location should be string',
            'type.int'=>'Location should be int',
        ];
    }
}
