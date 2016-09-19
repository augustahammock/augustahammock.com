<?php

    include_once('../modules/env.php');
    include_once('../modules/globals.php');

    $head['title'] = 'Equine Art by Augusta Hammock';
    $head['pageCSS'] = '/equine-art.min.css';
    $pageSlug = 'equine-art';

    $page = [
        'title' => 'Equine Art',
        'subheading' => 'Throughout history, the horse has conquered both country and canvas. To many who behold him, he is the ultimate expression of art.',
        'ctaLink' => $lRoot . '/shop',
        'ctaText' => 'Shop Art Prints'
    ];

    include_once($path['modules'] . '/global/document.php');
    include_once($path['modules'] . '/global/header.php');
    include_once($path['modules'] . '/page-title.php');
    include_once($path['modules'] . '/equine-art/art-types.php');
    include_once($path['modules'] . '/equine-art/bottom-cta.php');
    include_once($path['modules'] . '/global/footer.php');

?>