<template>
  <section
    :class="computedClass"
  >
    <div :class="containerClass">
      <div class="WSection__content">
        <div
          v-if="$slots.header"
          class="WSection__header"
        >
          <slot name="header" />
        </div>
        <slot name="content" />
      </div>
      <div
        v-if="$slots.bottom"
        class="WSection__bottom"
      >
        <slot name="bottom" />
      </div>
    </div>
  </section>
</template>

<script>
import sectionMixin from '~/mixins/sectionMixin.js'
export default {
  name: 'WSection',
  mixins: [sectionMixin],
  props: {
    theme: {
      type: String,
      default: 'dark',
      validator: (val) => {
        return ['dark', 'light', 'grey'].includes(val)
      }
    },
    size: {
      type: String,
      default: 'default',
      validator: (val) => {
        return ['medium', 'default'].includes(val)
      }
    },
    full: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isSectionLight () {
      return this.theme === 'light' || this.theme === 'grey'
    },
    containerClass () {
      return [
        { container: this.size === 'default' || this.size === null },
        { 'container-sm': this.size === 'medium' }
      ]
    },
    computedClass () {
      return [
        'WSection',
        `WSection--${this.theme}`,
        `WSection--${this.size}`,
        {
          'WSection--full': this.full
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .WSection {
    padding: 175px 0;
    &--full {
      height: 100vh;
      padding: 0;
      .WSection__content,
      .container,
      .row {
        height: 100%;
      }
      @media (max-width: $breakpoint-md) {
        padding: 74px 0 70px 0;
        height: auto;
      }
    }
    &__header {
      margin-bottom: 50px;
      @media (max-width: $breakpoint-md) {
        margin-bottom: 23px;
      }
    }
    &__bottom {
      display: flex;
      justify-content: center;
      padding: 50px 0;
      @media (max-width: $breakpoint-md) {
        padding: 23px 0;
      }
    }
    &--dark {
      background-color: $color-dark-blue;
    }
    &--grey {
      background-color: $color-grey;
    }
    .row div[class^="col"] {
      // margin: 15px 0;
    }
    @media (max-width: $breakpoint-md) {
      padding: 74px 9px 70px 9px;
      .WTitle {
        margin-top: 12px;
      }
    }
  }
</style>
