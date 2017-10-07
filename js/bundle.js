$(function() {
    //smooth scrolling
    $('a[href*="#"]').on('click', function(e) {
        try {
            e.preventDefault();
            var target = $(this).attr('href');
            document.querySelector(target).scrollIntoView({behavior: 'smooth'});
        } catch(e){}

        $('.back-to-top').on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 1200);
            return false;
        });
    });
});
