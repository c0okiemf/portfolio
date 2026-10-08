<script setup lang="ts">
import ProjectList from '@/components/ProjectList.vue';
import { useConfig } from '@/hooks/useConfig';
const github = useConfig().social.find((link) => link.label === 'GitHub');
</script>

<template>
  <section id="projects" class="work-section container" aria-labelledby="work-title">
    <div class="section-heading reveal">
      <div>
        <span class="eyebrow">01 / PERSONAL PROJECTS</span>
        <h2 id="work-title">
          Things I've&nbsp;<br class="mobile-break" />
          <span class="muted-serif">built.</span>
        </h2>
      </div>
      <a
        v-if="github"
        class="text-link"
        :href="github.url"
        target="_blank"
        rel="noopener noreferrer"
        >More on GitHub <v-icon name="bi-arrow-up-right" /><span class="sr-only">
          (opens in a new tab)</span
        ></a
      >
    </div>
    <ProjectList />
  </section>
</template>
