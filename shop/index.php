<?php

    include_once('../modules/env.php');
    include_once('../modules/globals.php');

    $head['title'] = 'Shop';
    $pageSlug = 'shop';
    $shopPage = true;

    $page = [
        'title' => 'Shop Art Prints'
    ];

    $isProductPage = isset($_GET['product']);

    if (!$isProductPage) {
        $head['pageCSS'] = '/shop.min.css';
        $pageJS = $path['js'] . '/shop.min.js';
    } else {
        $head['pageCSS'] = '/product.min.css';
        $pageJS = $path['js'] . '/product.min.js';
    }

    include_once($path['modules'] . '/global/document.php');
    include_once($path['modules'] . '/global/header.php');
    include_once($path['modules'] . '/page-title.php');

    if (!$isProductPage) {
        include_once($path['modules'] . '/shop/art-prints-intro.php');
        include_once($path['modules'] . '/shop/art-prints.php');
    } else {
        include_once($path['modules'] . '/shop/product.php');
    }

    include_once($path['modules'] . '/global/footer.php');

?>