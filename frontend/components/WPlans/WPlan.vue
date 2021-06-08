<template>
  <div :class="computedClass">
    <div v-if="highlighted" class="WPlan__star">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path data-name="Path 261" d="M0 0h24v24H0z" fill="none" /><path data-name="Path 262" d="M11.99 2A10 10 0 1022 12 10 10 0 0011.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23z" fill="#fff" /></svg>
    </div>
    <div :class="computedHeaderClass">
      <h3 class="WPlan__title WTitle">
        {{ plan.title }}
      </h3>
      <div
        v-if="plan.price"
        class="WPlan__price"
      >
        <span class="WPlan__priceMark">
          $
        </span>
        {{ plan.price }}
      </div>
    </div>
    <p class="WPlan__text WParagraph">
      {{ plan.description }}
    </p>
    <ul class="WPlan__list WList">
      <li
        v-for="(feature, index) in plan.features"
        :key="index"
        class="WList__item"
      >
        {{ feature.title }}
      </li>
    </ul>
    <div class="WPlan__bottom">
      <WButton
        :route="`/order?plan=${plan.id}`"
        color="skyblue"
      >
        get started
      </WButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WPlan',
  props: {
    plan: {
      type: Object,
      default: () => {}
    },
    highlighted: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedHeaderClass () {
      return [
        'WPlan__header',
        { 'WPlan__header--center': !this.plan.price }
      ]
    },
    computedClass () {
      return [
        'WPlan',
        { 'WPlan--highlighted': this.highlighted }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.WPlan {
  border-radius: 15px;
  background: $color-grey;
  padding: 52px 24px 60px 24px;
  border-top: 15px solid $color-purple;
  &--highlighted {
    position: relative;
    background-color: $color-purple;
    color: $color-white;
    .WPlan__priceMark {
      color: $color-sky-blue;
    }
  }
  &__star {
    position: absolute;
    top: 9px;
    right: 24px;
    z-index: 1;
    svg {
      display: block;
    }
  }
  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 13px;
    min-height: 56px;
    &--center {
      text-align: center;
    }
  }
  &__title {
    line-height: 28px;
  }
  &__title,
  &__price {
    flex: 1;
  }
  &__price {
    flex-shrink: 0;
    font-family: $font-family-secondary;
    font-size: 35px;
    line-height: 1;
    font-weight: $font-semibold;
    padding-top: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
  &__priceMark {
    font-size: 16px;
    line-height: 1;
    color: $color-purple;
    vertical-align: top;
    margin-right: 4px;
    margin-top: 2px;
  }
  &__text {
    line-height: 20px;
    margin-bottom: 30px;
  }
  &__bottom {
    text-align: center;
    margin-top: 40px;
  }
  @media (max-width: $breakpoint-md) {
    margin: 14px 0;
    height: auto;
    .WPlan__title {
      font-size: 25px;
      line-height: 28px;
    }
    .WPlan__text {
      font-size: 16px;
      line-height: 20px;
    }
  }
}
</style>
