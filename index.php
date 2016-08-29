<?php

    include_once('modules/env.php');
    include_once('modules/globals.php');

    $head['pageCSS'] = '/home.min.css';
    $pageSlug = 'home';

    include_once($path['modules'] . '/global/document.php');
    include_once($path['modules'] . '/global/header.php');
    include_once($path['modules'] . '/home/title.php');
    include_once($path['modules'] . '/home/hero.php');
    include_once($path['modules'] . '/home/services.php');
    include_once($path['modules'] . '/global/footer.php');

?>