<section class="global-footer">
    <div class="row">
        
        <ul class="social-links">
            <li>
                <a href="https://www.facebook.com/AugustaHammockEquineArt" class="facebook">
                    <?php include_once($path['img'] . '/svgs/facebook-logo.svg'); ?>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/augustahammock/" class="instagram">
                    <?php include_once($path['img'] . '/svgs/instagram-logo.svg'); ?>
                </a>
            </li>
        </ul>

        <p class="quick-contact small">
            <span>+1 478.952.6362</span>
            <span class="divider"></span>
            <span><a href="mailto:augusta@augustahammock.com">augusta@augustahammock.com</a></span>
        </p>

        <p class="legal small">&copy; <?php echo date('Y'); ?> Augusta Hammock. All rights reserved.

    </div>
</section>

<script src="<?php echo $path['js']; ?>/lib/jquery-3.1.0.min.js"></script>
<script src="<?php echo $globals['pageJS']; ?>"></script>

<?php

if ($env == 'production') { // Google Analytics
    include_once($path['modules'] . '/global/analytics.php');

} else if ($env == 'local') { // Inject changes via BrowserSync ?>
    <script id="__bs_script__">//<![CDATA[
        document.write("<script async src='http://HOST:3002/browser-sync/browser-sync-client.2.14.0.js'><\/script>".replace("HOST", location.hostname));
    //]]></script>
<?php } ?>

</body>
</html>