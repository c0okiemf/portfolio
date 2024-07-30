<script setup lang="ts">
import ProjectList from '@/components/ProjectList.vue';
import ProminentHeading from '@/components/ProminentHeading.vue';
import { useScrollEffect } from '@/hooks/useScrollEffect';

const { element, style } = useScrollEffect({
  scale: {
    min: 0.7,
    max: 1
  }
});
</script>

<template>
  <div class="portfolio">
    <div ref="element" :style="style">
      <ProminentHeading class="heading"> Recent work </ProminentHeading>
    </div>
    <ProjectList />
  </div>
</template>

<style scoped lang="scss">
.heading {
  margin: 240px auto 0 auto;
  width: fit-content;
  text-align: center;
  line-height: 0.8;

  @media (max-width: $desktop-breakpoint) {
    margin-top: 160px;
  }

  @media (max-width: $tablet-breakpoint) {
    margin-top: 40px;
    text-align: left;
    padding: 0 24px;
  }
}
</style>
