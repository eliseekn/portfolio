<template>
    <div class="flex flex-col items-start justify-center min-h-screen">
        <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-5xl">Mes projets</h1>
        
        <div class="grid grid-cols-3 gap-3">
            <div v-for="data in activeData" :key="data.id" :class="'relative col-span-6 lg:col-auto card p-4' + ' animate-fade-in-' + (data.id)">
                <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">{{ data.name }}</p>
                <p class="text-base md:text-xl md:leading-loose my-4">{{ data.desc }}</p>
                <a :href=data.url target="_blank" rel="nofollow noreferrer noopener" class="after:absolute after:inset-0"></a>
            </div>
        </div>

        <div class="flex items-center justify-center lg:justify-start mt-10">
            <button class="btn" @click="props.setActivePage('Mes réalisations')" title="Retour">
                <font-awesome-icon :icon="faArrowLeft" />
            </button>

            <button v-if="Data.length > 1" class="btn mx-5" @click="loadMoreProjects()" title="Plus de projets">
                <font-awesome-icon :icon="faSyncAlt" />
            </button>
            
            <button :class="Data.length == 1 ? 'ml-5 btn' : 'btn'" @click="props.setActivePage('Me contacter')">
                <span class="hidden md:block">Me contacter</span>
                <span class="block md:hidden">Contact</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { Data } from '../data/projects'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faArrowLeft, faSyncAlt } from "@fortawesome/free-solid-svg-icons"
    import { library } from '@fortawesome/fontawesome-svg-core'

    library.add(faArrowLeft, faSyncAlt)

    const props = defineProps<{ setActivePage: (page: string) => void }>()

    const activeItem = ref(0)
    const activeData = ref(Data[0])

    const loadMoreProjects = () => {
        activeItem.value = activeItem.value + 1
        if (activeItem.value > Data.length - 1) activeItem.value = 0
        activeData.value = Data[activeItem.value]
    }
</script>
