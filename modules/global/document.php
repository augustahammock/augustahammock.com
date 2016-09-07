<!DOCTYPE html>
<html>
    <head>
        <title><?php echo $head['title']; ?></title>
        <meta charset="UTF-8">
        <meta name="description" content="<?php echo $head['description']; ?>">
        <meta name="keywords" content="<?php echo $head['keywords']; ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="<?php echo $path['css'] . $head['pageCSS']; ?>">
    </head>

    <body class="<?php echo $pageSlug; ?>">