<?php

namespace App\Filters\BlogPosts;

use App\Filters\RequestFilter;

class PostsFilter extends RequestFilter
{
    protected $allowedParms = [
        'title' => ['like'],
        'description' => ['like'],
        'tags' => ['eq', 'like'],
    ];

    protected $operatorsMap = [
        'eq' => '=',
        'like' => 'LIKE'
    ];
}
