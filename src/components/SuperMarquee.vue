<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

defineProps<{
  text: string;
}>();

const marqueeRef = ref<HTMLDivElement | null>(null);
const movingElRef = ref<HTMLDivElement | null>(null);
let animationFrameId: number;

onMounted(() => {
  const marquee = marqueeRef.value;
  const textEl = movingElRef.value;

  if (marquee && textEl) {
    const textWidth = textEl.offsetWidth;
    marquee.style.setProperty('--text-width', `${textWidth}px`);
    marquee.style.setProperty('--marquee-width', `${marquee.clientWidth * 2}px`);
  }
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
});
</script>

<template>
  <div ref="marqueeRef" class="marquee">
    <div ref="movingElRef" class="movingEl">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.marquee {
  --text-width: 0;
  --marquee-width: 0;

  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
}

.movingEl {
  display: inline-block;
  padding-right: 100%;
  animation: marquee 50s linear infinite;
  user-select: none;
  color: $color-text-secondary;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(calc(var(--marquee-width) - var(--text-width)));
  }

  100% {
    transform: translateX(0);
  }
}
</style>
