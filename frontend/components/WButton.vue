<template>
  <component
    :is="computedComponent"
    :class="computedClass"
    :to="route ? route : undefined"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'WButton',
  props: {
    route: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['default', 'outline'].includes(value)
      }
    },
    color: {
      type: String,
      default: 'purple',
      validator: (value) => {
        return ['purple', 'white', 'skyblue'].includes(value)
      }
    }
  },
  computed: {
    computedComponent () {
      return this.route ? 'nuxt-link' : 'button'
    },
    computedClass () {
      return [
        'WButton',
        `WButton--${this.color}`,
        `WButton--${this.mode}`
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  $button-height: 47px;
  .WButton {
    height: $button-height;
    border-radius: $button-height;
    font-size: 16px;
    font-weight: $font-semibold;
    min-width: 132px;
    padding: 0 36px;
    border: 0;
    outline: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &--outline {
      border: 3px solid $color-purple;
    }
    &--purple {
      color: $color-white;
      background-color: $color-purple;
      &:hover {
        background-color: darken($color-purple, 5%);
      }
      &:active {
        background-color: lighten($color-purple, 5%);
      }
      &.WButton--outline {
        color: $color-purple;
        background-color: $color-white;
        border-color: $color-purple;
        &:hover {
          background-color: $color-purple;
          color: $color-white;
        }
        &:active {
          background-color: lighten($color-purple, 5%);
        }
      }
    }
    &--white {
      color: $color-purple;
      background-color: $color-white;
      &:hover {
        background-color: darken($color-white, 10%);
      }
      &:active {
        background-color: lighten($color-white, 5%);
      }
    }
    &--skyblue {
      color: $color-white;
      background-color: $color-sky-blue;
      &:hover {
        background-color: darken($color-sky-blue, 5%);
      }
      &:active {
        background-color: lighten($color-sky-blue, 5%);
      }
    }
  }
</style>
