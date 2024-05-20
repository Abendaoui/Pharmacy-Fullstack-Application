<?php

namespace App\Filters\Users;

use App\Filters\RequestFilter;

class UserFilter extends RequestFilter
{
    protected $allowedParms = [
        'fullname' => ['like'],
    ];

    protected $operatorsMap = [
        'eq' => '=',
        'like' => 'LIKE'
    ];
}
