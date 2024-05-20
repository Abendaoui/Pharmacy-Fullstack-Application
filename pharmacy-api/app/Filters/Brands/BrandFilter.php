<?php

namespace App\Filters\Brands;

use App\Filters\RequestFilter;

class BrandFilter extends RequestFilter
{
    protected $allowedParms = [
        'brand_name' => ['eq', 'like'],
    ];
    protected $operatorsMap = [
        'eq' => '=',
        'like' => 'LIKE'
    ];
}
