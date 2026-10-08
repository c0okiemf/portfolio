<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import { useConfig } from '@/hooks/useConfig';
const projects = useConfig().projects;
</script>

<template>
  <div class="project-grid">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="project.url"
      :project="project"
      :index="index"
    />
  </div>
</template>
