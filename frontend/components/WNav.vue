<template>
  <div :class="computedClass">
    <nav class="WNav__nav">
      <button
        class="WNav__burger"
        @click="isMobileOpen = !isMobileOpen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path data-name="Path 270" d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7z" fill="#fff" /></svg>
      </button>
      <template
        v-for="(navItem, index) in items"
      >
        <nuxt-link
          v-if="!navItem.button"
          :key="index"
          :to="navItem.route"
          :name="navItem.title"
          class="WNav__item"
          @click.native="isMobileOpen = false"
        >
          {{ navItem.title }}
        </nuxt-link>
        <LazyWButton
          v-else
          :key="index"
          :route="navItem.route"
          @click.native="isMobileOpen = false"
        >
          {{ navItem.title }}
        </LazyWButton>
      </template>
    </nav>
    <button
      class="WNav__burger"
      @click="isMobileOpen = !isMobileOpen"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="6"><g data-name="Group 1385"><g data-name="Group 1384"><g data-name="Group 1383"><path data-name="Path 256" d="M16 0H0v2h16zM0 6h16V4H0z" fill="#fff" /></g></g></g></svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'WNav',
  props: {
    inverted: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isMobileOpen: false
    }
  },
  computed: {
    computedClass () {
      return [
        'WNav',
        { 'WNav--default': !this.secondary },
        { 'WNav--secondary': this.secondary },
        { 'WNav--inverted': this.inverted },
        { 'WNav--mobileOpen': this.isMobileOpen }
      ]
    }
  },
  watch: {
    isMobileOpen () {
      if (this.isMobileOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'visible'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .WNav {
    &__nav {
      display: flex;
      align-items: center;
      .WNav__burger {
        position: absolute;
        top: 25px;
        right: 25px;
      }
    }
    &__item {
      font-size: 16px;
      color: $color-white;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      &:hover {
        box-shadow: 0 2px 0 0 $color-purple;
      }
      & + & {
        margin-left: 47px;
      }
      & + .WButton {
        margin-left: 47px;
      }
    }
    &__burger {
      display: none;
      border: 0;
      background: none;
      outline: 0;
      padding: 0;
      height: 24px;
      width: 24px;
      align-items: center;
      justify-content: center;
      svg {
        display: block;
      }
      @media (max-width: $breakpoint-md) {
        display: flex;
      }
    }
    &--mobileOpen {
      &.WNav--inverted .WNav__item {
        color: $color-white;
      }
      &.WNav--default .WNav__nav {
        display: block;
      }
    }
    &--default {
      .WNav__nav {
        @media (max-width: $breakpoint-md) {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: $color-dark-blue;
          padding: 87px 42px;
          .WNav__item {
            display: block;
            padding: 7px 0;
          }
          .WNav__item + .WNav__item {
            margin: 0;
          }
          .WNav__item + .WButton {
            margin: 0;
            margin-top: 24px;
          }
        }
      }
    }
    &--inverted {
      .WNav__burger svg path {
        fill: $color-purple;
      }
      .WNav__nav .WNav__burger svg path {
        fill: $color-white;
      }
      .WNav__item {
        color: $color-black;
      }
    }
    &--secondary {
      .WNav__burger {
        display: none;
      }
      .WNav__item {
        color: #575659;
        &:hover {
          color: $color-purple;
          box-shadow: none;
        }
        &.nuxt-link-exact-active {
          color: $color-purple;
        }
      }
      .WNav__item + .WNav__item {
        margin-left: 19px;
      }
      .WNav__item + .WButton {
        margin-left: 19px;
      }
    }
  }
</style>
