document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true
    })

    $("#services .owl-carousel").owlCarousel({
        items: 2,
        margin: 15,
        mouseDrag: false,
        touchDrag: true,
        loop: false,
        nav: false,
        responsive : {
            0: {
                items: 1
            },

            768: {
                items: 2
            }
        }
    })

    $("#portfolio .owl-carousel").owlCarousel({
        items: 1,
        mouseDrag: false,
        touchDrag: true,
        loop: false,
        nav: false
    })

    $("#projects .owl-carousel").owlCarousel({
        items: 1,
        mouseDrag: false,
        touchDrag: true,
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

    document.querySelector('#modal').addEventListener('click', () => {
        document.querySelector('#modal').setAttribute('style', 'display: none');
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY > 280) {
            $('#scroll-top').fadeIn('slow')
        } else {
            $('#scroll-top').fadeOut('slow')
        }
    })

    document.querySelector('#contact-form').addEventListener('submit', event => {
        event.preventDefault()

        let object = {}
        const formData = new FormData(document.querySelector('#contact-form'))
        formData.forEach((value, key) => {object[key] = value})
        
        fetch('https://script.google.com/macros/s/AKfycbx8VMQXTGdaDeTDb6_L8kRv2-eRaQ5D2Fq2RoevQH6EHYfPU94l/exec', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'mode' : 'same-origin'
            },
            body: JSON.stringify(object)
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                alert('Votre message a bien été envoyé. Vous serez recontactez dans les plus brefs délais.')
            } else {
                alert('Une erreur est survenue lors du traitement de votre message. Si le problème persiste, je vous suggère d\'utiliser directement email indiquée sur la page.')
            }

            document.querySelector('#contact-form').reset()
        })
    })
})