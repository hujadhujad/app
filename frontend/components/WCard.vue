<template>
  <div class="WCard">
    <h2 class="WCard__title WTitle text-white">
      {{ content.title }}
    </h2>
    <p class="WCard__text WParagraph text-white">
      {{ content.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'WCard',
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          title: 'web design',
          description: 'Sed ante metus, venenatis vitae purus sed, convallis aliquam elit. Nulla eu vestibulum massa, et suscipit ligula. Pellentesque orci lectus, aliquam non dignissim eget, semper ac mi. Donec id accumsan ipsum, eu congue leo.'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .WCard {
    padding: 34px 47px 21px 47px;
    background: $color-dark-purple;
    border-radius: 5px;
    height: 100%;
    &__title {
      @media (max-width: $breakpoint-md) {
        line-height: 28px;
      }
      &:after {
        display: block;
        content: '';
        height: 6px;
        background-color: $color-purple;
        width: 98px;
        margin-top: 10px;
      }
    }
    &__text {
      margin-top: 16px;
    }
    @media (max-width: $breakpoint-md) {
      padding: 42px 18.5px 37px 18.5px;
      margin: 11px 0;
      height: auto;
    }
  }
</style>
