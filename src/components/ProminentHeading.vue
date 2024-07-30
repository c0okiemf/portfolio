<template>
  <div>
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<style scoped lang="scss">
h1 {
  display: inline;
  vertical-align: baseline;
  font-size: 210px;
  vertical-align: top;
  letter-spacing: -7px;

  @media (max-width: $desktop-breakpoint) {
    font-size: 168px;
  }

  @media (max-width: $tablet-breakpoint) {
    font-size: 72px;
    letter-spacing: normal;
  }
}
</style>
