<template>
  <div class="WModal">
    <div
      class="WModal__bg"
      @click.self="$emit('close')"
    />
    <div class="WModal__inner">
      <WBox color="purple">
        <div
          class="WModal__close"
          @click="$emit('close')"
        >
          x
        </div>
        <slot />
      </WBox>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WModal',
  beforeMount () {
    document.body.style.overflow = 'hidden'
  },
  beforeDestroy () {
    document.body.style.overflow = 'visible'
  }
}
</script>

<style lang="scss" scoped>
  .WModal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: $index-top;
    &__inner {
      position: relative;
      z-index: 1;
      max-width: 600px;
      flex-basis: 600px;
    }
    &__close {
      position: absolute;
      top: 0;
      right: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      font-size: 12px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 5px;
      background: $color-purple;
      &:hover {
        background-color: lighten($color-purple, 3%);
      }
    }
    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: $color-grey;
      opacity: 0.6;
    }
  }
</style>
