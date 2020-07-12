document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true
    })

    $(".owl-carousel").owlCarousel({
        items: 1,
        mouseDrag: false,
        touchDrag: false,
        loop: false,
        nav: false
    })

    document.querySelectorAll('.show-modal').forEach(element => {
        element.addEventListener('click', event => {
            document.querySelector('#modal-image').setAttribute('src', event.target.dataset.image)
            document.querySelector('#modal').setAttribute('style', 'display: block')
        })
    })

    document.querySelector('#close-modal').addEventListener('click', () => {
        document.querySelector('#modal').setAttribute('style', 'display: none');
    })

    window.addEventListener('scroll', () => {
        if (document.querySelector('#scroll-top')) {
            if (window.scrollY > 180) {
                $('#scroll-top').fadeIn('slow')
            } else {
                $('#scroll-top').fadeOut('slow')
            }
        }
    })
})

function closeLightbox() {
    
}