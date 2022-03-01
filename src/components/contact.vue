<template>
    <div class="flex flex-col items-start justify-center min-h-screen">
        <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-5xl">{{ activePage }}</h1>
            
        <div class="grid grid-cols-2 gap-3">
            <div class="col-span-6 md:col-auto text-center order-2 md:text-left mt-5 md:mt-0 px-0 md:px-10 animate-slide-out">
                <p class="text-base md:text-xl md:leading-loose">
                    Besoin de mes services ? Veuillez remplir et envoyer le formulaire ci-contre en détaillant au maximum vos besoins.
                </p>

                <div class="mt-8">
                    <a href="mailto:eliseekn@gmail.com" target='_blank' rel="nofollow noreferrer noopener"><span class="text-5xl"><font-awesome-icon :icon="faEnvelope" /></span></a>
                    <a href="https://linkedin.com/in/eliseekn" target='_blank' rel="nofollow noreferrer noopener"><span class="text-5xl mx-6"><font-awesome-icon :icon="faLinkedin" /></span></a>
                    <a href="https://github.com/eliseekn" target='_blank' rel="nofollow noreferrer noopener"><span class="text-5xl"><font-awesome-icon :icon="faGithub" /></span></a>
                </div>
                
                <div class="flex items-center justify-center md:justify-start mt-10">
                    <button class="text-base md:text-xl md:leading-loose font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" @click="props.setActivePage('Mes projets')" title="Retour">
                        <font-awesome-icon :icon="faArrowLeft" />
                    </button>

                    <button class="text-base md:text-xl md:leading-loose ml-5 font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" @click="props.setActivePage('FAQ')">
                        FAQ
                    </button>
                </div>
            </div>

            <div class="col-span-6 md:col-auto order-1">
                <div class="grid grid-cols-2 gap-3">
                    <input type="text" id="name" class="placeholder:text-white placeholder:text-sm md:placeholder:text-base text-base border bg-transparent px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-[#7e97a6] focus:outline-0 transition ease-in-out duration-500" placeholder="Nom et prénom(s)" v-model.lazy="formData.name" @keyup.enter="submitContactForm()" />
                    <input type="email" id="email" class="placeholder:text-white placeholder:text-sm md:placeholder:text-base text-base border bg-transparent px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-[#7e97a6] focus:outline-0 transition ease-in-out duration-500" placeholder="Adresse email" v-model.lazy="formData.email" @keyup.enter="submitContactForm()" />
                    <input type="text" id="subject" class="placeholder:text-white placeholder:text-sm md:placeholder:text-base text-base my-3 col-span-full border bg-transparent px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-[#7e97a6] focus:outline-0 transition ease-in-out duration-500" placeholder="Objet" v-model.lazy="formData.subject" @keyup.enter="submitContactForm()" />
                    <textarea id="message" placeholder="Message" class="placeholder:text-white placeholder:text-sm md:placeholder:text-base text-base col-span-full border bg-transparent px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-[#7e97a6] focus:outline-0 transition ease-in-out duration-500" rows="5" v-model.lazy="formData.message" @keyup.enter="submitContactForm()"></textarea>
                
                    <button type="button" class="text-base md:text-xl md:leading-loose col-span-full font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" @click="submitContactForm()">
                        <span v-if="isLoading">Opération en cours...</span>
                        <span v-else>Envoyer</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons"
    import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
    import { library } from '@fortawesome/fontawesome-svg-core'

    library.add(faArrowLeft, faEnvelope, faGithub, faLinkedin)

    interface Props {
        activePage: string,
        setActivePage: (page: string) => void
    }

    const props = defineProps<Props>()

    const isLoading = ref(false)

    const formData = ref({
        name: '',
        email: '',
        subject: '',
        message: '',
        timestamp: ''
    })

    const submitContactForm = () => {
        if (formData.value.name == '' || formData.value.email == '' || formData.value.subject == '' || formData.value.message == '') {
            alert('Veuillez remplir correctement tous les champs')
            return
        }

        //https://codesource.io/how-to-validate-email-in-javascript/
        if (!new RegExp(/^[^\s@]+@[^\s@]+$/).test(formData.value.email)) {
            alert('Veuillez fournir une adresse email correcte')
            return
        }

        isLoading.value = true

        formData.value.timestamp = new Date().toUTCString()

        fetch('https://sheet.best/api/sheets/b0e5f88f-386b-43a3-85f8-dc194a89262f', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData.value)
        })
            .then(res => res.json())
            .then(() => {
                isLoading.value = false

                formData.value = {
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    timestamp: ''
                }

                alert('Votre message a bien été envoyé. Vous serez recontactez dans les plus brefs délais.')
            })
    }
</script>
