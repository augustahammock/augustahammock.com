<?php

    include_once('../modules/env.php');
    include_once('../modules/globals.php');

    $head['title'] = 'Equine Website Design &amp; Development';
    $head['pageCSS'] = '/websites.min.css';
    $pageSlug = 'websites';

    $page = [
        'title' => 'Websites',
        'subheading' => 'The Internet is today\'s most powerful tool for marketing. Bolster your online presence with a premier website.',
        'ctaLink' => $lRoot . '/contact',
        'ctaText' => 'Let\'s Talk'
    ];

    include_once($path['modules'] . '/global/document.php');
    include_once($path['modules'] . '/global/header.php');
    include_once($path['modules'] . '/page-title.php');
    include_once($path['modules'] . '/websites/features.php');
    include_once($path['modules'] . '/websites/gallery.php');
    include_once($path['modules'] . '/websites/policies.php');
    include_once($path['modules'] . '/global/footer.php');

?>