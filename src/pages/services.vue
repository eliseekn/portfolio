<template>
    <div class="flex flex-col items-start justify-center min-h-screen">
            <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-5xl">Mes services</h1>

            <div class="grid grid-cols-3 gap-3">
                <div class="animate-fade-in-1 col-span-6 lg:col-auto card p-4">
                    <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">Développement Backend</p>

                    <div class="my-3 md:my-5 text-xl md:text-5xl">
                        <span><font-awesome-icon :icon="faPhp" color="#7e97a6" /></span>
                        <span class="mx-4 md:mx-6"><font-awesome-icon :icon="faLaravel" color="#7e97a6" /></span>
                        <span><font-awesome-icon :icon="faSymfony" color="#7e97a6" /></span>
                    </div>

                    <p class="text-base md:text-xl md:leading-loose">
                        Je développe des APIs REST et des applications web avec Laravel et Symfony.
                    </p>
                </div>

                <div class="animate-fade-in-2 col-span-6 lg:col-auto card p-4">
                    <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">Développement Frontend</p>

                    <div class="my-3 md:my-5 text-xl md:text-5xl">
                        <span><font-awesome-icon :icon="faNodeJs" color="#7e97a6" /></span>
                        <span class="mx-4 md:ml-6"><font-awesome-icon :icon="faReact" color="#7e97a6" /></span>
                        <span><font-awesome-icon :icon="faVuejs" color="#7e97a6" /></span>
                    </div>

                    <p class="text-base md:text-xl md:leading-loose">
                        Je développe des applications web dynamiques avec Reacts.js et Vue.js.
                    </p>
                </div>

                <div class="animate-fade-in-3 col-span-6 lg:col-auto card p-4">
                    <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">Developpement WordPress</p>

                    <div class="my-3 md:my-5 text-xl md:text-5xl">
                        <span><font-awesome-icon :icon="faHtml5" color="#7e97a6" /></span>
                        <span class="mx-4 md:mx-6"><font-awesome-icon :icon="faCss3Alt" color="#7e97a6" /></span>
                        <span><font-awesome-icon :icon="faWordpressSimple" color="#7e97a6" /></span>
                    </div>

                    <p class="text-base md:text-xl md:leading-loose">
                        Je développe des sites et des plugins sur mesure pour WordPress.
                    </p>
                </div>
            </div>

            <div class="flex items-center justify-center md:justify-start mt-10">
                <button class="btn" @click="props.setActivePage('Home')" title="Retour">
                    <font-awesome-icon :icon="faArrowLeft" />
                </button>

                <button class="btn ml-5" @click="props.setActivePage('Mes réalisations')">
                    Mes réalisations
                </button>
            </div>
        </div>
</template>

<script setup lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
    import { faLaravel, faNodeJs, faPhp, faReact, faSymfony, faVuejs, faWordpressSimple, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons"
    import { library } from '@fortawesome/fontawesome-svg-core'

    library.add(faLaravel, faNodeJs, faPhp, faReact, faSymfony, faVuejs, faArrowLeft, faWordpressSimple, faHtml5, faCss3Alt)

    const props = defineProps<{ setActivePage: (page: string) => void }>()
</script>
