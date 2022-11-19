import { createApp } from "vue";
import App from "./App.vue";
import './main.css';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub, faLinkedin, faPaperPlane)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
