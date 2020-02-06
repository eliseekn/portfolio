$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 180) {
            $("#scroll-top").fadeIn('slow');
        } else {
            $("#scroll-top").fadeOut('slow');
        }
    });
});