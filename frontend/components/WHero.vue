<template>
  <header class="WHero">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-md-12">
          <h1
            v-if="content.headline"
            class="WHeadline text-white"
          >
            {{ content.headline }}
          </h1>
          <p
            v-if="content.paragraph"
            class="WParagraph text-white"
          >
            {{ content.paragraph }}
          </p>
          <WButton
            v-if="content.button_text"
            color="white"
          >
            {{ content.button_text }}
          </WButton>
        </div>
      </div>
    </div>
    <div class="WHero__scrollIndicator" @click="handleClick">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="55.407"><g data-name="noun_mouse scroll down_486805"><g data-name="Group 1363"><g data-name="Group 1362" fill="#fff" fill-rule="evenodd"><path data-name="Path 228" d="M2 12.007v17.986a10 10 0 1020 0V12.007a10 10 0 10-20 0zm-2 0a12 12 0 1124 0v17.986a12 12 0 11-24 0V12.007z" /><path data-name="Path 229" d="M11 7v4a1 1 0 002 0V7a1 1 0 00-2 0z" /><path data-name="Path 230" d="M12 52.993l5.5-5.5a1 1 0 011.414 1.414l-6.207 6.207a1 1 0 01-1.414 0L5.038 48.86a1 1 0 011.414-1.414z" /></g></g></g></svg>
    </div>
    <WGraphic
      v-parallax="0.2"
      id="gfx-hero-waves"
      type="waves"
      color="#FFFFFF"
    />
    <WGraphic
      v-parallax="0.3"
      id="gfx-hero-circle"
      type="circle"
    />
    <WGraphic
      v-parallax="0.25"
      id="gfx-hero-circle-small"
      type="circle-small"
      color="#6527FF"
    />
    <WGraphic
      v-parallax="0.4"
      id="gfx-hero-cross"
      type="cross"
    />
  </header>
</template>

<script>
import sectionMixin from '~/mixins/sectionMixin.js'
export default {
  name: 'WHero',
  mixins: [sectionMixin],
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          headline: 'Quisque suscipit quam sit amet enim vestibulum, et maximus velit sagittis',
          paragraph: 'Sed ante metus, venenatis vitae purus sed, convallis aliquam elit. Nulla eu vestibulum massa, et suscipit ligula. Pellentesque orci lectus, aliquam non dignissim eget, semper ac mi. Donec id accumsan ipsum, eu congue leo. Suspendisse dictum est est, et porta metus sagittis auctor. Sed commodo aliquam urna et laoreet. Proin venenatis facilisis tempus. Pellentesque at malesuada est. Morbi eget augue leo. Nullam vitae vestibulum lectus.',
          button_text: 'why us'
        }
      }
    }
  },
  methods: {
    handleClick () {
      const offset = this.$el.offsetHeight
      window.scrollTo({
        top: offset,
        behaviour: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .WHero {
    min-height: 100vh;
    background-color: $color-dark-blue;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 0 9px;
    .container {
      position: relative;
      z-index: 5;
    }
    &:before,
    &:after {
      content: '';
      position: absolute;
      border-radius: 100%;
    }
    &:before {
      top: -1204px;
      left: 729px;
      width: 1598px;
      height: 1598px;
      background-color: #00BBFF;
      box-shadow: 0px 0px 99px #278CFF80;
      opacity: 1;
      @media (max-width: $breakpoint-md) {
        width: 576px;
        height: 576px;
        left: auto;
        right: -362px;
        top: -182px;
      }
    }
    &:after {
      top: 394px;
      left: -249px;
      width: 1117px;
      height: 1117px;
      background: #6527FF 0% 0% no-repeat padding-box;
      box-shadow: 0px 0px 99px #2E27FF80;
      opacity: 1;
      @media (max-width: $breakpoint-md) {
        width: 444px;
        height: 444px;
        left: -106px;
        top: auto;
        bottom: -250px;
      }
    }
    &__scrollIndicator {
      position: absolute;
      bottom: 48.6px;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      animation: float 3s ease-in-out infinite;
      z-index: 10;
    }

    .WButton {
      margin-top: 20px;
    }
    .WParagraph {
      font-size: 20px;
      line-height: 25px;
      @media (max-width: $breakpoint-md) {
        font-size: 15px;
        line-height: 19px;
      }
    }
    @media (max-width: $breakpoint-md) {
      min-height: auto;
      padding: 140px 9px;
    }
  }

  #gfx-hero-waves {
    left: 4%;
    bottom: 13%;
  }
  #gfx-hero-circle {
    right: 20%;
    bottom: 16%;
  }
  #gfx-hero-circle-small {
    right: 5%;
    bottom: 9%;
  }
  #gfx-hero-cross {
    right: 10%;
    bottom: 40%;
    transform: rotate(45deg);
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
</style>
