<?php

namespace App\Filters\Orders;

use App\Filters\RequestFilter;

class OrderFilter extends RequestFilter
{
    protected $allowedParms = [
        'id' => ['eq', 'like'],
        'payment_method' => ['eq', 'like'],
        'order_status' => ['eq', 'like'],
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
