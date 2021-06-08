<template>
  <div class="WSectionArticles">
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
        <WArticles
          v-if="articles"
          :articles="articles"
        />
      </template>
      <template
        v-slot:bottom
      >
        <WButton
          route="/articles"
        >
          read more
        </WButton>
      </template>
    </WSection>
  </div>
</template>

<script>
import articlesQuery from '@/apollo/queries/articles/articles'
export default {
  name: 'WSectionArticles',
  props: {
    section: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      articles: []
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery
    }
  }
}
</script>

<style lang="scss" scoped>
  .WSectionArticles {
    position: relative;
    &:after {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 1062px 1640px;
      border-color: transparent transparent #E3E8F6 transparent;
      position: absolute;
      right: 0;
      bottom: 0;
      display: block;
      @media (max-width: $breakpoint-md) {
        border-width: 0 0 351px 426px;
      }
    }
  }
</style>
