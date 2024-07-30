<template>
  <div class="tag">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.tag {
  color: white;
  font-size: 48px;
  padding: 12px 32px;
  border: 1px solid $color-tag;
  width: fit-content;
  border-radius: 99px;

  @media (max-width: $desktop-breakpoint) {
    font-size: 38px;
  }

  @media (max-width: $tablet-breakpoint) {
    font-size: 16px;
    padding: 16px 20px;
  }
}
</style>
