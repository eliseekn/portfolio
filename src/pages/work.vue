<template>
    <div class="flex flex-col items-start justify-center min-h-screen">
        <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-5xl">Mes réalisations</h1>
        
        <div class="grid grid-cols-3 gap-3">
            <div v-for="data in activeData" :key="data.id" :class="'relative col-span-6 lg:col-auto card' + ' animate-fade-in-' + (data.id + 1)">
                <img :src=data.img :alt=data.alt loading="lazy" @load="onLoad" class="rounded-t-lg" />
                
                <div class="p-4">
                    <p class="text-[#7e97a6] font-bold text-base md:text-xl md:leading-loose">{{ data.skills }}</p>
                    <p class="text-base md:text-xl md:leading-loose">{{ data.desc }}</p>
                </div>
                
                <a :href=data.url class="after:absolute after:inset-0" target="blank" rel="nofollow noreferrer noopener"></a>
            
                <WorkDetails v-if="showModal" :data=data />
            </div>
        </div>

        <div class="flex items-center justify-center lg:justify-start mt-10">
            <button class="btn" @click="props.setActivePage('Mes services')" title="Retour">
                <font-awesome-icon :icon="faArrowLeft" />
            </button>

            <button class="ml-5 btn" @click="loadMoreWork()" title="Plus de réalisations">
                <font-awesome-icon :icon="faSyncAlt" />
            </button>

            <button class="mx-5 btn" :class='showModal ? "text-white bg-[#7e97a6]" : ""' @click="showModal = !showModal" :title='showModal ? "Masquer les détails" : "Afficher les détails"'>
                <font-awesome-icon :icon="showModal ? faEyeSlash : faEye" />
            </button>

            <button class="btn" @click="props.setActivePage('Mes projets')">
                Mes projets
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { Data } from '../data/work'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faArrowLeft, faSyncAlt, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { WorkDetails } from '../components'

    library.add(faArrowLeft, faSyncAlt, faEye)

    const props = defineProps<{ setActivePage: (page: string) => void }>()

    const activeItem = ref(0)
    const activeData = ref(Data[0])
    const showModal = ref(false)

    const loadMoreWork = () => {
        activeItem.value = activeItem.value + 1
        if (activeItem.value > Data.length - 1) activeItem.value = 0
        activeData.value = Data[activeItem.value]
    }

    const onLoad = () => { return `<div class="inline-block w-8 h-8 border-4 rounded-full"></div>` }
</script>
