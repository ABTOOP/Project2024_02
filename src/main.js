import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')



document.querySelector(".side-toggler").addEventListener("click", () => {
    document.querySelector(".sideber").classList.toggle("open");

});

