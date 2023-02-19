<script setup lang="ts">
import { Props } from '../data/work'

defineProps<{ data: Props }>()
</script>

<template>
    <div class="absolute animate-fade-in-1 card p-4 bg-[#222831] top-0 w-full h-full">
        <h5 class="text-[#7e97a6] font-bold text-xl md:text-3xl">{{ data.alt }}</h5>
        <p class="mt-3 text-justify text-sm md:text-xl">{{ data.fullDesc }}</p>
    </div>
</template>
