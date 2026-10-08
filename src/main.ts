import './assets/main.scss';
import { createApp } from 'vue';
import App from './App.vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  BiCodeSlash,
  BiArrowUpRight,
  BiArrowDown,
  BiSun,
  BiMoon,
  BiClipboard,
  BiCheckLg,
  BiGeoAlt,
  BiHeart
} from 'oh-vue-icons/icons';

addIcons(
  BiCodeSlash,
  BiArrowUpRight,
  BiArrowDown,
  BiSun,
  BiMoon,
  BiClipboard,
  BiCheckLg,
  BiGeoAlt,
  BiHeart
);
createApp(App).component('v-icon', OhVueIcon).mount('#app');
