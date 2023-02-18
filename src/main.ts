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
    faDatabase,
    faHeadset
} from "@fortawesome/free-solid-svg-icons"
import {
    faLaravel,
    faNode,
    faPhp,
    faReact,
    faSymfony,
    faVuejs,
    faGithub,
    faLinkedin,
    faJsSquare,
    faLinux,
    faAws,
    faWindows,
    faGitlab,
    faGithubSquare,
} from "@fortawesome/free-brands-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
    faLaravel,
    faNode,
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
    faJsSquare,
    faLinux,
    faAws,
    faWindows,
    faGitlab,
    faGithubSquare,
    faDatabase,
    faHeadset
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
