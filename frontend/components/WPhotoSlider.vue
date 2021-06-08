<template>
  <div
    v-swiper:mySwiper="swiperOption"
    class="WPhotoSlider"
  >
    <div class="WPhotoSlider__inner swiper-wrapper">
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="WPhotoSlider__slide swiper-slide"
      >
        <img
          :data-src="api_url + photo.formats.medium.url"
          alt=""
          class="WPhotoSlider__image swiper-lazy"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper as SwiperClass, Autoplay, Lazy } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
require('swiper/swiper-bundle.css')
SwiperClass.use([Autoplay, Lazy])
const { directive } = getAwesomeSwiper(SwiperClass)
export default {
  name: 'WPhotoSlider',
  directives: {
    swiper: directive
  },
  props: {
    photos: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      api_url: process.env.strapiBaseUri,
      swiperOption: {
        loop: true,
        slidesPerView: 1.6,
        spaceBetween: 16,
        preloadImages: false,
        lazy: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .WPhotoSlider {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    height: 100%;
    &__inner,
    &__image,
    &__slide {
      border-radius: 15px;
    }
    &__inner {
      align-items: stretch;
    }
    &__slide {
      position: relative;
      background: $color-grey;
      height: 100%;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: $color-purple;
        opacity: 0.3;
        transition: opacity 0.3s ease-in-out;
        border-radius: 15px;
      }
      &.swiper-slide-active {
        &:before {
          opacity: 0;
        }
      }
    }
    &__image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
