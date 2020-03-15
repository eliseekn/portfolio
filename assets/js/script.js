$(function() {
    AOS.init({
        once: true
    });

    $( window ).scroll( function() {
        if ( $( this ).scrollTop() > 180 ) {
            $( "#scroll-top" ).fadeIn( 'slow' );
        } else {
            $( "#scroll-top" ).fadeOut( 'slow' );
        }
    });

    $( ".owl-carousel" ).owlCarousel({
        items: 1,
		mouseDrag: false,
		touchDrag: false,
        loop: false,
        nav: false,
        animateIn: 'slideInRight'
    });

    $( ".mockup" ).click( function() {
        $( "#mockup-image" ).attr( "src", this.dataset.imgPath );
        $( ".mockup-modal" ).css( "display", "block" );
    });

    $( ".mockup-modal" ).find( "li" ).click( function() {
        $( ".mockup-modal"  ).css( "display", "none" );
    });
});
