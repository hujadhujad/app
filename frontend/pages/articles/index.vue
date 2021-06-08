<template>
  <div class="WPage WPage--layout-blog">
    <div class="container">
      <div class="WPage__header">
        <div class="WPage__title">
          blog
        </div>
        <WNav
          v-if="computedCategories && computedCategories.length > 0"
          :items="computedCategories"
          secondary
        />
      </div>
      <WArticles :articles="articles" />
    </div>
  </div>
</template>

<script>
import categoriesQuery from '@/apollo/queries/categories/categories'
import articlesQuery from '@/apollo/queries/articles/articles'
export default {
  name: 'WPageArticles',
  data () {
    return {
      categories: [],
      articles: []
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    },
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables () {
        return { category: this.$route.query.category }
      }
    }
  },
  computed: {
    computedCategories () {
      const categories = this.categories.map((category) => {
        return {
          title: category.title,
          slug: category.slug,
          id: category.id,
          route: {
            path: '/articles',
            query: {
              category: category.slug
            }
          }
        }
      })
      return [
        {
          title: 'all articles',
          route: '/articles'
        },
        ...categories
      ]
    }
  }
}
</script>
