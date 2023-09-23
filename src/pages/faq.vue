<script setup lang="ts">
const props = defineProps<{ setActivePage: (page: string) => void }>();
</script>

<template>
  <div class="flex flex-col items-start justify-center min-h-screen">
    <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-5xl xl:hidden">FAQ</h1>

    <div class="grid grid-cols-2 gap-x-10">
      <div class="col-span-6 md:col-auto">
        <div class="mb-10">
          <h5 class="text-[#7e97a6] font-bold text-xl md:text-3xl">
            Quelles sont vos disponibilités ?
          </h5>

          <p class="text-base md:text-xl md:leading-loose mt-3">
            Je suis actuellement
            <span class="text-[#7e97a6] font-semibold">indisponible</span>
            jusqu'à fin
            <span class="text-[#7e97a6] font-semibold">Novembre 2023</span>.
            <!--Je suis actuellement
            <span class="text-[#7e97a6] font-semibold">disponible</span> pour
            des missions
            <span class="text-[#7e97a6] font-semibold">freelance</span> de
            développement d'application
            <span class="text-[#7e97a6] font-semibold">web</span> ou
            <span class="text-[#7e97a6] font-semibold">mobile</span>.-->
          </p>
        </div>

        <div class="mb-10">
          <h5 class="text-[#7e97a6] font-bold text-xl md:text-3xl">
            Quels sont vos tarifs ?
          </h5>

          <p class="text-base md:text-xl md:leading-loose mt-3">
            Mon <span class="text-[#7e97a6] font-semibold">TJM</span> (Tarif
            Journalier Moyen) est de
            <span class="text-[#7e97a6] font-semibold">30 000 F CFA</span>.
          </p>
        </div>
      </div>

      <div class="col-span-6 md:col-auto animate-slide-out">
        <div class="mb-10">
          <h5 class="text-[#7e97a6] font-bold text-xl md:text-3xl">
            Effectuez-vous des missions sur site ?
          </h5>

          <p class="text-base md:text-xl md:leading-loose mt-3">
            <span class="text-[#7e97a6] font-semibold">Non</span>, j'effectue
            mes missions à
            <span class="text-[#7e97a6] font-semibold">distance</span>.
          </p>
        </div>

        <div class="mb-10">
          <h5 class="text-[#7e97a6] font-bold text-xl md:text-3xl">
            Faites-vous de l'UI/UX design ?
          </h5>

          <p class="text-base md:text-xl md:leading-loose mt-3">
            <span class="text-[#7e97a6] font-semibold">Non</span>, toutes les
            ressources graphiques relatives au projet doivent m'être fournies au
            préalable.
          </p>
        </div>
      </div>

      <div class="mt-10 xl:hidden">
        <button class="btn" @click="props.setActivePage('Me contacter')" title="Retour">
          <font-awesome-icon :icon="['fa-solid', 'arrow-left']" />
        </button>
      </div>
    </div>
  </div>
</template>
