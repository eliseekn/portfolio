<template>
    <div class="flex flex-col items-start justify-center min-h-screen">
        <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-5xl xl:hidden">Projects</h1>

        <div class="grid grid-cols-3 gap-3">
            <div v-for="data in activeData" :key="data.id" class="p-4 relative col-span-6 lg:col-auto card">
                <div class="mb-3 md:mb-4 text-3xl md:text-4xl flex">
                    <h5 class="text-[#7e97a6] font-bold text-xl md:text-2xl">{{ data.alt }}</h5>
                </div>

                <p class="text-base md:text-xl md:leading-loose">{{ data.desc }}</p>

                <Project :repo=data.repo :techno=data.techno />

                <a :href=data.url class="after:absolute after:inset-0" target="blank" rel="nofollow noreferrer noopener"></a>
            </div>
        </div>

        <div class="flex items-center justify-center lg:justify-start mt-10">
            <button class="btn xl:hidden" @click="props.setActivePage('Work')" title="Back">
                <font-awesome-icon :icon="['fa-solid', 'arrow-left']" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Data } from '../data/project'
import { ProjectType } from '../interfaces'
import Project from "../components/project.vue";

const props = defineProps<{ setActivePage: (page: string) => void }>()
const activeData = ref<ProjectType[]>(Data[0])
</script>