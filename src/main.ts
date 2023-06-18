import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faArrowLeft,
    faPlus,
    faEye,
    faEyeSlash,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import {
    faLaravel,
    faNodeJs,
    faPhp,
    faReact,
    faVuejs,
    faGithub,
    faLinkedin,
    faJsSquare,
} from "@fortawesome/free-brands-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
    faLaravel,
    faNodeJs,
    faPhp,
    faReact,
    faVuejs,
    faArrowLeft,
    faPlus,
    faEye,
    faEyeSlash,
    faEnvelope,
    faGithub,
    faLinkedin,
    faJsSquare,
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
