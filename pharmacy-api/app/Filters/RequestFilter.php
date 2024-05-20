<?php

namespace App\Filters;

use Illuminate\Http\Request;


class RequestFilter
{
    protected $allowedParms = []; 

    protected $columnMap = [];

    protected $operatorsMap = [];

    public function transform(Request $request): array
    {
        $eloQuery = [];
        foreach ($this->allowedParms as $parm => $operators) {
            $query = $request->query($parm);

            if (!isset($query)) {
                continue;
            }

            $column = $this->columnMap[$parm] ?? $parm;

            $eloQuery = array_merge(
                $eloQuery,
                array_filter(array_map(function ($operator) use ($column, $query) {
                    if (isset($query[$operator])) {
                        $value = $query[$operator];
                        if ($operator === 'like') {
                            $value = "%{$value}%";
                        }
                        return [$column, $this->operatorsMap[$operator], $value];
                    }
                    return null;
                }, $operators))
            );
        }
        return $eloQuery;
    }
}
