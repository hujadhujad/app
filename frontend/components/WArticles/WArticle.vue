<template>
  <article class="WArticle">
    <nuxt-link :to="articleUrl" class="WArticle__media">
      <figure class="WArticle__figure">
        <img
          :data-src="api_url + article.cover.formats.medium.url"
          :alt="article.title"
          loading="lazy"
          class="WArticle__img lazyload"
        >
        <WTag>
          {{ article.category.title }}
        </WTag>
      </figure>
    </nuxt-link>
    <div class="WArticle__content">
      <h2 class="WArticle__title">
        <nuxt-link
          :to="articleUrl"
        >
          {{ article.title }}
        </nuxt-link>
      </h2>
    </div>
  </article>
</template>

<script>
export default {
  name: 'WArticle',
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      api_url: process.env.strapiBaseUri
    }
  },
  computed: {
    articleUrl () {
      return `/articles/${this.article.slug}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .WArticle {
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-origin: center center;
    transform-style: preserve-3d;
    transform: scale(1);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility:    hidden;
    -ms-backface-visibility:     hidden;
    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      opacity: 0;
      border-radius: 5px;
      box-shadow: 0 5px 15px rgba($color-purple, 0.3);
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
    &:hover {
      transform: scale(1.015);
      &:after {
        opacity: 1;
      }
    }
    &__title {
      font-size: 20px;
      line-height: 30px;
      font-weight: $font-semibold;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility:    hidden;
      -ms-backface-visibility:     hidden;
      a {
        text-decoration: none;
        color: inherit;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility:    hidden;
        -ms-backface-visibility:     hidden;
      }
    }
    &__media {
      flex-shrink: 0;
      display: block;
    }
    &__figure {
      position: relative;
      padding-bottom: 75%;
      overflow: hidden;
      background-color: whitesmoke;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    &__img {
      filter: blur(5px);
      transition: filter 400ms;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      &.lazyloaded {
        filter: blur(0);
      }
    }
    &__content {
      flex: 1;
      padding: 29px 32px 24px 32px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      background-color: $color-white;
    }
    .WTag {
      position: absolute;
      z-index: 1;
      top: 22px;
      left: 22px;
    }
  }
</style>
