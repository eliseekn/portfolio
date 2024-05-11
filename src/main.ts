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
    faHeadset,
    faDatabase,
    faStar,
    faCodeFork,
    faDownLong
} from "@fortawesome/free-solid-svg-icons"
import {
    faLaravel,
    faNodeJs,
    faPhp,
    faReact,
    faGithub,
    faLinkedin,
    faJsSquare,
    faGooglePlay,
    faAppStoreIos,
    faBootstrap,
    faSass,
    faSymfony
} from "@fortawesome/free-brands-svg-icons"

import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
    faLaravel,
    faNodeJs,
    faPhp,
    faReact,
    faArrowLeft,
    faPlus,
    faEye,
    faEyeSlash,
    faEnvelope,
    faGithub,
    faLinkedin,
    faJsSquare,
    faGooglePlay,
    faAppStoreIos,
    faHeadset,
    faBootstrap,
    faDatabase,
    faSass,
    faStar,
    faCodeFork,
    faDownLong,
    faSymfony
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
