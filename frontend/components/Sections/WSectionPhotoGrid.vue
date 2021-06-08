<template>
  <div class="WSectionPhotoGrid">
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
        <WPhotoGrid
          v-if="section.photos && section.photos.length > 0"
          :photos="section.photos"
        />
      </template>
    </WSection>
  </div>
</template>

<script>
export default {
  name: 'WSectionPhotoGrid',
  props: {
    section: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
