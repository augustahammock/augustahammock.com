<?php

    $host = $_SERVER['HTTP_HOST'];
    $root;
    $env;

    // Local
    if (stripos($host, 'localhost') != -1) {
        $root   = $_SERVER['DOCUMENT_ROOT'] . '/augustahammock.com';
        $env    = 'local';
    
    // Stage
    } else if ($host == 'dev.augustahammock.com') {
        $root   = 'http://stage.augustahammock.com';
        $env    = 'stage';
    
    // Production
    } else if ($host == 'augustahammock.com') {
        $root   = 'http://augustahammock.com';
        $env    = 'production';
    }

?>