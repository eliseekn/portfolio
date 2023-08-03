<script setup lang="ts">
import avatar from '../../img/avatar.png'

const props = defineProps<{ setActivePage: (page: string) => void }>()
</script>

<template>
    <div class="flex items-center min-h-screen">
        <div class="grid grid-cols-2 gap-3">
            <div class="col-span-6 md:col-auto my-auto order-2 md:order-1 text-center md:text-left">
                <p>
                    <span class="text-base md:text-xl md:leading-loose">Salut 👋, je suis</span> <br>
                    <span class="text-lg md:text-3xl md:leading-loose font-semibold">Elisée K. N'GUESSAN,</span>
                </p>

                <h1 class="my-6 text-[#7e97a6] uppercase font-black text-3xl md:text-5xl">
                    Développeur Freelance.
                </h1>

                <p class="text-base md:text-xl md:leading-loose">
                    Autodidacte et passionné de développement informatique, j'ai plus de 4 années d'expériences dans le développement d'applications sur mesure avec PHP et JavaScript.
                </p>

                <div class="animate-slide-in flex items-center justify-center md:justify-start mt-10 xl:hidden">
                    <button class="btn" @click="props.setActivePage('Mes services')">
                        Mes services
                    </button>
                </div>
            </div>

            <div class="col-span-6 md:col-auto m-auto order-1 md:order-2">
                <img :src=avatar alt="Avatar" loading="lazy" class="w-28 md:w-full" />
            </div>
        </div>
    </div>
</template>
