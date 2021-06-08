<template>
  <div class="WPage WPage--layout-inner">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-9 offset-lg-2">
          <WBox v-if="privacyPolicy">
            <!-- eslint-disable-next-line -->
            <div v-if="privacyPolicy.content" class="WPageContent" v-html="$md.render(privacyPolicy.content)" />
          </WBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import privacyQuery from '@/apollo/queries/privacy-policy/privacy'
export default {
  name: 'WPagePrivacy',
  data () {
    return {
      privacyPolicy: {}
    }
  },
  apollo: {
    privacyPolicy: {
      prefetch: true,
      query: privacyQuery
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
