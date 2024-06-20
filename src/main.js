import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as MdIcons from "oh-vue-icons/icons/md";

import App from './App.vue'
import router from './router'
import './assets/scss/reset.scss'

// https://oh-vue-icons.js.org/ search for icons here
addIcons(...Object.values({ ...MdIcons }));

const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')
