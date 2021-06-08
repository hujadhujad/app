<template>
  <div class="WSectionPlans">
    <WGraphic
      v-parallax="0.4"
      id="gfx-plans-cross"
      type="cross"
      color="#C9CDD9"
    />
    <WGraphic
      v-parallax="0.35"
      id="gfx-plans-circle-small"
      type="circle-small"
      color="#C9CDD9"
    />
    <WGraphic
      v-parallax="0.2"
      id="gfx-plans-circle"
      type="circle"
      color="#6527FF"
    />
    <WGraphic
      v-parallax="0.45"
      id="gfx-plans-cross-2"
      type="cross"
      color="#C9CDD9"
    />
    <WGraphic
      v-parallax="0.3"
      id="gfx-plans-circle-small-2"
      type="circle-small"
      color="#00BBFF"
    />
    <WSection
      :theme="section.appearance.theme"
      :size="section.appearance.size"
    >
      <template v-slot:header>
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
      </template>
      <template v-slot:content>
        <WPlans
          :plans="section.plans"
        />
      </template>
    </WSection>
  </div>
</template>

<script>
export default {
  name: 'WSectionPlans',
  props: {
    section: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .WSectionPlans {
    position: relative;
    >>> .container-sm {
      position: relative;
      z-index: 1;
    }
    #gfx-plans-cross {
      left: 4%;
      top: 6%;
    }
    #gfx-plans-cross-2 {
      right: 4%;
      bottom: 35%;
      transform: rotate(45deg);
    }
    #gfx-plans-circle-small {
      left: 12%;
      top: 24%;
    }
    #gfx-plans-circle {
      right: 5%;
      bottom: 14%;
    }
    #gfx-plans-circle-small-2 {
      right: 3%;
      bottom: 5%;
    }
  }
</style>
