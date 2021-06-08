<template>
  <div class="WSectionTextPhoto">
    <WSection
      :theme="section.appearance.theme"
      :size="section.appearance.size"
      full
    >
      <template v-slot:content>
        <div
          class="row align-items-center"
        >
          <div
            class="col-xs-12 col-lg-6"
          >
            <h3
              v-if="section.subtitle"
              class="WSubtitle text-purple"
            >
              {{ section.subtitle }}
            </h3>
            <h2
              v-if="section.headline"
              class="WTitle"
            >
              {{ section.headline }}
            </h2>
            <p
              v-if="section.description"
              class="WParagraph"
            >
              {{ section.description }}
            </p>
          </div>
        </div>
        <div
          class="WSectionTextPhoto__sliderWrap"
        >
          <WPhotoSlider
            v-if="section.photos"
            :photos="section.photos"
          />
        </div>
      </template>
    </WSection>
  </div>
</template>

<script>
export default {
  name: 'WSectionTextPhoto',
  props: {
    section: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .WSectionTextPhoto {
    position: relative;
    overflow: hidden;
    &:after {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 806px 814px;
      border-color: transparent transparent #E3E8F6 transparent;
      position: absolute;
      right: 0;
      bottom: 0;
      @media (max-width: $breakpoint-md) {
        border-width: 0 0 310px 483px;
      }
    }
    &__sliderWrap {
      position: absolute;
      z-index: 5;
      right: 0;
      width: 50%;
      height: 420px;
      top: 50%;
      transform: translateY(-50%);
      padding-left: 15px;
      @media (max-width: $breakpoint-md) {
        position: relative;
        transform: none;
        width: auto;
        padding-left: 0;
        margin-right: -24px;
        height: auto;
        margin-top: 50px;
      }
    }
  }
</style>
