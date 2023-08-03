<script setup lang="ts">
import { ref } from 'vue'
import { Data } from '../data/work'
import { WorkDetails } from '../components'
import { WorkType } from '../interfaces'

const props = defineProps<{ setActivePage: (page: string) => void }>()

const activeItem = ref<number>(0)
const activeData = ref<WorkType[]>(Data[0])
const showModal = ref<boolean>(false)

const loadMoreWork = () => {
    activeItem.value = activeItem.value + 1
    if (activeItem.value > Data.length - 1) activeItem.value = 0
    activeData.value = Data[activeItem.value]
}

const onLoad = () => `<div class="inline-block w-8 h-8 border-4 rounded-full"></div>`
</script>

<template>
    <div class="flex flex-col items-start justify-center min-h-screen">
        <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-5xl xl:hidden">Mes réalisations</h1>
        
        <div class="grid grid-cols-3 gap-3">
            <div v-for="data in activeData" :key="data.id" class="relative col-span-6 lg:col-auto card">
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
            <button class="btn xl:hidden" @click="props.setActivePage('Mes services')" title="Retour">
                <font-awesome-icon :icon="['fa-solid', 'arrow-left']" />
            </button>

            <button class="btn mx-2 xl:ml-0" @click="loadMoreWork" title="Plus de réalisations">
                <span class="xl:hidden"><font-awesome-icon :icon="['fa-solid', 'plus']" /></span>
                <span class="hidden xl:block">Voir plus</span>
            </button>

            <button class="btn mr-2 xl:ml-0" :class='showModal ? "text-white bg-[#7e97a6]" : ""' @click="showModal = !showModal" :title='showModal ? "Masquer les détails" : "Afficher les détails"'>
                <font-awesome-icon :icon="showModal ? ['fa-solid' , 'eye'] : ['fa-solid' , 'eye-slash']" />
            </button>

            <button class="btn xl:hidden" @click="props.setActivePage('Mes projets')">
                Projets
            </button>
        </div>
    </div>
</template>

