<template>
    <div class="absolute items-center pt-5 pb-2 hidden xl:flex">
        <a href="#" class="menu-item" :class='props.activePage === "About" ? "menu-item-active" : ""' @click.prevent="props.setActivePage('About')">
            About
        </a>

        <a href="#" class="mx-3 menu-item" :class='props.activePage === "Services" ? "menu-item-active" : ""' @click.prevent="props.setActivePage('Services')">
            Services
        </a>

        <a href="#" class="menu-item" :class='props.activePage === "Work" ? "menu-item-active" : ""' @click.prevent="props.setActivePage('Work')">
            Work
        </a>

        <a href="#" class="menu-item mx-3" :class='props.activePage === "Projects" ? "menu-item-active" : ""' @click.prevent="props.setActivePage('Projects')">
            Projects
        </a>

        <a href="https://docs.google.com/document/d/1LqnWpe-RlB_KMPcHvv75N10-IUuWMhUdW_2ARZrwyc8/edit?usp=sharing" class="menu-item" target="_blank">
            Resume
        </a>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    activePage: string,
    setActivePage: (page: string) => void
}>()
</script>