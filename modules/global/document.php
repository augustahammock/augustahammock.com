<!DOCTYPE html>
<html>
    <head>
        <title><?php echo $head['title']; ?></title>
        <meta charset="UTF-8">
        <meta name="description" content="<?php echo $head['description']; ?>">
        <meta name="keywords" content="<?php echo $head['keywords']; ?>">

        <link rel="stylesheet" href="<?php echo $path['css'] . $head['pageCSS']; ?>">
    </head>

    <body class="<?php echo $pageSlug; ?>">