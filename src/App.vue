<script setup lang="ts">
import AnimatedCorner from '@/components/AnimatedCorner.vue';
import ContactSection from '@/components/templates/ContactSection.vue';
import HeroSection from '@/components/templates/HeroSection.vue';
import IntroSection from '@/components/templates/IntroSection.vue';
import PortfolioSection from '@/components/templates/PortfolioSection.vue';
import { ref } from 'vue';

const isTransitioningOut = ref<boolean>(false);

const onCornerButtonClick = () => {
  isTransitioningOut.value = true;
};
</script>

<template>
  <div :class="['outer-wrapper', isTransitioningOut && 'transitioning']">
    <div :class="['wrapper', isTransitioningOut && 'transitioning']">
      <AnimatedCorner @on-button-click="onCornerButtonClick" />
      <div class="page">
        <HeroSection />
        <IntroSection />
        <PortfolioSection />
        <ContactSection />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.outer-wrapper {
  width: 100%;
  background-color: $color-background-main;
  transition: background-color 0.5s;

  &.transitioning {
    background-color: black;
  }
}
.wrapper {
  width: 100%;
  opacity: 1;
  transition: opacity 1s;

  &.transitioning {
    opacity: 0;
  }
}

.page {
  max-width: $max-width;
  margin: 0 auto;
  position: relative;
}
</style>
