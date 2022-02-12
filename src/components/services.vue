<template>
    <div className="flex flex-col items-start justify-center min-h-screen">
            <h1 className="mb-5 md:mb-10 font-bold text-3xl md:text-5xl">{{ props.activePage }}</h1>

            <div className="grid grid-cols-3 gap-3">
                <div className="col-span-6 lg:col-auto bg-transparent border-2 border-[#7e97a6] rounded-lg p-4 hover:shadow hover:shadow-[#7e97a6] transition-all duration-500">
                    <p className="text-[#7e97a6] font-bold text-xl md:text-3xl">Développement Web</p>

                    <div className="my-3 md:my-7 text-xl md:text-5xl">
                        <span><font-awesome-icon :icon="faPhp" color="#7e97a6" /></span>
                        <span className="mx-4 md:mx-6"><font-awesome-icon :icon="faLaravel" color="#7e97a6" /></span>
                        <span><font-awesome-icon :icon="faSymfony" color="#7e97a6" /></span>
                        <span className="mx-4 md:mx-6"><font-awesome-icon :icon="faNodeJs" color="#7e97a6" /></span>
                        <span><font-awesome-icon :icon="faReact" color="#7e97a6" /></span>
                        <span className="mx-4 md:ml-6"><font-awesome-icon :icon="faVuejs" color="#7e97a6" /></span>
                    </div>

                    <p className="text-base md:text-xl md:leading-loose">
                        Je développe des applications Backend avec PHP et Node.js, et des applications Frontend avec React.js et Vue.js.
                    </p>
                </div>

                <div className="col-span-6 lg:col-auto bg-transparent border-2 border-[#7e97a6] rounded-lg p-4 hover:shadow hover:shadow-[#7e97a6] transition-all duration-500">
                    <p className="text-[#7e97a6] font-bold text-xl md:text-3xl">Développement Mobile</p>

                    <div className="my-3 md:my-7 text-xl md:text-5xl">
                        <span><font-awesome-icon :icon="faGooglePlay" color="#7e97a6" /></span>
                        <span className="mx-4 md:mx-6"><font-awesome-icon :icon="faAppStoreIos" color="#7e97a6" /></span>
                        <span><font-awesome-icon :icon="faReact" color="#7e97a6" /></span>
                    </div>

                    <p className="text-base md:text-xl md:leading-loose">
                        Je développe des applications mobile multi-plateformes (iOS et Android) avec React Native.
                    </p>
                </div>

                <div className="col-span-6 lg:col-auto bg-transparent border-2 border-[#7e97a6] rounded-lg p-4 hover:shadow hover:shadow-[#7e97a6] transition-all duration-500">
                    <p className="text-[#7e97a6] font-bold text-xl md:text-3xl">DevOps</p>

                    <div className="my-3 md:my-7 text-xl md:text-5xl">
                        <span><font-awesome-icon :icon="faCloud" color="#7e97a6" /></span>
                        <span className="mx-4 md:mx-6"><font-awesome-icon :icon="faAws" color="#7e97a6" /></span>
                        <span><font-awesome-icon :icon="faGit" color="#7e97a6" /></span>
                        <span className="mx-4 md:mx-6"><font-awesome-icon :icon="faLinux" color="#7e97a6" /></span>
                    </div>

                    <p className="text-base md:text-xl md:leading-loose">
                        Je mets en place des pipelines de déploiement et d'intégration continues sur des Serveurs Cloud.
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center md:justify-start mt-10">
                <button className="text-base md:text-xl md:leading-loose font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" @click="props.setActivePage('About')" title="Retour">
                    <font-awesome-icon :icon="faArrowLeft" />
                </button>

                <button className="text-base md:text-xl md:leading-loose ml-5 font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" @click="props.setActivePage('Mes réalisations')">
                    Mes réalisations
                </button>
            </div>
        </div>
</template>

<script setup lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faAppStore, faAppStoreIos, faAws, faCss3Alt, faGit, faGitAlt, faGooglePlay, faHtml5, faJsSquare, faLaravel, faLinux, faNodeJs, faPhp, faReact, faSymfony, faVuejs, faWordpressSimple } from "@fortawesome/free-brands-svg-icons"
    import { faArrowLeft, faChalkboardTeacher, faCloud } from "@fortawesome/free-solid-svg-icons"
    import { library } from '@fortawesome/fontawesome-svg-core'

    library.add(faAppStore, faAppStoreIos, faAws, faCss3Alt, faGit, faGitAlt, faGooglePlay, faHtml5, faJsSquare, faLaravel, faLinux, faNodeJs, faPhp, faReact, faSymfony, faVuejs, faWordpressSimple, faArrowLeft, faChalkboardTeacher, faCloud)

    interface Props {
        activePage: string,
        setActivePage: (page: string) => void
    }

    const props = defineProps<Props>()
</script>
