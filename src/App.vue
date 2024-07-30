<script setup lang="ts">
import HeroSection from '@/components/templates/HeroSection.vue';
import IntroSection from '@/components/templates/IntroSection.vue';
import PortfolioSection from '@/components/templates/PortfolioSection.vue';
import ContactSection from '@/components/templates/ContactSection.vue';
</script>

<template>
  <div class="wrapper">
    <HeroSection />
    <IntroSection />
    <PortfolioSection />
    <ContactSection />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  max-width: $max-width;
  margin: 0 auto;
}
</style>
