<?php

return [
    'version' => env('API_VERSION', 'v1'),
    'token_length' => env('API_TOKEN_LENGTH', 80),
    // UNIT - BYTES
    'post_max_size' => 128000,
    'utf8_max_char_size' => 32
];
