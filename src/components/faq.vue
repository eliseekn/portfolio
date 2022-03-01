<template>
    <div class="flex flex-col items-start justify-center min-h-screen">
        <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-5xl">{{ activePage }}</h1>

        <div class="grid grid-cols-2 gap-x-10">
            <div class="col-span-6 md:col-auto">
                <div class="mb-10">
                    <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">Quelles sont vos disponibilités ?</p>

                    <p class="text-base md:text-xl md:leading-loose mt-3">
                        Je suis actuellement disponible pour des missions en freelance.
                    </p>
                </div>

                <div class="mb-10">
                    <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">Quels sont vos tarifs ?</p>
                    
                    <p class="text-base md:text-xl md:leading-loose mt-3">
                        La tarification dépend principalement du projet. Pour un site vitrine il faut prévoir au minimum <span class="text-[#7e97a6] font-semibold">300 000 F CFA</span>.
                    </p>
                </div>
            </div>

            <div class="col-span-6 md:col-auto animate-slide-out">
                <div class="mb-10">
                    <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">Effectuez-vous des missions sur site ?</p>
                    
                    <p class="text-base md:text-xl md:leading-loose mt-3">
                        Oui, en partie, à raison 2 jours par semaine maximum. 
                    </p>
                </div>

                <div class="mb-10">
                    <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">Faites-vous du design ?</p>
                    
                    <p class="text-base md:text-xl md:leading-loose mt-3">
                        Non, toutes les ressources graphiques doivent m'être fournies.
                    </p>
                </div>
            </div>

            <div class="mt-10">
                <button class="text-base md:text-xl md:leading-loose font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" @click="props.setActivePage('Me contacter')" title="Retour">
                    <font-awesome-icon :icon="faArrowLeft" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
    import { library } from '@fortawesome/fontawesome-svg-core'

    library.add(faArrowLeft)

    interface Props {
        activePage: string,
        setActivePage: (page: string) => void
    }

    const props = defineProps<Props>()
</script>
