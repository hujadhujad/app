<template>
  <div :class="['WLayout', {'WLayout--zoomed': zoomLevel >= 1 && !isRetina }, {'WLayout--zoomed-retina': isRetina }]">
    <WNavbar
      :inverted="isNavbarInverted"
    >
      <template
        v-slot:left
      >
        <WLogo
          :inverted="isNavbarInverted"
        />
      </template>
      <template
        v-slot:right
      >
        <WNav
          :items="navigation"
          :inverted="isNavbarInverted"
        />
      </template>
    </WNavbar>
    <Nuxt />
    <WFooter />
  </div>
</template>

<script>
export default {
  name: 'WLayout',
  data () {
    return {
      isRetina: false,
      zoomLevel: 0,
      navigation: [
        {
          title: 'about',
          route: '/#about'
        },
        {
          title: 'our work',
          route: '/#work'
        },
        {
          title: 'blog',
          route: '/articles'
        },
        {
          title: 'faq',
          route: '/#faq'
        },
        {
          title: 'contact us',
          route: '/contacts'
        },
        {
          title: 'pricing',
          route: '/#pricing',
          button: true
        }
      ]
    }
  },
  computed: {
    currentActiveSection () {
      return this.$store.state.activeSection
    },
    isNavbarInverted () {
      return this.$route.path !== '/' || (this.currentActiveSection && this.currentActiveSection.isLight)
    }
  },
  methods: {
    detectZoomLevel () {
      const screenCssPixelRatio = (window.outerWidth - 8) / window.innerWidth
      if (screenCssPixelRatio >= 0.46 && screenCssPixelRatio <= 0.54) {
        this.zoomLevel = -4
      } else if (screenCssPixelRatio <= 0.64) {
        this.zoomLevel = -3
      } else if (screenCssPixelRatio <= 0.76) {
        this.zoomLevel = -2
      } else if (screenCssPixelRatio <= 0.92) {
        this.zoomLevel = -1
      } else if (screenCssPixelRatio <= 1.10) {
        this.zoomLevel = 0
      } else if (screenCssPixelRatio <= 1.32) {
        this.zoomLevel = 1
      } else if (screenCssPixelRatio <= 1.58) {
        this.zoomLevel = 2
      } else if (screenCssPixelRatio <= 1.90) {
        this.zoomLevel = 3
      } else if (screenCssPixelRatio <= 2.28) {
        this.zoomLevel = 4
      } else if (screenCssPixelRatio <= 2.70) {
        this.zoomLevel = 5
      } else {
        this.zoomLevel = null
      }
      console.log('[ZOOM LEVEL]:', this.zoomLevel)
    },
    isDeviceRetina () {
      return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
    }
  },
  mounted () {
    window.addEventListener('resize', this.detectZoomLevel, true)
    this.isRetina = this.isDeviceRetina() ?? this.zoomLevel < 0
    this.detectZoomLevel()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.detectZoomLevel, true)
  }
}
</script>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
