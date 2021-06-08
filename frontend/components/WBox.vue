<template>
  <div :class="computedClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WBox',
  props: {
    color: {
      type: String,
      default: 'white',
      validator: (value) => {
        return ['white', 'purple'].includes(value)
      }
    }
  },
  computed: {
    computedClass () {
      return [
        'WBox',
        `WBox--${this.color}`
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .WBox {
    padding: 27px 34px 32px 34px;
    border-radius: 5px;
    width: 100%;
    & + & {
      margin-top: 47px;
    }
    &--white {
      background-color: $color-white;
    }
    &--purple {
      background-color: $color-purple;
      color: $color-white;
    }
    @media (max-width: $breakpoint-md) {
      padding: 26px 26px 38px 26px;
    }
  }
</style>
