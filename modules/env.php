<?php

    $host = $_SERVER['HTTP_HOST'];
    $root;
    $env;
    $lRoot; // Root path for inline links

    // Local
    if (stripos($host, 'localhost') != -1) {
        $root   = $_SERVER['DOCUMENT_ROOT'] . '/augustahammock.com';
        $lRoot  = 'http://localhost:8888/augustahammock.com';
        $env    = 'local';
    
    // Stage
    } else if ($host == 'dev.augustahammock.com') {
        $root   = 'http://stage.augustahammock.com';
        $lRoot  = 'http://stage.augustahammock.com';
        $env    = 'stage';
    
    // Production
    } else if ($host == 'augustahammock.com') {
        $root   = 'http://augustahammock.com';
        $lRoot  = 'http://augustahammock.com';
        $env    = 'production';
    }

?>