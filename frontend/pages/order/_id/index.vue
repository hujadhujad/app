<template>
  <div class="WPage WPage--layout-inner">
    <div class="container">
      <div class="WOrder">
        <h2 class="WTitle">
          Order #{{ $route.params.id }}
        </h2>
        <WBox>
          <WOrderDetails :items="orderFeatures" />
          <WCheckbox>
            I agree with
            <nuxt-link to="/privacy-policy">
              Privacy Policy
            </nuxt-link> and
            <nuxt-link to="/terms-of-service">
              Terms of Service
            </nuxt-link>
          </WCheckbox>
        </WBox>
        <WBox color="purple">
          <div class="WOrder__header">
            <div class="WTitle">
              payment
            </div>
          </div>
          <WOrderPayment />
        </WBox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WPageOrderInner',
  data () {
    return {
      orderFeatures: [
        {
          title: 'unique custom web design',
          price: 399,
          description: 'Sed ante metus, venenatis vitae purus sed, convallis aliquam elit. Nulla eu vestibulum massa, et',
          articles: [
            {
              title: 'title'
            }
          ]
        },
        {
          title: 'unique branding',
          price: 199,
          description: 'Sed ante metus, venenatis vitae purus sed, convallis aliquam elit. Nulla eu vestibulum massa, et',
          articles: [
            {
              title: 'title'
            }
          ]
        },
        {
          title: 'custom content writing',
          price: 99,
          description: 'Sed ante metus, venenatis vitae purus sed, convallis aliquam elit. Nulla eu vestibulum massa, et',
          articles: [
            {
              title: 'title'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .WTitle {
    line-height: 28px;
    margin-bottom: 20px;
  }
  .WOrderDetails {
    margin-bottom: 20px;
  }
  .WOrder {
    max-width: 574px;
    margin: 0 auto;
    &__header {
      padding-bottom: 23.5px;
      margin-bottom: 22.5px;
      border-bottom: 1px solid rgba($color-white, 0.27);
      .WTitle {
        margin: 0;
      }
    }
  }
</style>
