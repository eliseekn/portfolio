<script setup lang="ts">
    import {ref} from "vue";

    const props = defineProps<{
        repo: string,
        techno: string
    }>()

    const project = ref({
        stars: 0,
        total_downloads: 0,
        forks: 0
    })

    if (props.techno === 'PHP') {
        fetch(`https://packagist.org/packages/eliseekn/${props.repo}.json`)
            .then(res => res.json())
            .then(data => project.value.total_downloads = data.package.downloads.total)
    } else {
        fetch(`https://api.npmjs.org/downloads/point/last-week/${props.repo}`)
            .then(res => res.json())
            .then(data => project.value.total_downloads = data.downloads)
    }

    fetch(`https://api.github.com/repos/eliseekn/${props.repo}`)
        .then(res => res.json())
        .then(data => {
            project.value.stars = data.stargazers_count
            project.value.forks = data.forks_count
        })
</script>

<template>
    <div class="flex flex-row items-center mt-3">
        <span>
            <span class="mr-1 text-xl"><font-awesome-icon :icon="['fa-solid' , 'star']" color="#7e97a6" /></span> {{ project.stars }}
        </span>
        <span class="mx-5">
            <span class="mr-1 text-xl"><font-awesome-icon :icon="['fa-solid' , 'down-long']" color="#7e97a6" /></span> {{ project.total_downloads }}
        </span>
        <span>
            <span class="mr-1 text-xl"><font-awesome-icon :icon="['fa-solid' , 'code-fork']" color="#7e97a6" /></span> {{ project.forks }}
        </span>
    </div>
</template>
