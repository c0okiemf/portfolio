<script setup lang="ts">
function moveGlass(event: PointerEvent) {
  if (
    event.pointerType !== 'mouse' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
    return;
  const element = event.currentTarget as HTMLElement;
  const bounds = element.getBoundingClientRect();
  element.style.setProperty(
    '--tilt-x',
    `${((event.clientY - bounds.top) / bounds.height - 0.5) * -12}deg`
  );
  element.style.setProperty(
    '--tilt-y',
    `${((event.clientX - bounds.left) / bounds.width - 0.5) * 12}deg`
  );
}
function resetGlass(event: PointerEvent) {
  const element = event.currentTarget as HTMLElement;
  element.style.setProperty('--tilt-x', '0deg');
  element.style.setProperty('--tilt-y', '0deg');
}
</script>

<template>
  <section id="home" class="hero container" aria-labelledby="hero-title">
    <div class="hero-copy">
      <span class="eyebrow"><span class="status-dot"></span> SENIOR FULLSTACK ENGINEER</span>
      <h1 id="hero-title">
        Hi, I'm Igor.<br />I build things<br />for the <span class="serif-word">web.</span>
      </h1>
      <p class="hero-description">
        Web apps, APIs, and the infrastructure behind them.<br class="desktop-break" />
        Mostly TypeScript, React, and Vue.
      </p>
      <div class="hero-actions">
        <a class="button button-primary" href="#projects"
          >View projects <v-icon name="bi-arrow-down"
        /></a>
        <a class="button button-glass glass" href="#contact"
          >Let's talk <v-icon name="bi-arrow-up-right"
        /></a>
      </div>
      <div class="hero-note">
        <span class="tiny-line"></span> The better part of a decade building software.
      </div>
    </div>
    <div class="hero-art" aria-hidden="true" @pointermove="moveGlass" @pointerleave="resetGlass">
      <div class="art-grid"></div>
      <div class="orb-glow"></div>
      <div class="sculpture">
        <div class="glass-orb">
          <div class="orb-ring ring-one"></div>
          <div class="orb-ring ring-two"></div>
          <div class="orb-ring ring-three"></div>
          <span class="orb-code">&lt;/&gt;</span>
        </div>
        <div class="floating-label label-top glass">
          <span class="mini-icon">✦</span> Frontend & backend
        </div>
        <div class="floating-label label-bottom stack-dock glass">
          <span class="stack-token">TS</span>
          <span class="stack-token">React/Vue</span>
          <span class="stack-token">PHP</span>
          <span class="stack-token">AWS</span>
        </div>
        <div class="floating-spark spark-one">✧</div>
        <div class="floating-spark spark-two">+</div>
      </div>
      <span class="art-caption">INTERFACES / APIS / INFRASTRUCTURE</span>
    </div>
    <div class="hero-bottom">
      <span><v-icon name="bi-geo-alt" /> Working remotely · Based in Moldova</span
      ><a href="#projects">PROJECTS BELOW <v-icon name="bi-arrow-down" /></a>
    </div>
  </section>
</template>
