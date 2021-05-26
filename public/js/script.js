document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true
    })

    $("#portfolio .owl-carousel").owlCarousel({
        items: 1,
        margin: 15,
        mouseDrag: false,
        touchDrag: true,
        loop: false,
        nav: false
    })

    $("#portfolio .owl-carousel-projects").owlCarousel({
        items: 1,
        margin: 15,
        mouseDrag: false,
        touchDrag: true,
        loop: false,
        nav: false
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY > 280) {
            document.querySelector('#scroll-top').style.display = 'flex'
        } else {
            document.querySelector('#scroll-top').style.display = 'none'
        }
    })

    document.querySelector('#contact-form').addEventListener('submit', event => {
        event.preventDefault()
        document.querySelector('button[type=submit]').innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span> ' + document.querySelector('button[type=submit]').textContent

        fetch('https://script.google.com/macros/s/AKfycbx8VMQXTGdaDeTDb6_L8kRv2-eRaQ5D2Fq2RoevQH6EHYfPU94l/exec', {
            method: 'post',
            headers: {'Access-Control-Allow-Origin': '*' },
            body: new FormData(document.querySelector('#contact-form'))
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                alert('Votre message a bien été envoyé. Vous serez recontactez dans les plus brefs délais.')
            } else {
                alert('Une erreur est survenue lors du traitement de votre message. Si le problème persiste, je vous suggère d\'utiliser directement l\'adresse email indiquée sur la page.')
            }

            document.querySelector('#contact-form').reset()
            window.location.reload()
        })
    })
})
