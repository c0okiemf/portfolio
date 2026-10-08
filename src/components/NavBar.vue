<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const activeSection = ref('home');
const dark = ref(document.documentElement.dataset.theme === 'dark');
const sections = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];
let scrollFrame = 0;
let sectionElements: HTMLElement[] = [];
function updateActiveSection() {
  scrollFrame = 0;
  const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
  activeSection.value = atBottom
    ? 'contact'
    : sectionElements
        .filter((element) => element.getBoundingClientRect().top <= window.innerHeight * 0.35)
        .pop()?.id || 'home';
}
function onScroll() {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateActiveSection);
}
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let followsSystem = true;
try {
  followsSystem = !localStorage.getItem('portfolio-theme');
} catch {
  /* Storage is optional. */
}

function applyTheme(value: boolean) {
  dark.value = value;
  document.documentElement.dataset.theme = value ? 'dark' : 'light';
}
function toggleTheme() {
  followsSystem = false;
  applyTheme(!dark.value);
  try {
    localStorage.setItem('portfolio-theme', dark.value ? 'dark' : 'light');
  } catch {
    /* Storage is optional. */
  }
}
function onSystemTheme(event: MediaQueryListEvent) {
  if (followsSystem) applyTheme(event.matches);
}
onMounted(() => {
  systemTheme.addEventListener('change', onSystemTheme);
  sectionElements = sections.flatMap(({ id }) => {
    const element = document.getElementById(id);
    return element ? [element] : [];
  });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateActiveSection();
});
onUnmounted(() => {
  cancelAnimationFrame(scrollFrame);
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onScroll);
  systemTheme.removeEventListener('change', onSystemTheme);
});
</script>

<template>
  <header class="site-header container">
    <a class="wordmark" href="#home" aria-label="Igor Piciughin, home"
      >igor<span class="wordmark-dot">.</span
      ><span class="wordmark-caption">fullstack engineer</span></a
    >
    <nav class="nav-glass glass" aria-label="Main navigation">
      <a
        v-for="section in sections"
        :key="section.id"
        :href="`#${section.id}`"
        :class="{ active: activeSection === section.id }"
        :aria-current="activeSection === section.id ? 'location' : undefined"
        >{{ section.label }}</a
      >
    </nav>
    <button
      class="theme-toggle glass icon-button"
      @click="toggleTheme"
      :aria-label="dark ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <v-icon :name="dark ? 'bi-sun' : 'bi-moon'" />
    </button>
  </header>
</template>
