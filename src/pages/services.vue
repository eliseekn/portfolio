<template>
    <div class="flex flex-col items-start justify-center min-h-screen">
        <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-4xl xl:hidden">Mes services</h1>

        <div class="grid grid-cols-3 gap-3">
            <div class="animate-fade-in-1 col-span-6 lg:col-auto card p-4">
                <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">
                    Développement Back-end
                </p>

                <div class="my-3 md:my-5 text-3xl md:text-4xl">
                    <span><font-awesome-icon :icon="['fa-solid' , 'database']" color="#7e97a6" /></span>
                    <span class="mx-4 md:mx-6"><font-awesome-icon :icon="['fa-brands' , 'php']" color="#7e97a6" /></span>
                    <span><font-awesome-icon :icon="['fa-brands' , 'laravel']" color="#7e97a6" /></span>
                    <span class="ml-4 md:ml-6"><font-awesome-icon :icon="['fa-brands' , 'symfony']" color="#7e97a6" /></span>
                </div>

                <p class="text-base md:text-xl md:leading-loose">
                    Je développe des API RESTful robustes avec Laravel ou Symfony.
                </p>
            </div>

            <div class="animate-fade-in-2 col-span-6 lg:col-auto card p-4">
                <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">
                    Développement Front-end
                </p>

                <div class="my-3 md:my-5 text-3xl md:text-4xl">
                    <span><font-awesome-icon :icon="['fa-brands' , 'node']" color="#7e97a6" /></span>
                    <span class="mx-4 md:mx-6"><font-awesome-icon :icon="['fa-brands' , 'react']" color="#7e97a6" /></span>
                    <span><font-awesome-icon :icon="['fa-brands' , 'vuejs']" color="#7e97a6" /></span>
                </div>

                <p class="text-base md:text-xl md:leading-loose">
                    Je développe des interfaces utilisateur dynamiques avec Reacts.js ou Vue.js.
                </p>
            </div>

            <div class="animate-fade-in-3 col-span-6 lg:col-auto card p-4">
                <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">
                    Développement Full-stack
                </p>

                <div class="my-3 md:my-5 text-3xl md:text-4xl">
                    <span class="mr-4 md:mr-6"><font-awesome-icon :icon="['fa-brands' , 'laravel']" color="#7e97a6" /></span>
                    <span><font-awesome-icon :icon="['fa-brands' , 'js-square']" color="#7e97a6" /></span>
                </div>

                <p class="text-base md:text-xl md:leading-loose">
                    Je développe des applications web full-stack avec Laravel.
                </p>
            </div>

            <div class="animate-fade-in-3 col-span-6 lg:col-auto card p-4">
                <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">
                    DevOps
                </p>

                <div class="my-3 md:my-5 text-3xl md:text-4xl">
                    <span><font-awesome-icon :icon="['fa-brands' , 'github-square']" color="#7e97a6" /></span>
                    <span class="mx-4 md:mx-6"><font-awesome-icon :icon="['fa-brands' , 'gitlab']" color="#7e97a6" /></span>
                    <span><font-awesome-icon :icon="['fa-brands' , 'aws']" color="#7e97a6" /></span>
                    <span class="mx-4 md:mx-6"><font-awesome-icon :icon="['fa-brands' , 'linux']" color="#7e97a6" /></span>
                    <span><font-awesome-icon :icon="['fa-brands' , 'windows']" color="#7e97a6" /></span>
                </div>

                <p class="text-base md:text-xl md:leading-loose">
                    Je configure l'intégration et le déploiement continu sur les serveurs.
                </p>
            </div>

            <div class="animate-fade-in-3 col-span-6 lg:col-auto card p-4">
                <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">
                    Consultance
                </p>

                <div class="my-3 md:my-5 text-3xl md:text-4xl">
                    <span><font-awesome-icon :icon="['fa-solid' , 'headset']" color="#7e97a6" /></span>
                </div>

                <p class="text-base md:text-xl md:leading-loose">
                    Je vous accompagne dans les choix techniques pour vos projets.
                </p>
            </div>
        </div>

        <div class="flex items-center justify-center md:justify-start mt-10 xl:hidden">
            <button class="btn" @click="props.setActivePage('A propos')" title="Retour">
                <font-awesome-icon :icon="['fa-solid', 'arrow-left']" />
            </button>

            <button class="btn ml-5" @click="props.setActivePage('Mes réalisations')">
                Mes réalisations
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{ setActivePage: (page: string) => void }>()
</script>
