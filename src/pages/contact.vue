<script setup lang="ts">
    const props = defineProps<{ setActivePage: (page: string) => void }>()
</script>

<template>
    <div class="flex flex-col items-start justify-center min-h-screen">
        <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-5xl xl:hidden">Contact</h1>

        <div class="flex flex-col md:flex-row md:justify-between w-full">
            <div class="flex items-center mb-5 md:mb-0">
                <a href="mailto:eliseekn@gmail.com" target="_blank" rel="nofollow noreferrer noopener" class="flex items-center">
                    <span class="text-3xl md:text-5xl"><font-awesome-icon :icon="['fa-solid', 'envelope']" /></span>
                    <p class="ml-2 text-2xl">Gmail</p>
                </a>
            </div>

            <div class="flex items-center mb-5 md:mb-0">
                <a href="https://linkedin.com/in/eliseekn" target="_blank" rel="nofollow noreferrer noopener" class="flex items-center">
                    <span class="text-3xl md:text-5xl"><font-awesome-icon :icon="['fa-brands', 'linkedin']" /></span>
                    <p class="ml-2 text-2xl">LinkedIn</p>
                </a>
            </div>

            <div class="flex items-center">
                <a href="https://github.com/eliseekn" target="_blank" rel="nofollow noreferrer noopener" class="flex items-center">
                    <span class="text-3xl md:text-5xl"><font-awesome-icon :icon="['fa-brands', 'github']" /></span>
                    <p class="ml-2 text-2xl">GitHub</p>
                </a>
            </div>
        </div>

        <div class="flex items-center justify-center md:justify-start mt-10 xl:hidden">
            <button class="btn" @click="props.setActivePage('Projects')" title="Back">
                <font-awesome-icon :icon="['fa-solid', 'arrow-left']" />
            </button>
        </div>
    </div>
</template>
