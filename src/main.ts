import './assets/main.scss';

import { createApp } from 'vue';
import App from './App.vue';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiCodeSlash } from 'oh-vue-icons/icons';

addIcons(BiCodeSlash);

const app = createApp(App);
app.component('v-icon', OhVueIcon);

app.mount('#app');
