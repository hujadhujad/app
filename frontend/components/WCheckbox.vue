<template>
  <label class="WCheckbox">
    <input type="checkbox" class="WCheckbox__input">
    <div class="WCheckbox__box">
      <svg class="WCheckbox__checkmark" xmlns="http://www.w3.org/2000/svg" width="17.6" height="13.4"><path data-name="Path 270" d="M5.6 10.6L1.4 6.4 0 7.8l5.6 5.6 12-12L16.2 0z" /></svg>
    </div>
    <div class="WCheckbox__content">
      <slot />
    </div>
  </label>
</template>

<script>
export default {
  name: 'WCheckbox'
}
</script>

<style lang="scss" scoped>
  .WCheckbox {
    display: flex;
    align-items: flex-start;
    font-family: $font-family-secondary;
    cursor: pointer;
    &__input {
      display: none;
      &:checked ~ .WCheckbox__box {
        .WCheckbox__checkmark {
          opacity: 1;
        }
      }
    }
    &__box {
      position: relative;
      height: 19px;
      width: 19px;
      flex-shrink: 0;
      border: 1px solid #dcdcdc;
      background-color: $color-white;
      border-radius: 5px;
      cursor: pointer;
      margin-top: -3px;
    }
    &__checkmark {
      position: absolute;
      top: -1px;
      right: -6px;
      opacity: 0;
      display: block;
      transition: opacity 0.3s ease;
      path {
        fill: $color-purple;
      }
    }
    &__content {
      padding-left: 10px;
      a {
        color: $color-purple;
        text-decoration: none;
      }
    }
  }
</style>
