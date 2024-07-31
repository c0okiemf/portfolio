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
  <button @click="onClick">
    <div v-if="config.v1url" class="corner">
      <div class="label">See V1</div>
    </div>
  </button>
</template>

<style scoped lang="scss">
button {
  background: transparent;
  border: none;
  cursor: pointer;
}

.corner {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: $desktop-breakpoint) {
    display: none;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-style: solid;
    width: 0;
    border-radius: 0px 0 20px 0;
    transition:
      border-width 0.2s,
      border-radius 0.2s;
    border-width: 30px;
  }
  &:before {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
    border-color: transparent $color-background-secondary $color-background-secondary transparent;
    z-index: 1;
  }
  &:after {
    border-color: black transparent transparent black;
    z-index: -1;
  }
  &:hover:before,
  &:hover:after {
    border-width: 50px;
    border-radius: 0px 0 30px 0;
  }
  .label {
    position: absolute;
    top: 20px;
    left: 10px;
    color: $color-text-main;
    white-space: nowrap;
  }
}
</style>
