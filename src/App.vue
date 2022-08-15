<template>
    <div class="container relative mx-auto px-10 md:px-15 py-8 md:py-0 text-white">
        <div class="absolute items-center pt-5 pb-2 hidden xl:flex border-b border-b-[#7e97a6]">
            <a href="#" class="menu-item" :class='activePage === "A propos" ? "menu-item-active" : ""' @click.prevent="setActivePage('A propos')">
                A propos
            </a>

            <a href="#" class="mx-5 menu-item" :class='activePage === "Mes services" ? "menu-item-active" : ""' @click.prevent="setActivePage('Mes services')">
                Services
            </a>

            <a href="#" class="menu-item" :class='activePage === "Mes réalisations" ? "menu-item-active" : ""' @click.prevent="setActivePage('Mes réalisations')">
                Réalisations
            </a>

            <a href="#" class="mx-5 menu-item" :class='activePage === "Mes projets" ? "menu-item-active" : ""' @click.prevent="setActivePage('Mes projets')">
                Projets
            </a>

            <a href="#" class="menu-item" :class='activePage === "Me contacter" ? "menu-item-active" : ""' @click.prevent="setActivePage('Me contacter')">
                Contact
            </a>

            <a href="#" class="menu-item ml-5" :class='activePage === "FAQ" ? "menu-item-active" : ""' @click.prevent="setActivePage('FAQ')">
                FAQ
            </a>
        </div>

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
    import { About, Services, Work, Projects, Contact, FAQ } from './pages'

    const activePage = ref<string>('A propos')
    const setActivePage = (page: string) => { activePage.value = page }
</script>
