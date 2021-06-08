<template>
  <div class="WOrderDetails">
    <div class="WOrderDetails__header">
      order information
    </div>
    <ul
      class="WOrderDetails__list"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="WOrderDetails__listItem"
      >
        <div class="WOrderDetails__title">
          {{ item.title }}
        </div>
        <div class="WOrderDetails__price">
          ${{ item.price }}
        </div>
      </li>
      <li v-if="!custom" class="WOrderDetails__total">
        <div class="WOrderDetails__title">
          total
        </div>
        <div class="WOrderDetails__price">
          ${{ totalPrice }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WOrderDetails',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    custom: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    totalPrice () {
      return this.items
        .filter(item => item.price)
        .reduce((sum, item) => item.price + sum, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
  .WOrderDetails {
    &__listItem,
    &__total {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      color: #3F3D4D;
      font-size: 15px;
      font-family: $font-family-secondary;
      line-height: 19px;
      font-weight: $font-semibold;
      & + & {
        margin-top: 10px;
      }
    }
    &__price {
      color: $color-black;
    }
    &__list {
      margin-top: 10px;
    }
    &__total {
      margin-top: 10px;
      padding-top: 6.5px;
      border-top: 1px solid rgba($color-black, 0.27);
      .WOrderDetails__price {
        color: $color-purple;
      }
    }
  }
</style>
