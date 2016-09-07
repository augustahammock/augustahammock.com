<?php

    include_once('../modules/env.php');
    include_once('../modules/globals.php');

    $head['title'] = 'About Augusta Hammock';
    $head['pageCSS'] = '/about.min.css';
    $pageSlug = 'about';

    $page = [
        'title' => 'About'
    ];

    include_once($path['modules'] . '/global/document.php');
    include_once($path['modules'] . '/global/header.php');
    include_once($path['modules'] . '/page-title.php');
    include_once($path['modules'] . '/about/bio.php');
    include_once($path['modules'] . '/about/gallery.php');
    include_once($path['modules'] . '/global/footer.php');

?>