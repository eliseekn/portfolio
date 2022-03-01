<template>
    <div class="flex flex-col items-start justify-center min-h-screen">
            <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-5xl">{{ props.activePage }}</h1>

            <div class="grid grid-cols-3 gap-3">
                <div class="animate-fade-in-1 col-span-6 lg:col-auto bg-transparent border-2 border-[#7e97a6] rounded-lg p-4 hover:shadow hover:shadow-[#7e97a6] transition-all duration-500">
                    <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">Développement Backend</p>

                    <div class="my-3 md:my-5 text-xl md:text-5xl">
                        <span><font-awesome-icon :icon="faPhp" color="#7e97a6" /></span>
                        <span class="mx-4 md:mx-6"><font-awesome-icon :icon="faLaravel" color="#7e97a6" /></span>
                        <span><font-awesome-icon :icon="faSymfony" color="#7e97a6" /></span>
                    </div>

                    <p class="text-base md:text-xl md:leading-loose">
                        Je développe des APIs et des applications web avec PHP.
                    </p>
                </div>

                <div class="animate-fade-in-2 col-span-6 lg:col-auto bg-transparent border-2 border-[#7e97a6] rounded-lg p-4 hover:shadow hover:shadow-[#7e97a6] transition-all duration-500">
                    <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">Développement Frontend</p>

                    <div class="my-3 md:my-5 text-xl md:text-5xl">
                        <span><font-awesome-icon :icon="faReact" color="#7e97a6" /></span>
                        <span class="mx-4 md:ml-6"><font-awesome-icon :icon="faVuejs" color="#7e97a6" /></span>
                    </div>

                    <p class="text-base md:text-xl md:leading-loose">
                        Je développe des applications web dynamiques avec Reacts.js ou Vue.js.
                    </p>
                </div>

                <div class="animate-fade-in-3 col-span-6 lg:col-auto bg-transparent border-2 border-[#7e97a6] rounded-lg p-4 hover:shadow hover:shadow-[#7e97a6] transition-all duration-500">
                    <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">DevOps</p>

                    <div class="my-3 md:my-5 text-xl md:text-5xl">
                        <span><font-awesome-icon :icon="faGit" color="#7e97a6" /></span>
                        <span class="mx-4 md:mx-6"><font-awesome-icon :icon="faDocker" color="#7e97a6" /></span>
                        <span><font-awesome-icon :icon="faLinux" color="#7e97a6" /></span>
                    </div>

                    <p class="text-base md:text-xl md:leading-loose">
                        Je mets en place des systèmes de déploiement et d'intégration continus.
                    </p>
                </div>
            </div>

            <div class="flex items-center justify-center md:justify-start mt-10">
                <button class="text-base md:text-xl md:leading-loose font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" @click="props.setActivePage('About')" title="Retour">
                    <font-awesome-icon :icon="faArrowLeft" />
                </button>

                <button class="text-base md:text-xl md:leading-loose ml-5 font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" @click="props.setActivePage('Mes réalisations')">
                    Mes réalisations
                </button>
            </div>
        </div>
</template>

<script setup lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faArrowLeft, faCloud } from "@fortawesome/free-solid-svg-icons"
    import { library } from '@fortawesome/fontawesome-svg-core'

    import { 
        faAppStore, 
        faAppStoreIos, 
        faAws, 
        faCss3Alt, 
        faGit, 
        faGitAlt, 
        faGooglePlay, 
        faHtml5, 
        faJsSquare, 
        faLaravel, 
        faLinux, 
        faNodeJs, 
        faPhp, 
        faReact, 
        faSymfony, 
        faVuejs, 
        faDocker,
        faWordpressSimple 
    } from "@fortawesome/free-brands-svg-icons"

    library.add(faAppStore, 
        faAppStoreIos, 
        faAws, 
        faCss3Alt, 
        faGit, 
        faGitAlt, 
        faGooglePlay, 
        faHtml5, 
        faJsSquare, 
        faLaravel, 
        faLinux, 
        faNodeJs, 
        faPhp, 
        faReact, 
        faSymfony, 
        faVuejs, 
        faWordpressSimple, 
        faArrowLeft, 
        faDocker,
        faCloud
    )

    interface Props {
        activePage: string,
        setActivePage: (page: string) => void
    }

    const props = defineProps<Props>()
</script>
