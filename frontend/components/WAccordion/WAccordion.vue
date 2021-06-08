<template>
  <div :class="computedClass">
    <div
      class="WAccordion__header"
      @click="active = !active"
    >
      <div class="WAccordion__headerContent">
        <div
          v-if="typeof (index) !== undefined"
          class="WAccordion__index"
        >
          {{ index + 1 }}.
        </div>
        <div class="WAccordion__title">
          <slot name="title" />
        </div>
      </div>
      <div class="WAccordion__button" />
    </div>
    <transition
      name="WAccordion"
    >
      <div
        v-show="active"
        class="WAccordion__content"
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'WAccordion',
  props: {
    index: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    computedClass () {
      return [
        'WAccordion',
        { 'WAccordion--open': this.active }
      ]
    }
  },
  methods: {
    enter (el) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.height = el.offsetHeight + 'px'
        })
      })
    },
    beforeLeave (el) {
      requestAnimationFrame(() => {
        if (!el.style.height) {
          el.style.height = `${el.offsetHeight}px`
        }
      })
    },
    leave (el) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.height = '0px'
        })
      })
    },
    afterLeave (el) {
      el.style.height = null
    }
  }
}
</script>

<style lang="scss" scoped>
  .WAccordion {
    &__content,
    &__header {
      background-color: $color-grey;
    }
    &__header,
    &__headerContent {
      display: flex;
      align-items: center;
    }
    &__header {
      padding: 16px 30px 18px 30px;
      border-radius: 15px;
      justify-content: space-between;
      cursor: pointer;
      transition: border-radius 150ms ease-out;
    }
    &__title {
      font-size: 16px;
      line-height: 25px;
    }
    &__content {
      padding: 18px 30px 26px 30px;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      transition: 150ms ease-out;
    }
    &__index {
      font-weight: $font-semibold;
      font-size: 16px;
      font-family: $font-family-secondary;
      color: $color-purple;
      line-height: 1;
      margin-top: 2px;
      margin-right: 20px;
    }
    &__button {
      height: 24px;
      width: 24px;
      position: relative;
      flex-shrink: 0;
      cursor: pointer;
      &:before {
        content: '';
        position: absolute;
        background-color: #959BAE;
        width: 14px;
        height: 2px;
        left: 50%;
        margin-left: -7px;
        top: 50%;
        margin-top: -1px;
        transition: all 0.2s ease-in-out;
        transform: rotate(-90deg);
      }
      &:after {
        content: '';
        position: absolute;
        background-color: #959BAE;
        width: 2px;
        height: 14px;
        left: 50%;
        margin-left: -1px;
        top: 50%;
        margin-top: -7px;
        transition: all 0.2s ease-in-out;
        transform: rotate(-90deg);
        opacity: 1;
      }
    }
    & + & {
      margin-top: 16px;
    }
    &--open {
      .WAccordion__button:after {
        transform: rotate(90deg);
      }
      .WAccordion__button:before {
        transform: rotate(90deg);
        opacity: 0;
      }
      .WAccordion__header {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        position: relative;
        &:after {
          content: '';
          left: 30px;
          right: 30px;
          top: 100%;
          background-color: $color-black;
          opacity: 0.12;
          height: 1px;
          position: absolute;
        }
      }
    }
  }
  .WAccordion-enter-active,
  .WAccordion-leave-active {
    transition: all 0.150s;
    max-height: 1080px;
  }
  .WAccordion-enter,
  .WAccordion-leave-to
  {
    opacity: 0;
    max-height: 0px;
  }
</style>
