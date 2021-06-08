<template>
  <transition-group
    class="WArticles"
    name="WArticle"
    tag="div"
    mode="out-in"
    appear
  >
    <WArticle
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </transition-group>
</template>

<script>
export default {
  name: 'WArticles',
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
  .WArticles {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr
    }
    .WArticle {
      backface-visibility: hidden;
      transform-origin: 10% 50%;
      height: 100%;
      z-index: 1;
      &-move { transition: all 600ms ease-in-out 50ms }
      &-enter-active { transition: all 300ms ease-out }

      &-leave-active {
        transition: all 200ms ease-in;
        position: absolute;
        z-index: 0;
      }

      &-enter,
      &-leave-to { opacity: 0 }
      &-enter { transform: scale(0.9) }
    }
  }
</style>
