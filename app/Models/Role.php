<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Role extends \TCG\Voyager\Models\Role
{
    protected $table='roles';
    protected $fillable = [
        'name',
       'display_name',
    ];
    public function users()
    {
        return $this->belongsToMany('App\Models\User', 'user_roles', 'role_id', 'user_id');
    }
}
