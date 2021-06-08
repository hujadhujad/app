<template>
  <WBox
    class="WOrderDetails"
    color="purple"
  >
    <div class="WOrderDetails__header">
      <div class="WTitle">
        {{ details.title }}
      </div>
      <div
        v-if="details.price"
        class="WOrderDetails__price"
      >
        <span class="WOrderDetails__priceMark">
          $
        </span>
        {{ details.price }}
      </div>
    </div>
    <div
      v-if="details.custom"
      class="WOrderDetails__custom"
    >
      <WInput
        label="describe custom order"
        textarea
        required
        inverted
      />
      <div class="WOrderDetails__customInput">
        <WInput
          v-model="details.price"
          @keypress.native="isNumber($event)"
          label="budget"
          required
          inverted
        />
        <div class="WOrderDetails__customSign">
          $
        </div>
      </div>
    </div>
    <div v-if="!details.custom" class="WOrderDetails__content">
      <div class="WSubtitle">
        Included in your package
      </div>
      <ul class="WOrderDetails__list WList WList--horizontal">
        <li
          v-for="(feature, index) in details.features"
          :key="index"
          class="WList__item"
        >
          {{ feature.title }}
          <div class="WList__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path data-name="Path 288" d="M7.2 12.8h1.6v-1.6H7.2zM8 0a8 8 0 108 8 8 8 0 00-8-8zm0 14.4A6.4 6.4 0 1114.4 8 6.408 6.408 0 018 14.4zM8 3.2a3.2 3.2 0 00-3.2 3.2h1.6a1.6 1.6 0 013.2 0c0 1.6-2.4 1.4-2.4 4h1.6c0-1.8 2.4-2 2.4-4A3.2 3.2 0 008 3.2z" fill="#fff" opacity=".42" /></svg>
          </div>
        </li>
      </ul>
    </div>
  </WBox>
</template>

<script>
export default {
  name: 'WOrderDetails',
  props: {
    details: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    isNumber (evt) {
      // eslint-disable-next-line
      evt = (evt) ? evt : window.event
      const charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.WOrderDetails {
  margin-bottom: 32px;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 23.5px;
    border-bottom: 1px solid rgba($color-white, 0.27)
  }
  &__content {
    padding-top: 16.5px;
    .WSubtitle {
      margin-bottom: 20px;
    }
  }
  &__custom {
    margin-top: 16px;
    >>> .WInput__label {
      color: $color-white;
    }
  }
  &__customInput {
    display: flex;
    align-items: flex-end;
  }
  &__customSign {
    margin-bottom: 9px;
    margin-left: 6px;
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
    color: $color-sky-blue;
    vertical-align: top;
    margin-right: 4px;
    margin-top: 2px;
  }
  &__list {
    font-family: $font-family-secondary;
    font-size: 15px;
    font-weight: $font-semibold;
  }
}
</style>
