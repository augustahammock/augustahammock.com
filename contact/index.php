<?php

    include_once('../modules/env.php');
    include_once('../modules/globals.php');

    $head['title'] = 'Contact Me';
    $head['pageCSS'] = '/contact.min.css';
    $pageSlug = 'contact';

    $page = [
        'title' => 'Contact'
    ];

    $pageJS = $path['js'] . '/contact.min.js';

    include_once($path['modules'] . '/global/document.php');
    include_once($path['modules'] . '/global/header.php');
    include_once($path['modules'] . '/page-title.php');
    include_once($path['modules'] . '/contact/contact-success.php');
    include_once($path['modules'] . '/contact/contact-failure.php');
    include_once($path['modules'] . '/contact/form.php');
    include_once($path['modules'] . '/contact/direct-contact-info.php');
    include_once($path['modules'] . '/global/footer.php');

?>