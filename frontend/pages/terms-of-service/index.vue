<template>
  <div class="WPage WPage--layout-inner">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-9 offset-lg-2">
          <WBox v-if="termsOfService">
            <!-- eslint-disable-next-line -->
            <div v-if="termsOfService.content" class="WPageContent" v-html="$md.render(termsOfService.content)" />
          </WBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import termsQuery from '@/apollo/queries/terms-of-service/terms'
export default {
  name: 'WPagePrivacy',
  data () {
    return {
      termsOfService: {}
    }
  },
  apollo: {
    termsOfService: {
      prefetch: true,
      query: termsQuery
    }
  }
}
</script>

<style lang="scss">
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
