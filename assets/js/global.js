// Global scripts

$(function(){

    var mobileMenu = $('.global-nav'),
        mobileMenuBtn = $('.mobile-menu-button');

    mobileMenuBtn.on('click', function() {
        if (!mobileMenuBtn.hasClass('menu-open')) {
            mobileMenuBtn.addClass('menu-open');
            mobileMenu.slideDown();
        } else {
            mobileMenu.slideUp(400, function() {
                mobileMenuBtn.removeClass('menu-open');
            });
        }
    })

});