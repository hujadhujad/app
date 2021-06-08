<template>
  <div class="WPhotoGrid">
    <div class="WPhotoGrid__inner">
      <figure
        v-for="(photo, index) in photosComputed"
        :key="index"
        class="WPhotoGrid__item"
      >
        <img
          :data-src="api_url + photo.formats.medium.url"
          alt=""
          class="WPhotoGrid__image lazyload"
        >
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WPhotoGrid',
  props: {
    photos: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      api_url: process.env.strapiBaseUri
    }
  },
  computed: {
    photosComputed () {
      return this.photos.slice().splice(0, 6)
    }
  }
}
</script>

<style lang="scss" scoped>
  .WPhotoGrid {
    &__inner {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 14px 16px;
      @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 768px) {
        grid-template-columns: 1fr
      }
    }
    &__item,
    &__image {
      display: block;
      border-radius: 5px;
    }
    &__image {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
</style>
