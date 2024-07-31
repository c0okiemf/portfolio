import './assets/main.scss';

import { createApp } from 'vue';
import App from './App.vue';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiCodeSlash } from 'oh-vue-icons/icons';

addIcons(BiCodeSlash);

const app = createApp(App);
app.component('v-icon', OhVueIcon);

app.mount('#app');

// Fix for bf cache preserving animation-related state
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    window.location.reload();
  }
});
