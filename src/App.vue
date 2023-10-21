<script setup lang="ts">
    import { ref } from 'vue'
    import {Menu} from "./components"
    import {
        About,
        Services,
        Work,
        Contact,
        FAQ,
        Projects
    } from './pages'

    const activePage = ref<string>('About')
    const setActivePage = (page: string) => { activePage.value = page }
</script>

<template>
    <div class="container relative mx-auto px-10 md:px-15 py-8 md:py-0 text-white">
        <Menu :activePage="activePage" :setActivePage="setActivePage" />
        <About v-if="activePage === 'About'" :setActivePage="setActivePage" />
        <Services v-if="activePage === 'Services'" :setActivePage="setActivePage" />
        <Work v-if="activePage === 'Work'" :setActivePage="setActivePage" />
        <Projects v-if="activePage === 'Projects'" :setActivePage="setActivePage" />
        <Contact v-if="activePage === 'Contact'" :setActivePage="setActivePage" />
        <FAQ v-if="activePage === 'FAQ'" :setActivePage="setActivePage" />
    </div>
</template>

