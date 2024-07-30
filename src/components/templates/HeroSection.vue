<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import ProminentHeading from '@/components/ProminentHeading.vue';
</script>

<template>
  <div class="hero">
    <div class="hello">
      <ProminentHeading> I'm Igor </ProminentHeading>
      <ProminentHeading> Web eng </ProminentHeading>
    </div>
    <NavBar />
  </div>
</template>

<style scoped lang="scss">
.hero {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: $hero-padding-desktop-top $hero-padding-desktop-side 0 $hero-padding-desktop-side;

  @media (max-width: $desktop-breakpoint) {
    padding: $hero-padding-tablet-top $hero-padding-tablet-side 0 $hero-padding-tablet-side;
  }

  @media (max-width: $tablet-breakpoint) {
    flex-direction: column;
    align-items: start;
    gap: 32px;
    padding: $hero-padding-mobile-top $hero-padding-mobile-side 0 $hero-padding-mobile-side;
  }
}

.hello {
  line-height: 1;
}

.hello h1 {
  display: inline;
  vertical-align: baseline;
  font-size: 210px;
  vertical-align: top;

  @media (max-width: $desktop-breakpoint) {
    font-size: 168px;
  }

  @media (max-width: $tablet-breakpoint) {
    font-size: 72px;
  }
}
</style>
