<script setup lang="ts">
import SuperButton from '@/components/SuperButton.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const observedElement = ref(null);
const isInView = ref(true);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isInView.value = true;
    } else {
      isInView.value = false;
    }
  });
});

onMounted(() => {
  if (observedElement.value) {
    observer.observe(observedElement.value);
  }
});

onUnmounted(() => {
  if (observedElement.value) {
    observer.unobserve(observedElement.value);
  }
});
</script>

<template>
  <div class="nav" ref="observedElement">
    <SuperButton @click="() => scrollToSection('projects')"> Projects </SuperButton>
    <SuperButton @click="() => scrollToSection('contact')"> Contact </SuperButton>
  </div>
  <Transition>
    <div v-if="!isInView" class="fixed-container">
      <div class="fixed-button">
        <SuperButton @click="scrollToTop" :is-transparent="true"> Go to Top </SuperButton>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.nav {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 20px;
  gap: 16px;

  @media (max-width: $tablet-breakpoint) {
    flex-direction: row;
  }
}

.fixed-container {
  position: relative;
  position: fixed;
  max-width: $max-width;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 1000;
}

.fixed-button {
  position: absolute;
  top: $hero-padding-desktop-top;
  right: $hero-padding-desktop-side;
  pointer-events: all;

  @media (max-width: $desktop-breakpoint) {
    top: $hero-padding-tablet-top;
    right: $hero-padding-tablet-side;
  }

  @media (max-width: $tablet-breakpoint) {
    top: $hero-padding-mobile-top;
    right: $hero-padding-mobile-side;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
