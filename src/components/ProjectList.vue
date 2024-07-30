<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import { useConfig } from '@/hooks/useConfig';

const projects = useConfig().projects;
</script>

<template>
  <div id="projects">
    <ProjectCard v-for="project in projects" :key="project.url" :project="project" />
  </div>
</template>

<style scoped lang="scss">
#projects {
  margin-top: 240px;

  @media (max-width: $desktop-breakpoint) {
    margin-top: 160px;
  }

  @media (max-width: $tablet-breakpoint) {
    margin-top: 40px;
  }
}
</style>
