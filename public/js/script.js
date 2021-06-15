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

        let submitButton = document.querySelector('button[type=submit]')
        let submitButtonText = submitButton.textContent
        
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span>'

        let formData = new FormData(document.querySelector('#contact-form'))
        formData.append('timestamp', new Date().toUTCString())

        let data = {}

        formData.forEach((value, key) => {
            data[key] = value
        })

        fetch('https://sheet.best/api/sheets/b0e5f88f-386b-43a3-85f8-dc194a89262f', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(() => {
            alert('Votre message a bien été envoyé. Vous serez recontactez dans les plus brefs délais.')
            document.querySelector('#contact-form').reset()
            window.location.reload()
        })
    })
})
