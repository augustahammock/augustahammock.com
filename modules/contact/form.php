<?php
    
    $interest = '';

    if (isset($_GET['interest'])) {
        $interest = $_GET['interest'];
    }

?>

<section class="form">
    <div class="row">
        <div class="form-container">

            <div class="form-item validate name" data-required="true" data-validate="string">
                <label for="name">Name</label>
                <input id="name" type="text">
                <ul class="errors">
                    <li class="required">Please provide your name.</li>
                    <li class="invalid">Please use only letters, numbers, and punctuation.</li>
                </ul>
            </div>

            <div class="form-item validate email" data-required="true" data-validate="email">
                <label for="email">Email</label>
                <input id="email" type="email">
                <ul class="errors">
                    <li class="required">Please provide your email address.</li>
                    <li class="invalid">Please provide a valid email address.</li>
                </ul>
            </div>

            <div class="form-item interest" data-required="false">
                <label>Interests</label>
                <ul class="checkbox-options">
                    <li data-value="Logo"<?php if ($interest == 'logo') { echo ' class="selected"'; } ?>>
                        <span class="box"><?php include($path['svg'] . '/check.svg'); ?></span> Logo
                    </li>
                    <li data-value="Website"<?php if ($interest == 'website') { echo ' class="selected"'; } ?>>
                        <span class="box"><?php include($path['svg'] . '/check.svg'); ?></span> Website
                    </li>
                    <li data-value="Design"<?php if ($interest == 'design') { echo ' class="selected"'; } ?>>
                        <span class="box"><?php include($path['svg'] . '/check.svg'); ?></span> Design
                    </li>
                    <li data-value="Artwork"<?php if ($interest == 'equine-art') { echo ' class="selected"'; } ?>>
                        <span class="box"><?php include($path['svg'] . '/check.svg'); ?></span> Artwork
                    </li>
                    <li data-value="Other">
                        <span class="box"><?php include($path['svg'] . '/check.svg'); ?></span> Other
                    </li>
                </ul>
            </div>

            <div class="form-item validate message" data-required="true" data-validate="string">
                <label for="message">Message</label>
                <textarea id="email"></textarea>
                <ul class="errors">
                    <li class="required">Please describe your project.</li>
                    <li class="invalid">Please use only letters, numbers, and punctuation.</li>
                </ul>
            </div>

            <div class="form-item">
                <a href="#" class="button submit">Submit</a>
            </div>

        </div>
    </div>
</section>