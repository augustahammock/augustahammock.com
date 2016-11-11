<section class="global-header">
    <div class="row">

        <a class="logo" href="<?php echo $lRoot; ?>">
            <?php include_once($path['svg'] . '/signature.svg'); ?>
        </a>

        <a href="#" class="mobile-menu-button">
            <?php include_once($path['svg'] . '/menu.svg'); ?>
        </a>

        <nav class="global-nav">
            <a href="<?php echo $lRoot; ?>/equine-art"<?php if ($pageSlug == 'equine-art'){ echo ' class="active"'; } ?>>Equine Art</a>
            <a href="<?php echo $lRoot; ?>/logos"<?php if ($pageSlug == 'logos'){ echo ' class="active"'; } ?>>Logos</a>
            <a href="<?php echo $lRoot; ?>/websites"<?php if ($pageSlug == 'websites'){ echo ' class="active"'; } ?>>Websites</a>
            <a href="<?php echo $lRoot; ?>/design"<?php if ($pageSlug == 'design'){ echo ' class="active"'; } ?>>Design</a>
            <a href="<?php echo $lRoot; ?>/about"<?php if ($pageSlug == 'about'){ echo ' class="active"'; } ?>>About</a>
            <a href="<?php echo $lRoot; ?>/contact"<?php if ($pageSlug == 'contact'){ echo ' class="active"'; } ?>>Contact</a>
            <a href="<?php echo $shopUrl; ?>" class="<?php if ($shopPage){ echo ' active'; } ?>">Shop</a>
        </nav>

    </div>
</section>