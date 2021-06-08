<template>
  <div :class="computedClass">
    <div class="container WNavbar__inner">
      <div class="WNavbar__left">
        <slot name="left" />
      </div>
      <div class="WNavbar__right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WNavbar',
  props: {
    inverted: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedClass () {
      return [
        'WNavbar',
        { 'WNavbar--inverted': this.inverted }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .WNavbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 110px;
    z-index: $index-mid;
    transition: background-color 0.2s ease;
    @media (max-width: $breakpoint-md) {
      padding: 0 9px;
      height: 65px;
    }
    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
    &--inverted {
      background-color: $color-white;
    }
  }
</style>
