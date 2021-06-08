<template>
  <div class="WTag WSubtitle">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WTag'
}
</script>

<style lang="scss" scoped>
  .WTag {
    display: inline-flex;
    align-items: center;
    min-width: 0;
    height: 33px;
    background-color: $color-purple;
    padding: 0 14px;
    line-height: 1;
    border-radius: 33px;
    text-decoration: none;
    text-transform: lowercase;
    color: $color-white;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility:    hidden;
    -ms-backface-visibility:     hidden;
  }
</style>
