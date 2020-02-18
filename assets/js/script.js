$(function() {
    AOS.init({
        once: true
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 180) {
            $("#scroll-top").fadeIn('slow');
        } else {
            $("#scroll-top").fadeOut('slow');
        }
    });

    $(".owl-carousel").owlCarousel({
        margin: 30,
        items: 1,
        loop: false,
        nav: false,
        animateOut: 'fadeOut',
        animateIn: 'slideInRight'
    });

    $(".mockup").click(function() {
        $("#mockup-image").attr("src", this.dataset.path + "full.jpg");
        $(".mockup-modal").css("display", "block");
    });

    $(".mockup-modal").click(function() {
        $(this).css("display", "none");
    });
});
