<script setup lang="ts">
defineProps<{
  href: string;
}>();
</script>

<template>
  <a :href="href" rel="noopener noreferrer" >
    <slot></slot>
  </a>
</template>

<style scoped lang="scss">
a {
  color: $color-text-secondary;
  cursor: pointer;
}
</style>
