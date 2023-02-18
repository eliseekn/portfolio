<template>
    <div class="absolute items-center pt-5 pb-2 hidden xl:flex">
        <a href="#" class="menu-item" :class='props.activePage === "A propos" ? "menu-item-active" : ""' @click.prevent="props.setActivePage('A propos')">
            A propos
        </a>

        <a href="#" class="mx-3 menu-item" :class='props.activePage === "Mes services" ? "menu-item-active" : ""' @click.prevent="props.setActivePage('Mes services')">
            Services
        </a>

        <a href="#" class="menu-item mr-3" :class='props.activePage === "Mes réalisations" ? "menu-item-active" : ""' @click.prevent="props.setActivePage('Mes réalisations')">
            Réalisations
        </a>

        <!--            <a href="#" class="mx-3 menu-item" :class='props.activePage === "Mes projets" ? "menu-item-active" : ""' @click.prevent="props.setActivePage('Mes projets')">-->
        <!--                Projets-->
        <!--            </a>-->

        <a href="#" class="menu-item" :class='props.activePage === "Me contacter" ? "menu-item-active" : ""' @click.prevent="props.setActivePage('Me contacter')">
            Contact
        </a>

        <a href="#" class="menu-item ml-3" :class='props.activePage === "FAQ" ? "menu-item-active" : ""' @click.prevent="props.setActivePage('FAQ')">
            FAQ
        </a>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        activePage: string,
        setActivePage: (page: string) => void
    }>()
</script>
