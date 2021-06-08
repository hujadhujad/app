<template>
  <div class="WSectionFaq">
    <WGraphic
      v-parallax="0.5"
      id="gfx-faq-waves"
      type="waves"
      color="#C9CDD9"
    />
    <WGraphic
      v-parallax="0.3"
      id="gfx-faq-circle"
      type="circle"
      color="#00BBFF"
    />
    <WGraphic
      v-parallax="0.34"
      id="gfx-faq-circle-small"
      type="circle-small"
      color="#6527FF"
    />
    <WSection
      :theme="section.appearance.theme"
      :size="section.appearance.size"
    >
      <template v-slot:content>
        <div
          class="row"
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
          <div
            class="col-xs-12 col-lg-6"
          >
            <WAccordionsList
              v-if="section.faq"
              :faq="section.faq"
            />
          </div>
        </div>
      </template>
    </WSection>
  </div>
</template>

<script>
export default {
  name: 'WSectionFaq',
  props: {
    section: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .WSectionFaq {
    position: relative;
    overflow: hidden;
    &:after {
      border-radius: 100%;
      content: '';
      bottom: -760px;
      left: -300px;
      width: 1117px;
      height: 1117px;
      background: #6527FF 0% 0% no-repeat padding-box;
      box-shadow: 0px 0px 99px #2E27FF80;
      opacity: 1;
      position: absolute;
      @media (max-width: $breakpoint-md) {
        width: 444px;
        height: 444px;
        left: -106px;
        top: auto;
        bottom: -250px;
      }
    }
    .WSection {
      position: relative;
      z-index: 1;
    }
  }
  @media (max-width: $breakpoint-md) {
    .WAccordionsList {
      margin-top: 78px;
    }
  }
  #gfx-faq-waves {
    right: -2%;
    top: 29%;
  }
  #gfx-faq-circle-small {
    right: 15%;
    top: 10%;
  }
  #gfx-faq-circle {
    left: 4%;
    bottom: 36%;
  }
</style>
