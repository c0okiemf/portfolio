<script setup lang="ts">
import SimpleLink from '@/components/SimpleLink.vue';
import SuperButton from '@/components/SuperButton.vue';
import MarqueeText from '@/components/SuperMarquee.vue';
import { useConfig } from '@/hooks/useConfig';
import { useScrollEffect } from '@/hooks/useScrollEffect';

const config = useConfig();

const { element, style } = useScrollEffect({
  borderRadius: { min: '0px', max: '180px' }
});
</script>

<template>
  <div id="contact" ref="element" :style="style">
    <div class="main">
      <div class="cta">
        <h2>Get in touch</h2>
        <v-icon name="bi-code-slash" />
      </div>
      <div class="links">
        <SuperButton
          v-for="link in config.social"
          type="secondary"
          :href="link.url"
          :key="link.url"
        >
          {{ link.label }}
        </SuperButton>
      </div>
    </div>
    <MarqueeText v-if="config.email" :text="config.email" class="marquee">
      <SimpleLink :href="`mailto:${config.email}`">
        {{ config.email }}
      </SimpleLink>
    </MarqueeText>
  </div>
</template>

<style scoped lang="scss">
#contact {
  background: $color-background-secondary;
  padding: 64px;

  @media (max-width: $tablet-breakpoint) {
    padding: 24px;
  }
}

.main {
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.cta {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: $color-text-secondary;
    font-size: 80px;

    @media (max-width: $desktop-breakpoint) {
      font-size: 56px;
    }

    @media (max-width: $tablet-breakpoint) {
      font-size: 51px;
      width: 70%;
    }
  }

  svg {
    width: 100px;
    height: 100px;
    color: black;

    @media (max-width: $tablet-breakpoint) {
      display: none;
    }
  }
}

.links {
  display: flex;
  gap: 12px;

  @media (max-width: $tablet-breakpoint) {
    flex-direction: column;
  }
}

.marquee {
  font-size: 300px;
  color: $color-text-secondary;

  @media (max-width: $tablet-breakpoint) {
    font-size: 200px;
  }
}
</style>
