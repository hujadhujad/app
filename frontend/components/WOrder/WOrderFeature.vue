<template>
  <div class="WOrderFeature">
    <div class="WOrderFeature__title WSubtitle">
      {{ feature.title }}
    </div>
    <div :class="['WOrderFeature__toggle', { 'active': active }]" @click="handleSelected">
      <svg
        v-if="!active"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        class="WIcon"
      >
        <path data-name="Path 274" d="M14 8H8v6H6V8H0V6h6V0h2v6h6z" fill="#9e9e9e" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="17.6"
        height="13.4"
        class="WIcon"
      >
        <path data-name="Path 270" d="M5.6 10.6L1.4 6.4 0 7.8l5.6 5.6 12-12L16.2 0z" fill="#fff" />
      </svg>
    </div>
    <div
      v-if="feature.price"
      class="WOrderFeature__price"
    >
      <span class="WOrderFeature__priceMark">
        $
      </span>
      {{ feature.price }}
    </div>
    <div
      v-if="feature.description"
      class="WOrderFeature__description WParagraph"
    >
      {{ feature.description }}
    </div>
    <div v-if="feature.articles && feature.articles.length > 0" class="WOrderFeature__bottom">
      read more
    </div>
  </div>
</template>

<script>
export default {
  name: 'WOrderFeature',
  props: {
    index: {
      type: [String, Number],
      default: 0
    },
    isActive: {
      type: Boolean,
      default: false
    },
    feature: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      active: false
    }
  },
  created () {
    if (this.isActive) {
      this.active = this.isActive
    }
  },
  methods: {
    handleSelected () {
      this.active = !this.active
      this.$emit('selected', this.index, this.active)
    }
  }
}
</script>

<style lang="scss" scoped>
  .WOrderFeature {
    background-color: $color-grey;
    border-radius: 5px;
    padding: 18px 19px 17px 19px;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    &__toggle {
      width: 26px;
      height: 26px;
      background-color: #D3D6DC;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 100%;
      position: absolute;
      top: 11px;
      right: 14px;
      svg {
        display: block;
      }
      &.active {
        background-color: #22D439;
      }
    }
    &__title {
      margin-bottom: 14px;
      flex-grow: 1;
      padding-right: 30px;
    }
    &__description {
      line-height: 20px;
      color: #5B5874;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-break: break-word;
    }
    &__price {
      flex-shrink: 0;
      font-size: 25px;
      line-height: 1;
      font-weight: $font-semibold;
      padding-top: 5px;
      color: $color-purple;
      display: flex;
      align-items: flex-start;
    }
    &__priceMark {
      font-size: 16px;
      line-height: 1;
      color: $color-black;
      vertical-align: top;
      margin-right: 4px;
      margin-top: 2px;
    }
    &__bottom {
      color: $color-sky-blue;
      font-family: $font-family-secondary;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
