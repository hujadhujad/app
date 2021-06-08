<template>
  <div class="WOrderFeatures">
    <div class="row">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="col-xs-12 col-md-12 col-custom"
      >
        <WOrderFeature
          :index="index"
          :feature="feature"
          :active="feature.active"
          @selected="handleSelected"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WOrderFeatures',
  props: {
    features: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      selectedFeatures: []
    }
  },
  methods: {
    handleSelected (index, state) {
      if (state) {
        this.selectedFeatures.push(this.features[index])
      } else {
        this.selectedFeatures.splice(this.selectedFeatures.indexOf(this.features[index]), 1)
      }
      this.$emit('changed', this.selectedFeatures)
    }
  }
}
</script>

<style lang="scss" scoped>
  .WOrderFeatures {
    margin-bottom: 4px;
    .col-custom {
      margin-bottom: 30px;
      @media (min-width: 1430px) {
        flex: 0 0 33.3333%;
        max-width: 33.3333%;
      }
    }
  }
</style>
