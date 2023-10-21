<script setup lang="ts">
    const props = defineProps<{ setActivePage: (page: string) => void }>()
</script>

<template>
    <div class="flex flex-col items-start justify-center min-h-screen">
        <h1 class="mb-5 md:mb-10 font-bold text-3xl md:text-4xl xl:hidden">Services</h1>

        <div class="grid grid-cols-3 gap-3">
            <div class="animate-fade-in-1 col-span-6 lg:col-auto card p-4">
                <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">
                    Back-end Development
                </p>

                <div class="my-3 md:my-5 text-3xl md:text-4xl">
                    <span><font-awesome-icon :icon="['fa-brands' , 'php']" color="#7e97a6" /></span>
                    <span class="mx-4 md:mx-6"><font-awesome-icon :icon="['fa-brands' , 'laravel']" color="#7e97a6" /></span>
                    <span class="mr-4 md:mr-6"><font-awesome-icon :icon="['fa-brands' , 'node-js']" color="#7e97a6" /></span>
                    <span><font-awesome-icon :icon="['fa-solid' , 'database']" color="#7e97a6" /></span>
                </div>

                <p class="text-base md:text-xl md:leading-loose">
                    API RESTful development with PHP or Node.js.
                </p>
            </div>

            <div class="animate-fade-in-2 col-span-6 lg:col-auto card p-4">
                <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">
                    Front-end Development
                </p>

                <div class="my-3 md:my-5 text-3xl md:text-4xl">
                    <span><font-awesome-icon :icon="['fa-brands' , 'js-square']" color="#7e97a6" /></span>
                    <span class="mx-4 md:mx-6"><font-awesome-icon :icon="['fa-brands' , 'react']" color="#7e97a6" /></span>
                    <span><font-awesome-icon :icon="['fa-brands' , 'vuejs']" color="#7e97a6" /></span>
                    <span class="mx-4 md:mx-6"><font-awesome-icon :icon="['fa-brands' , 'bootstrap']" color="#7e97a6" /></span>
                    <span><font-awesome-icon :icon="['fa-brands' , 'sass']" color="#7e97a6" /></span>
                </div>

                <p class="text-base md:text-xl md:leading-loose">
                    Dynamic UI development with React.js or Vue.js.
                </p>
            </div>

            <div class="animate-fade-in-3 col-span-6 lg:col-auto card p-4">
                <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">
                    Mobile Development
                </p>

                <div class="my-3 md:my-5 text-3xl md:text-4xl">
                    <span class="mr-4 md:mr-6"><font-awesome-icon :icon="['fa-brands' , 'google-play']" color="#7e97a6" /></span>
                    <span><font-awesome-icon :icon="['fa-brands' , 'app-store-ios']" color="#7e97a6" /></span>
                </div>

                <p class="text-base md:text-xl md:leading-loose">
                    Cross-platform mobile application development with React Native.
                </p>
            </div>

            <div class="animate-fade-in-3 col-span-6 lg:col-auto card p-4">
                <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">
                    Full-stack Development
                </p>

                <div class="my-3 md:my-5 text-3xl md:text-4xl">
                    <span class="mr-4 md:mr-6"><font-awesome-icon :icon="['fa-brands' , 'laravel']" color="#7e97a6" /></span>
                    <span><font-awesome-icon :icon="['fa-brands' , 'react']" color="#7e97a6" /></span>
                </div>

                <p class="text-base md:text-xl md:leading-loose">
                    Full-stack web application development with Laravel or Next.js.
                </p>
            </div>

            <div class="animate-fade-in-3 col-span-6 lg:col-auto card p-4">
                <p class="text-[#7e97a6] font-bold text-xl md:text-3xl">
                    Consultancy
                </p>

                <div class="my-3 md:my-5 text-3xl md:text-4xl">
                    <span><font-awesome-icon :icon="['fa-solid' , 'headset']" color="#7e97a6" /></span>
                </div>

                <p class="text-base md:text-xl md:leading-loose">
                    I help you making technical decisions for your project implementations.
                </p>
            </div>
        </div>

        <div class="flex items-center justify-center md:justify-start mt-10 xl:hidden">
            <button class="btn" @click="props.setActivePage('About')" title="Back">
                <font-awesome-icon :icon="['fa-solid', 'arrow-left']" />
            </button>

            <button class="btn ml-2" @click="props.setActivePage('Work')">
                Work
            </button>
        </div>
    </div>
</template>

