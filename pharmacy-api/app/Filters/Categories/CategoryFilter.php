<?php

namespace App\Filters\Categories;

use App\Filters\RequestFilter;

class CategoryFilter extends RequestFilter
{
    protected $allowedParms = [
        'name' => ['eq', 'like'],
    ];

    protected $operatorsMap = [
        'eq' => '=',
        'like' => 'LIKE'
    ];
}
