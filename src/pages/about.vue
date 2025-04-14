<template>
  <div class="flex items-center min-h-screen">
    <div class="grid grid-cols-2 gap-3">
      <div class="col-span-6 md:col-auto my-auto order-2 md:order-1 text-center md:text-left">
        <p>
          <span class="text-base md:text-xl md:leading-loose">Hello 👋, I am</span>
          <br />
          <span class="text-lg md:text-3xl md:leading-loose font-semibold">Elisée K. N'GUESSAN,</span>
        </p>

        <h1 class="my-6 text-[#7e97a6] font-black text-3xl md:text-5xl">
          Freelance Web Developer.
        </h1>

        <p class="text-base md:text-xl md:leading-loose">
          Self-taught and passionate about software development, I have <span class="text-[#7e97a6] font-bold">6+ years
            experience</span> in <span class="text-[#7e97a6] font-bold">web application development</span>.
        </p>

        <div class="animate-slide-in flex items-center justify-center md:justify-start mt-10 xl:hidden">
          <button class="btn mr-2" @click="props.setActivePage('Services')">
            Services
          </button>

          <a href="https://docs.google.com/document/d/1LqnWpe-RlB_KMPcHvv75N10-IUuWMhUdW_2ARZrwyc8/edit?usp=sharing"
            class="btn" target="_blank">
            Resume
          </a>
        </div>
      </div>

      <div class="col-span-6 md:col-auto m-auto order-1 md:order-2">
        <img :src="avatar" alt="Avatar" loading="lazy" class="w-28 md:w-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import avatar from "../../img/avatar.png";

const props = defineProps<{ setActivePage: (page: string) => void }>();
</script>
