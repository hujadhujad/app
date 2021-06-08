<template>
  <div :class="['WGraphic', { 'WGraphic--size-set': size }]" :style="size ? `width:${size}px;height:${size}px;` : null">
    <svg v-if="type === 'circle'" xmlns="http://www.w3.org/2000/svg" width="163.159" height="163.158"><g data-name="Group 1393"><path data-name="Path 258" d="M81.579 163.158a81.579 81.579 0 1181.58-81.58 81.672 81.672 0 01-81.58 81.58zm0-143.449a61.87 61.87 0 1061.87 61.869 61.94 61.94 0 00-61.87-61.869z" :fill="color" /></g></svg>
    <svg v-else-if="type === 'circle-small'" xmlns="http://www.w3.org/2000/svg" width="43.13" height="43.13"><g data-name="Group 1392"><path data-name="Path 259" d="M21.565 43.13A21.565 21.565 0 1143.13 21.565 21.59 21.59 0 0121.565 43.13zm0-33.562a12 12 0 1012 12 12.01 12.01 0 00-12-12z" :fill="color" /></g></svg>
    <svg v-else-if="type === 'cross'" xmlns="http://www.w3.org/2000/svg" width="76.677" height="76.677"><g data-name="Group 1394"><g data-name="Group 1389"><path data-name="Rectangle 30" :fill="color" d="M27.906 0h20.865v76.677H27.906z" /></g><g data-name="Group 1390"><path data-name="Rectangle 31" :fill="color" d="M0 27.906h76.677V48.77H0z" /></g></g></svg>
    <svg v-else-if="type === 'waves'" xmlns="http://www.w3.org/2000/svg" width="208.585" height="93.07"><g data-name="Group 1386"><g data-name="Group 1383"><path data-name="Path 256" d="M137.759 48.829l-33.47-33.257-33.463 33.257-33.47-33.257L7.786 44.96l-7.787-7.834L37.355 0l33.47 33.257L104.288 0l33.47 33.257L171.221 0l37.364 37.126-7.786 7.835-29.577-29.389z" :fill="color" /></g><g data-name="Group 1384"><path data-name="Path 257" d="M137.759 93.071l-33.47-33.257-33.463 33.257-33.47-33.257-29.57 29.388-7.787-7.834 37.356-37.126 33.47 33.257 33.463-33.257 33.47 33.257 33.463-33.257 37.364 37.125-7.786 7.835-29.577-29.388z" :fill="color" /></g></g></svg>
  </div>
</template>

<script>
export default {
  name: 'WGraphic',
  props: {
    type: {
      type: String,
      default: 'circle'
    },
    color: {
      type: String,
      default: '#2a1d5c'
    },
    size: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .WGraphic {
    position: absolute;
    z-index: 1;
    @media (max-width: $breakpoint-md) {
      display: none;
    }
    svg {
      display: block;
    }
  }
</style>
