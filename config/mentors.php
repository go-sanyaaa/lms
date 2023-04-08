<?php

return [
    'load' => [
        ['mentor_id' => 1, 'count' => 700],
        ['mentor_id' => 2, 'count' => 0],
        ['mentor_id' => 3, 'count' => 0],
    ],
    'controllers_ids' => env('CONTROLLERS_IDS') ? explode(',', env('CONTROLLERS_IDS')) : null
];
