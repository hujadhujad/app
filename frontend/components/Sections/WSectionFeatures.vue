<template>
  <div class="WSectionFeatures">
    <WSection
      :theme="section.appearance.theme"
      :size="section.appearance.size"
    >
      <template v-slot:header>
        <h3
          v-if="section.subtitle"
          class="WSubtitle text-blue"
        >
          {{ section.subtitle }}
        </h3>
        <h2
          v-if="section.headline"
          class="WTitle text-white"
        >
          {{ section.headline }}
        </h2>
        <p
          v-if="section.description"
          class="WParagraph"
        >
          {{ section.description }}
        </p>
      </template>
      <template v-slot:content>
        <div
          class="row"
        >
          <div
            v-for="(feature, featureIndex) in section.features"
            :key="featureIndex"
            class="col-md-6 col-xs-12"
          >
            <WCard
              :content="feature"
            />
          </div>
        </div>
      </template>
    </WSection>
  </div>
</template>

<script>
export default {
  name: 'WSectionFeatures',
  props: {
    section: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .row > div {
    margin: 15px 0;
    @media (max-width: $breakpoint-md) {
      margin: 0;
    }
  }
</style>
