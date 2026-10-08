<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import { useConfig } from '@/hooks/useConfig';
const config = useConfig();
const copyState = ref<'idle' | 'copied' | 'error'>('idle');
let resetTimer: ReturnType<typeof setTimeout> | undefined;
async function copyEmail() {
  if (!config.email) return;
  try {
    await navigator.clipboard.writeText(config.email);
    copyState.value = 'copied';
  } catch {
    copyState.value = 'error';
  }
  clearTimeout(resetTimer);
  resetTimer = setTimeout(() => {
    copyState.value = 'idle';
  }, 3500);
}
onUnmounted(() => clearTimeout(resetTimer));
</script>

<template>
  <section id="contact" class="contact-section container" aria-labelledby="contact-title">
    <div class="contact-panel glass reveal">
      <span class="eyebrow">03 / CONTACT</span>
      <h2 id="contact-title">Got a project?<br /><span class="serif-word">Let's talk.</span></h2>
      <p>
        Send me an email about work, a project,<br class="desktop-break" />
        or something you're building.
      </p>
      <div v-if="config.email" class="contact-actions">
        <a class="button button-primary" :href="`mailto:${config.email}`"
          >Email me <v-icon name="bi-arrow-up-right"
        /></a>
        <button class="button button-glass glass" @click="copyEmail">
          <v-icon :name="copyState === 'copied' ? 'bi-check-lg' : 'bi-clipboard'" />{{
            copyState === 'copied' ? 'Copied!' : 'Copy email'
          }}
        </button>
      </div>
      <a v-if="config.email" class="email-link" :href="`mailto:${config.email}`">{{
        config.email
      }}</a>
      <p class="copy-status" role="status">
        {{
          copyState === 'error'
            ? 'Could not copy. You can select the email address above.'
            : copyState === 'copied'
              ? 'Email address copied to clipboard.'
              : ''
        }}
      </p>
      <span class="contact-orbit orbit-a" aria-hidden="true"></span
      ><span class="contact-orbit orbit-b" aria-hidden="true"></span>
    </div>
    <footer class="site-footer">
      <a class="wordmark" href="#home">igor<span class="wordmark-dot">.</span></a>
      <span class="footer-note"
        >Built with Vue & TypeScript.
        <span>© {{ new Date().getFullYear() }} Igor Piciughin</span></span
      >
      <div class="footer-links">
        <a
          v-for="link in config.social"
          :key="link.url"
          :href="link.url"
          :target="link.url.startsWith('https:') ? '_blank' : undefined"
          rel="noopener noreferrer"
          >{{ link.label }} <v-icon name="bi-arrow-up-right" /><span
            v-if="link.url.startsWith('https:')"
            class="sr-only"
          >
            (opens in a new tab)</span
          ></a
        ><a v-if="config.v1url" :href="config.v1url">V1 <v-icon name="bi-arrow-up-right" /></a>
      </div>
    </footer>
  </section>
</template>
