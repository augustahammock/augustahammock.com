<?php

    include_once('../modules/env.php');
    include_once('../modules/globals.php');

    $head['title'] = 'Equine Logo Design';
    $head['pageCSS'] = '/logos.min.css';
    $pageSlug = 'logos';

    $page = [
        'title' => 'Logos',
        'subheading' => 'Your logo tells the story of who you are in a single image. Give the world an incredible identity to know you by.',
        'ctaLink' => $lRoot . '/contact/?interest=logo',
        'ctaText' => 'Let\'s Talk'
    ];

    include_once($path['modules'] . '/global/document.php');
    include_once($path['modules'] . '/global/header.php');
    include_once($path['modules'] . '/page-title.php');
    include_once($path['modules'] . '/logos/gallery-1.php');
    include_once($path['modules'] . '/logos/flavor-copy.php');
    include_once($path['modules'] . '/logos/gallery-2.php');
    include_once($path['modules'] . '/logos/bottom-cta.php');
    include_once($path['modules'] . '/logos/policies.php');
    include_once($path['modules'] . '/global/footer.php');

?>