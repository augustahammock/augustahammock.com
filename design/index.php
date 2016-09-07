<?php

    include_once('../modules/env.php');
    include_once('../modules/globals.php');

    $head['title'] = 'Equine Design';
    $head['pageCSS'] = '/design.min.css';
    $pageSlug = 'design';

    $page = [
        'title' => 'Design',
        'subheading' => 'Good design gets your audience’s attention. Great design puts that attention in the right place.',
        'ctaLink' => $lRoot . '/contact/?interest=design',
        'ctaText' => 'Let\'s Talk'
    ];

    include_once($path['modules'] . '/global/document.php');
    include_once($path['modules'] . '/global/header.php');
    include_once($path['modules'] . '/page-title.php');
    include_once($path['modules'] . '/design/design-types.php');
    include_once($path['modules'] . '/design/gallery.php');
    include_once($path['modules'] . '/design/policies.php');
    include_once($path['modules'] . '/global/footer.php');

?>