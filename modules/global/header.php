<section class="global-header">
    <div class="row">

        <a class="logo" href="/">
            <?php include_once($path['img'] . '/svgs/signature.svg'); ?>
        </a>

        <a href="#" class="mobile-menu-button">
            <?php include_once($path['img'] . '/svgs/menu.svg'); ?>
        </a>

        <nav class="global-nav">
            <a href="equine-art"<?php if ($pageSlug == 'equine-art'){ echo ' class="active"'; } ?>>Equine Art</a>
            <a href="logos"<?php if ($pageSlug == 'logos'){ echo ' class="active"'; } ?>>Logos</a>
            <a href="websites"<?php if ($pageSlug == 'websites'){ echo ' class="active"'; } ?>>Websites</a>
            <a href="design"<?php if ($pageSlug == 'design'){ echo ' class="active"'; } ?>>Design</a>
            <a href="about"<?php if ($pageSlug == 'about'){ echo ' class="active"'; } ?>>About</a>
            <a href="contact"<?php if ($pageSlug == 'contact'){ echo ' class="active"'; } ?>>Contact</a>
        </nav>

    </div>
</section>