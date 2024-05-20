<?php

namespace App\Filters\Medecines;

use App\Filters\RequestFilter;

class MedecineFilter extends RequestFilter
{
    protected $allowedParms = [
        'name' => ['eq', 'like'],
        'price' => ['eq', 'gt', 'lt', 'lte', 'gte'],
        'quantity' => ['eq', 'gt', 'lt', 'lte', 'gte'],
        'brand_id' => ['eq'],
        'brand_id' => ['eq'],
    ];

    protected $operatorsMap = [
        'eq' => '=',
        'gt' => '>',
        'lt' => '<',
        'lte' => '<=',
        'gte' => '>=',
        'like' => 'LIKE'
    ];
}
