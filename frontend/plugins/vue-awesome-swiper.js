import Vue from 'vue'
import { Swiper as SwiperClass, Navigation, Autoplay } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
require('swiper/swiper-bundle.css')

SwiperClass.use([Navigation, Autoplay])
const { directive } = getAwesomeSwiper(SwiperClass)

Vue.directive('swiper', directive)
