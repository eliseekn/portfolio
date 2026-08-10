<template>
  <div class="flex flex-col items-start justify-center min-h-screen">
    <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-5xl xl:hidden">Work</h1>

    <Swiper
      :modules="[FreeMode]"
      :slides-per-view="2.5"
      :space-between="20"
      :free-mode="true"
      :grab-cursor="true"
      Grid
      class="w-full pb-4"
    >
      <SwiperSlide
        v-for="data in workData"
        :key="data.url"
        class="w-[85vw] sm:w-72 md:w-80"
      >
        <div class="card">
          <img
            :src="data.img"
            :alt="data.alt"
            loading="lazy"
            class="rounded-t-lg h-100"
          />

          <div class="p-4">
            <p class="text-[#7e97a6] font-bold text-[18px]">
              {{ data.skills }}
            </p>
            <p class="text-base md:text-xl md:leading-loose">{{ data.desc }}</p>
          </div>

          <a
            :href="data.url"
            class="after:absolute after:inset-0"
            target="blank"
            rel="nofollow noreferrer noopener"
          ></a>
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="flex items-center gap-2 justify-center lg:justify-start mt-10">
      <button
        class="btn xl:hidden"
        @click="props.setActivePage('Services')"
        title="Back"
      >
        <font-awesome-icon :icon="['fa-solid', 'arrow-left']" />
      </button>

      <button class="btn xl:hidden" @click="props.setActivePage('Projects')">
        Projects
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Data } from "../data/work";
import { WorkType } from "../interfaces";

const props = defineProps<{ setActivePage: (page: string) => void }>();

const workData: WorkType[] = Data;
</script>
