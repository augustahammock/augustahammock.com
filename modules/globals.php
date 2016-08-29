<?php

    if ($env == 'local'){
        $path = [
            'modules'   => $root . '/modules',
            'css'       => 'public/css',
            'js'        => '/augustahammock.com/public/js',
            'img'       => 'public/img'
        ];
    } else {
        $path = [
            'modules'   => $root . '/modules',
            'css'       => $root . '/public/css',
            'js'        => $root . '/public/js',
            'img'       => $root . '/public/img'
        ];
    }

    // Content for <head>
    $head = [
        'title'         => 'Equine Art &amp; Media by Augusta Hammock',
        'description'   => 'Beautiful artwork, logos, websites, and design for the equine world.',
        'keywords'      => 'equine media, horse art, equine art, equine logo, horse logo, equine design, horse design, equine website design, horse website design, equine graphics, horse graphics, equine graphic design, horse graphic design, graphic design, horse business, horse website, Arabian horse art, buy horse art, buy equine art, horse art prints, equine art prints, Arabian horses',

        // OpenGraph
        'ogTitle'           => 'Meaningful Media for the Equine World',
        'ogDescription'     => 'Beautiful artwork, logos, websites, and design for farms, breeding programs, and equine professionals across the globe.',
        'ogURL'             => 'augustahammock.com',
        'ogImage'           => $path['img'] . '/og/default.jpg',
        'ogImageType'       => 'image/jpeg',
        'ogImageWidth'      => '',
        'ogImageHeight'     => '',

        'favicon' => $path['img'] . '/favicon.ico'
    ];

    // Global include defaults
    $globals = [
        'pageJS' => $path['js'] . '/global.min.js'
    ];

?>