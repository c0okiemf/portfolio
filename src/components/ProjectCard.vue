<script setup lang="ts">
import { computed } from 'vue';
import type { Project } from '@/hooks/useConfig';
const props = defineProps<{ project: Project; index: number }>();
const titleParts = computed(() => props.project.title.split(' - '));
</script>

<template>
  <a
    class="project-card glass reveal"
    :class="`project-${index}`"
    :href="project.url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="project-preview" :class="{ 'portfolio-preview': !project.image }">
      <span class="preview-label"
        >{{ String(index + 1).padStart(2, '0') }} /
        {{ project.tags[project.tags.length - 1] }}</span
      >
      <img
        v-if="project.image"
        :src="project.image"
        :alt="`${titleParts[0]} interface preview`"
        loading="lazy"
        decoding="async"
      />
      <div v-else class="portfolio-mini">
        <span>igor.</span>
        <p>I build things<br /><em>for the web.</em></p>
        <span class="mini-pill">Made with Vue ↗</span>
      </div>
      <span class="preview-open"><v-icon name="bi-arrow-up-right" /></span>
    </div>
    <div class="project-info">
      <div class="project-tags">
        <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
      </div>
      <h3>
        {{ titleParts[0].replace('...and this very portfolio', 'This very portfolio')
        }}<v-icon name="bi-arrow-up-right" />
      </h3>
      <p>{{ titleParts.slice(1).join(' - ') }}</p>
      <span class="sr-only">View source code (opens in a new tab)</span>
    </div>
  </a>
</template>
