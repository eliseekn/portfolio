<template>
    <div class="container relative mx-auto px-10 md:px-15 py-8 md:py-0 text-white">
        <Menu :activePage="activePage" :setActivePage="setActivePage" />
        <About v-if="activePage === 'A propos'" :setActivePage="setActivePage" />
        <Services v-if="activePage === 'Mes services'" :setActivePage="setActivePage" />
        <Work v-if="activePage === 'Mes réalisations'" :setActivePage="setActivePage" />
        <Projects v-if="activePage === 'Mes projets'" :setActivePage="setActivePage" />
        <Contact v-if="activePage === 'Me contacter'" :setActivePage="setActivePage" />
        <FAQ v-if="activePage === 'FAQ'" :setActivePage="setActivePage" />
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import {Menu} from "./components"
    import {
        About,
        Services,
        Work,
        Projects,
        Contact,
        FAQ
    } from './pages'

    const activePage = ref<string>('A propos')
    const setActivePage = (page: string) => { activePage.value = page }
</script>
