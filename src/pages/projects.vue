<template>
    <div class="flex flex-col items-start justify-center min-h-screen">
        <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-5xl xl:hidden">Mes projets</h1>
        
        <div class="grid grid-cols-3 gap-3">
            <div v-for="data in activeData" :key="data.id" :class="'relative col-span-6 lg:col-auto card p-4' + ' animate-fade-in-' + (data.id)">
                <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">{{ data.name }}</p>
                <p class="text-base md:text-xl md:leading-loose my-4">{{ data.desc }}</p>
                <a :href=data.url target="_blank" rel="nofollow noreferrer noopener" class="after:absolute after:inset-0"></a>
            </div>
        </div>

        <div class="flex items-center justify-center lg:justify-start mt-10 xl:hidden">
            <button class="btn" @click="props.setActivePage('Mes réalisations')" title="Retour">
                <font-awesome-icon :icon="['fa-solid', 'arrow-left']" />
            </button>

            <button v-if="Data.length > 1" class="btn" @click="loadMoreProjects" title="Plus de projets">
                <font-awesome-icon :icon="['fa-solid' , 'plus']" />
            </button>
            
            <button :class="Data.length === 1 ? 'ml-5 btn' : 'btn'" @click="props.setActivePage('Me contacter')">
                <span class="hidden md:block">Me contacter</span>
                <span class="block md:hidden">Contact</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { Data, Props } from '../data/projects'

    const props = defineProps<{ setActivePage: (page: string) => void }>()

    const activeItem = ref<number>(0)
    const activeData = ref<Props[]>(Data[0])

    const loadMoreProjects = () => {
        activeItem.value = activeItem.value + 1
        if (activeItem.value > Data.length - 1) activeItem.value = 0
        activeData.value = Data[activeItem.value]
    }
</script>
