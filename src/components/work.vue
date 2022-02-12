<template>
    <div className="flex flex-col items-start justify-center min-h-screen">
        <h1 className="mb-5 md:mb-10 font-bold text-3xl md:text-5xl">{{ activePage }}</h1>
        
        <div className="grid grid-cols-3 gap-3">
            <div v-for="(data, index) in activeData" :key="index" className="relative col-span-6 lg:col-auto bg-transparent border-2 border-[#7e97a6] rounded-lg hover:shadow hover:shadow-[#7e97a6] transition-all duration-500">
                <img :src=data.img :alt=data.alt loading="lazy" className="rounded-t-lg" />
                
                <div className="p-4">
                    <p className="text-[#7e97a6] font-bold text-base md:text-xl md:leading-loose">{{ data.skills }}</p>
                    <p className="text-base md:text-xl md:leading-loose">{{ data.desc }}</p>
                </div>
                
                <a :href=data.url target="_blank" rel="nofollow noreferrer noopener" className="after:absolute after:inset-0"></a>
            </div>
        </div>

        <div className="flex items-center justify-center lg:justify-start mt-10">
            <button className="text-base md:text-xl md:leading-loose font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" @click="props.setActivePage('Mes services')" title="Retour">
                <font-awesome-icon :icon="faArrowLeft" />
            </button>

            <button className="text-base md:text-xl md:leading-loose mx-5 font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" @click="loadMoreWork()" title="Plus de réalisations">
                <font-awesome-icon :icon="faSyncAlt" />
            </button>

            <button className="text-base md:text-xl md:leading-loose font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" @click="props.setActivePage('Mes projets')">
                Mes projets
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { Data } from '../data/work'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faArrowLeft, faSyncAlt } from "@fortawesome/free-solid-svg-icons"
    import { library } from '@fortawesome/fontawesome-svg-core'

    library.add(faArrowLeft, faSyncAlt)

    interface Props {
        activePage: string,
        setActivePage: (page: string) => void
    }

    const props = defineProps<Props>()

    const activeItem = ref(0)
    const activeData = ref(Data[0])

    const loadMoreWork = () => {
        activeItem.value = activeItem.value + 1

        if (activeItem.value >= Data.length - 1) activeItem.value = 0

        activeData.value = Data[activeItem.value]
    }
</script>
