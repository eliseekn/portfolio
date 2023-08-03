<script setup lang="ts">
import { ref } from 'vue'
import { Data } from '../data/project'
import { ProjectType } from '../interfaces'

const props = defineProps<{ setActivePage: (page: string) => void }>()

const activeItem = ref<number>(0)
const activeData = ref<ProjectType[]>(Data[0])

const loadMoreProject = () => {
    activeItem.value = activeItem.value + 1
    if (activeItem.value > Data.length - 1) activeItem.value = 0
    activeData.value = Data[activeItem.value]
}
</script>

<template>
    <div class="flex flex-col items-start justify-center min-h-screen">
        <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-5xl xl:hidden">Mes projets</h1>
        
        <div class="grid grid-cols-2 gap-3">
            <div v-for="data in activeData" :key="data.id" class="p-4 relative col-span-6 lg:col-auto card">
                <div class="mb-3 md:mb-4 text-3xl md:text-4xl flex">
                    <span class="mr-2 md:mr-5"><font-awesome-icon :icon="['fa-brands' , 'github']" color="#7e97a6" /></span>
                    <h5 class="text-[#7e97a6] font-bold text-xl md:text-3xl">{{ data.alt }}</h5>
                </div>

                <p class="text-base md:text-xl md:leading-loose">{{ data.desc }}</p>
                <a :href=data.url class="after:absolute after:inset-0" target="blank" rel="nofollow noreferrer noopener"></a>
            </div>
        </div>

        <div class="flex items-center justify-center lg:justify-start mt-10">
            <button class="btn xl:hidden" @click="props.setActivePage('Mes réalisations')" title="Retour">
                <font-awesome-icon :icon="['fa-solid', 'arrow-left']" />
            </button>

            <button class="btn mx-2 xl:ml-0" @click="loadMoreProject" title="Plus de projets">
                <span class="xl:hidden"><font-awesome-icon :icon="['fa-solid', 'plus']" /></span>
                <span class="hidden xl:block">Voir plus</span>
            </button>

            <button class="btn xl:hidden" @click="props.setActivePage('Me contacter')">
                Contact
            </button>
        </div>
    </div>
</template>

