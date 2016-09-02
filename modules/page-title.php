<section class="page-title">
    <div class="row">

        <h1><?php echo $page['title']; ?></h1>

        <?php if (isset($page['subheading'])) { ?>
            <p class="large"><?php echo $page['subheading']; ?></p>
        <?php } ?>

        <?php if (isset($page['ctaLink']) && isset($page['ctaText'])) { ?>
            <a href="<?php echo $page['ctaLink']; ?>" class="button"><?php echo $page['ctaText']; ?></a>
        <?php } ?>

    </div>
</section>