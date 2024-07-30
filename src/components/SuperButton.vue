<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    type?: 'primary' | 'inverted' | 'secondary';
    isTransparent?: boolean;
    href?: string;
  }>(),
  {
    type: 'primary',
    isTransparent: false
  }
);
defineEmits<{
  (event: 'click'): void;
}>();

const classes = computed(() =>
  [
    props.type === 'inverted' && 'inverted',
    props.type === 'secondary' && 'secondary',
    props.isTransparent && 'transparent'
  ].filter(Boolean)
);
</script>

<template>
  <button @click="$emit('click')" :class="classes" v-if="!href">
    <slot></slot>
  </button>
  <a :href="href" rel="noopener noreferrer" target="_blank" :class="classes" v-if="href">
    <slot></slot>
  </a>
</template>

<style scoped lang="scss">
$opacity: 0.7;

button,
a {
  display: block;
  width: fit-content;
  color: white;
  font-size: 48px;
  padding: 12px 32px;
  border: none;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: $color-button-1;

  &.transparent {
    background-color: rgba($color-button-1, $opacity);
  }

  @media (max-width: $desktop-breakpoint) {
    font-size: 38px;
  }

  @media (max-width: $tablet-breakpoint) {
    font-size: 16px;
    padding: 16px 20px;
  }

  &:hover {
    color: $color-button-3;
  }

  &.inverted {
    background-color: white;
    color: $color-text-secondary;
    &.transparent {
      background-color: rgba($color-text-secondary, $opacity);
    }

    &:hover {
      background-color: $color-button-2;
      &.transparent {
        background-color: rgba($color-button-2, $opacity);
      }
    }
  }

  &.secondary {
    background-color: transparent;
    color: $color-text-secondary;
    border: 1px solid $color-text-secondary;

    &:hover {
      color: $color-text-secondary;
      border-color: transparent;
      background-color: $color-button-2;
      &.transparent {
        background-color: rgba($color-button-2, $opacity);
      }
    }
  }
}
</style>
