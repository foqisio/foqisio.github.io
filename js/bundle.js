$(function() {
    //smooth scrolling
    $('a[href*="#"]').on('click', function(e) {
        try {
            var target = $(this).attr('href');
            var c0 = target.charAt(0);

            // on honor local anchors (they must start with a #)
            if (c0 === '#') {
                e.preventDefault();
                document.querySelector(target).scrollIntoView({behavior: 'smooth'});
            }
        } catch(e){}

        $('.back-to-top').on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 1200);
            return false;
        });
    });
});
