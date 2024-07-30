<script setup lang="ts">
import { useConfig } from '@/hooks/useConfig';

const config = useConfig();
</script>

<template>
  <div class="intro">
    <div class="tagline">
      Crafting digital experiences by blending innovative solutions with elegant design.
    </div>
    <div class="description">
      I'm a fullstack web engineer specializing in crafting intuitive and efficient web solutions
      from a user-centered perspective. With over five years of experience, I excel in building and
      enhancing digital products and platforms. Currently based in Moldova.
    </div>
    <img v-if="config.avatar" class="avatar" :src="config.avatar" alt="My photo" />
  </div>
</template>

<style scoped lang="scss">
.intro {
  background: $color-background-secondary;
  border-radius: 88px 88px 0 0;
  padding: 128px 64px;
  margin-top: 192px;

  @media (max-width: $desktop-breakpoint) {
    padding: 80px 40px;
    margin-top: 150px;
  }

  @media (max-width: $tablet-breakpoint) {
    padding: 64px 24px;
    margin-top: 100px;
  }
}

.tagline {
  line-height: 1.2;
  font-size: 80px;
  color: $color-text-secondary;
  max-width: 60%;

  @media (max-width: $desktop-breakpoint) {
    font-size: 56px;
  }

  @media (max-width: $tablet-breakpoint) {
    font-size: 51px;
    max-width: none;
  }
}

.description {
  margin-top: 152px;
  max-width: 47%;
  margin-left: auto;
  color: $color-text-secondary;
  font-size: 32px;
  text-align: end;

  @media (max-width: $desktop-breakpoint) {
    margin-top: 128px;
    font-size: 26px;
  }

  @media (max-width: $tablet-breakpoint) {
    margin-top: 112px;
    font-size: 20px;
    max-width: none;
    text-align: start;
  }
}

.avatar {
  max-width: 300px;
  height: 400px;
  border-radius: 999px;
  margin: 88px auto 0 auto;
  display: block;
  object-fit: cover;
  object-position: center;
}
</style>
