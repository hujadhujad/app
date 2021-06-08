import throttle from '~/utils/throttle'
const sectionMixin = {
  mounted () {
    window.addEventListener('scroll', throttle(this.handleSectionScroll, 100), true)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', throttle(this.handleSectionScroll, 100), true)
  },
  methods: {
    handleSectionActive () {
      this.$store.commit('setActiveSection', {
        isLight: this.isSectionLight || false
      })
    },
    handleSectionScroll () {
      const $navBarHeight = 70
      const elTop = this.$el.getBoundingClientRect().top - $navBarHeight
      const elBottom = this.$el.getBoundingClientRect().bottom - $navBarHeight
      if (elTop >= 0 || elBottom <= 0) {
        return
      } if (elTop <= 0 && elBottom >= 0) {
        this.handleSectionActive()
      }
    }
  }
}

export default sectionMixin
