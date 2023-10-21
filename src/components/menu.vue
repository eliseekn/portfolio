<script setup lang="ts">
const props = defineProps<{
    activePage: string,
    setActivePage: (page: string) => void
}>()
</script>

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

        <a href="#" class="menu-item" :class='props.activePage === "Contact" ? "menu-item-active" : ""' @click.prevent="props.setActivePage('Contact')">
            Contact
        </a>
    </div>
</template>

