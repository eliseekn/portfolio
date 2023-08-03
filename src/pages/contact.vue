<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ setActivePage: (page: string) => void }>()

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: '',
    timestamp: '',
    submitted: false
})

const submitContactForm = () => {
    if (form.value.name == '' || form.value.email == '' || form.value.subject == '' || form.value.message == '') {
        return alert('Veuillez remplir correctement tous les champs')
    }

    //https://codesource.io/how-to-validate-email-in-javascript/
    if (!new RegExp(/^[^\s@]+@[^\s@]+$/).test(form.value.email)) {
        return alert('Veuillez fournir une adresse email correcte')
    }

    form.value.submitted = true
    form.value.timestamp = new Date().toUTCString()

    fetch('https://sheet.best/api/sheets/b0e5f88f-386b-43a3-85f8-dc194a89262f', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form.value)
    })
        .then(res => res.json())
        .then(() => {
            form.value = {
                name: '',
                email: '',
                subject: '',
                message: '',
                timestamp: '',
                submitted: false
            }

            alert('Votre message a bien été envoyé. Vous serez recontactez dans les plus brefs délais.')
        })
}
</script>

<template>
    <div class="flex flex-col items-start justify-center min-h-screen">
        <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-5xl xl:hidden">Me contacter</h1>
            
        <div class="grid grid-cols-2 gap-3">
            <div class="col-span-6 md:col-auto text-center order-2 md:text-left mt-5 md:mt-0 px-0 md:px-10 animate-slide-out">
                <p class="text-base md:text-xl md:leading-loose">
                    Merci de détailler au maximum vos besoins afin que je puisse cerner au mieux votre projet.
                </p>

                <div class="mt-8">
                    <a href="mailto:eliseekn@gmail.com" target='_blank' rel="nofollow noreferrer noopener">
                        <span class="text-5xl"><font-awesome-icon :icon="['fa-solid' , 'envelope']" /></span>
                    </a>

                    <a href="https://linkedin.com/in/eliseekn" target='_blank' rel="nofollow noreferrer noopener">
                        <span class="text-5xl mx-6"><font-awesome-icon :icon="['fa-brands' , 'linkedin']" /></span>
                    </a>

                    <a href="https://github.com/eliseekn" target='_blank' rel="nofollow noreferrer noopener">
                        <span class="text-5xl"><font-awesome-icon :icon="['fa-brands' , 'github']" /></span>
                    </a>
                </div>
                
                <div class="flex items-center justify-center md:justify-start mt-10 xl:hidden">
                    <button class="btn" @click="props.setActivePage('Mes projets')" title="Retour">
                        <font-awesome-icon :icon="['fa-solid', 'arrow-left']" />
                    </button>

                    <button class="btn ml-5" @click="props.setActivePage('FAQ')">FAQ</button>
                </div>
            </div>

            <div class="col-span-6 md:col-auto order-1">
                <div class="grid grid-cols-2 gap-4">
                    <input type="text" id="name" class="input col-span-full xl:col-auto" placeholder="Nom et prénom(s)" v-model.lazy="form.name" />
                    <input type="email" id="email" class="input col-span-full xl:col-auto" placeholder="Adresse email" v-model.lazy="form.email" />
                    <input type="text" id="subject" class="input col-span-full" placeholder="Objet" v-model.lazy="form.subject" />
                    <textarea id="message" placeholder="Message" class="input col-span-full resize-none" rows="5" v-model.lazy="form.message"></textarea>
                
                    <button type="button" class="btn col-span-full" @click="submitContactForm()">
                        <span v-if="form.submitted">Envoie en cours...</span>
                        <span v-else>Envoyer</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
