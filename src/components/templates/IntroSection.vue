<script setup lang="ts">
import { useConfig } from '@/hooks/useConfig';
const config = useConfig();
const skills = [
  'TypeScript',
  'React',
  'Vue',
  'PHP',
  'Express',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Terraform'
];
</script>

<template>
  <section id="about" class="about-section container" aria-labelledby="about-title">
    <div class="about-photo reveal">
      <img
        v-if="config.avatar"
        :src="config.avatar"
        alt="Igor Piciughin"
        loading="lazy"
        width="400"
        height="480"
      />
      <div class="photo-caption glass"><span class="status-dot"></span> Igor Piciughin</div>
      <span class="photo-decoration" aria-hidden="true">✳</span>
    </div>
    <div class="about-copy reveal">
      <span class="eyebrow">02 / ABOUT</span>
      <h2 id="about-title">I like building<br /><span class="muted-serif">useful stuff.</span></h2>
      <p>
        I'm a senior fullstack engineer working full time, remotely from Moldova. I've spent the
        better part of a decade building web apps, APIs, and the systems that keep them running.
      </p>
      <p>
        My day job has covered messaging systems at Rdcom, booking software at Safara, and payment
        tools at XanPool. I build interfaces, work on the backend, and handle cloud infrastructure.
        I'm also used to taking over older code and making it easier to work with.
      </p>
      <p>
        The projects here are my personal work, built outside my day job: music websites, mobile
        chat, and a local AI tool for Beat Saber. I like having something of my own to work on.
      </p>
      <div class="about-principles">
        <span><v-icon name="bi-code-slash" /> Readable code</span
        ><span><v-icon name="bi-check-lg" /> Straightforward UI</span>
      </div>
      <div class="skill-list" aria-label="Technologies I work with">
        <span v-for="skill in skills" :key="skill">{{ skill }}</span>
      </div>
      <a
        class="text-link resume-link"
        href="/resume/Igor-Piciughin.pdf"
        download="Igor-Piciughin-CV.pdf"
      >
        Download CV (PDF) <v-icon name="bi-arrow-down" />
      </a>
    </div>
  </section>
</template>
