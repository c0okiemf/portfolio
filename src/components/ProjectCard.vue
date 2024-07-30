<script setup lang="ts">
import SuperButton from '@/components/SuperButton.vue';
import SuperTag from '@/components/SuperTag.vue';
import type { Project } from '@/hooks/useConfig';
import { useScrollEffect } from '@/hooks/useScrollEffect';

defineProps<{
  project: Project;
}>();

const { element, style } = useScrollEffect({
  opacity: { min: 0, max: 1 },
  translateY: { min: '0px', max: '50px' },
  threshold: 0.7
});
</script>

<template>
  <div class="project" ref="element" :style="style">
    <div class="content">
      <div class="tags">
        <SuperTag v-for="tag in project.tags" :key="tag">
          {{ tag }}
        </SuperTag>
      </div>
      <h2>{{ project.title }}</h2>
      <SuperButton type="inverted" :href="project.url"> View code </SuperButton>
    </div>
    <img v-if="project.image" :src="project.image" :alt="project.title" />
  </div>
</template>

<style scoped lang="scss">
.project {
  padding: 64px;
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: $desktop-breakpoint) {
    flex-direction: column;
    padding: 64px 40px;
  }

  @media (max-width: $tablet-breakpoint) {
    padding: 40px 24px;
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 3;
}

.tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

h2 {
  font-size: 80px;
  color: white;

  @media (max-width: $desktop-breakpoint) {
    font-size: 56px;
  }

  @media (max-width: $tablet-breakpoint) {
    font-size: 51px;
  }
}

img {
  width: 100%;
  max-height: 800px;
  object-fit: contain;
  flex: 2;
  display: block;
  overflow: auto;

  @media (max-width: $desktop-breakpoint) {
    max-height: 970px;
  }

  @media (max-width: $tablet-breakpoint) {
    max-height: 452px;
  }
}
</style>
