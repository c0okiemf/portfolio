<script setup lang="ts">
import { useConfig } from '@/hooks/useConfig';

const emit = defineEmits<{
  (event: 'onButtonClick'): void;
}>();

const config = useConfig();

const onClick = () => {
  emit('onButtonClick');
  setTimeout(() => {
    if (config.v1url) {
      window.location.href = config.v1url;
    }
  }, 1000);
};
</script>

<template>
  <div v-if="config.v1url" class="corner">
    <button @click="onClick">See V1</button>
  </div>
</template>

<style scoped lang="scss">
.corner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  z-index: 1;

  @media (max-width: $desktop-breakpoint) {
    display: none;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-style: solid;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
    width: 0;
    border-color: transparent rgba(255, 255, 255, 1) rgba(255, 255, 255, 1) transparent;
    border-radius: 0px 0 20px 0;
    transition:
      border-width 0.2s,
      border-radius 0.2s;
    border-width: 30px;
  }
  &:hover:before {
    border-width: 50px;
    border-radius: 0px 0 30px 0;
  }

  button {
    position: absolute;
    top: 20px;
    left: 10px;
    z-index: -1;
    color: $color-text-main;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  &:hover button {
    z-index: 1;
  }
}
</style>
