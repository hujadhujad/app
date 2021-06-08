<template>
  <div class="WPage WPage--layout-inner">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-9 offset-lg-2">
          <WBox v-if="articleComputed">
            <figure
              v-if="articleComputed.cover && coverComputed"
              class="WPageCover"
            >
              <img
                :src="coverComputed"
                alt="articleComputed.title"
              >
            </figure>
            <h2
              v-if="articleComputed.category"
              class="WSubtitle text-purple"
            >
              {{ articleComputed.category.title }}
            </h2>
            <h1 class="WHeading">
              {{ articleComputed.title }}
            </h1>
            <!-- eslint-disable-next-line -->
            <div class="WPageContent" v-html="$md.render(articleComputed.content)" />
          </WBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articleQuery from '@/apollo/queries/articles/article'
export default {
  name: 'WPageArticle',
  data () {
    return {
      api_url: process.env.strapiBaseUri,
      articles: []
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articleQuery,
      variables () {
        return { slug: this.$route.params.slug }
      }
    }
  },
  computed: {
    coverComputed () {
      return this.articleComputed.cover.formats.large
        ? this.api_url + this.articleComputed.cover.formats.large.url
        : this.api_url + this.articleComputed.cover.formats.medium.url
    },
    articleComputed () {
      return this.articles.slice().pop()
    }
  }
}
</script>

<style lang="scss">
  .WPageCover {
    margin-bottom: 32px;
    img {
      display: block;
      max-width: 100%;
      height: auto;
      margin: 0 auto;
    }
  }
  .WPageContent {
    font-family: $font-family-secondary;
    p {
      font-size: 24px;
      line-height: 32px;
      margin: 32px 0;
      @media (max-width: $breakpoint-md) {
        font-size: 18px;
        line-height: 24px;
        margin: 28px 0;
      }
    }
  }
</style>
