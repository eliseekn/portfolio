import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faArrowLeft,
    faPlus,
    faEye,
    faEyeSlash,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons"
import {
    faLaravel,
    faNodeJs,
    faPhp,
    faReact,
    faSymfony,
    faVuejs,
    faGithub,
    faLinkedin,
    faAndroid,
    faAppStoreIos
} from "@fortawesome/free-brands-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
    faLaravel,
    faNodeJs,
    faPhp,
    faReact,
    faSymfony,
    faVuejs,
    faArrowLeft,
    faPlus,
    faEye,
    faEyeSlash,
    faEnvelope,
    faGithub,
    faLinkedin,
    faAndroid,
    faAppStoreIos
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
