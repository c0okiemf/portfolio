<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import HeroSection from '@/components/templates/HeroSection.vue';
import IntroSection from '@/components/templates/IntroSection.vue';
import PortfolioSection from '@/components/templates/PortfolioSection.vue';
import ContactSection from '@/components/templates/ContactSection.vue';
import { onMounted, onUnmounted } from 'vue';

let observer: IntersectionObserver | undefined;
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  document.querySelectorAll('.reveal').forEach((element) => {
    element.classList.add('will-reveal');
    observer?.observe(element);
  });
});
onUnmounted(() => observer?.disconnect());
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <NavBar />
  <main id="main">
    <HeroSection />
    <PortfolioSection />
    <IntroSection />
    <ContactSection />
  </main>
</template>
