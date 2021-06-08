<template>
  <div class="WPage WPage--layout-inner">
    <LazyWModal
      v-if="customFeatureModal"
      @close="customFeatureModal = false"
    >
      <div class="WOrder__custom">
        <WInput
          v-model="customFeatureDescription"
          label="custom feature description"
          textarea
          inverted
          required
        />
        <WButton
          color="skyblue"
          @click.native="addCustomFeature"
        >
          add feature
        </WButton>
      </div>
    </LazyWModal>
    <div class="container">
      <div class="WOrder">
        <div class="WOrder__content">
          <WOrderHeader
            :details="plan"
          />
          <div v-if="!plan.custom" class="WSubtitle align-items-center">
            <div class="WIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path data-name="Path 271" d="M0 0h24v24H0z" fill="none" /><path data-name="Path 272" d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12a6.99 6.99 0 014.01-6.32V3.52a8.988 8.988 0 000 16.96v-2.16A6.99 6.99 0 012 12zm13-9a9 9 0 109 9 9.014 9.014 0 00-9-9zm0 16a7 7 0 117-7 7.008 7.008 0 01-7 7z" fill="#6527ff" /></svg>
            </div>
            additional features
          </div>
          <WBox v-if="!plan.custom">
            <WOrderFeatures
              v-if="orderpage.features"
              :features="orderpage.features"
              @changed="handleFeaturesChanged"
            />
            <WButton
              mode="outline"
              @click.native="customFeatureModal = !customFeatureModal"
            >
              add a custom feature
            </WButton>
          </WBox>
        </div>
        <div class="WOrder__sidebar">
          <WOrderForm />
          <WBox>
            <WOrderDetails custom :items="[plan, ...selectedFeatures]" />
            <WCheckbox>
              I agree with
              <nuxt-link to="/privacy-policy">
                Privacy Policy
              </nuxt-link> and
              <nuxt-link to="/terms-of-service">
                Terms of Service
              </nuxt-link>
            </WCheckbox>
            <div class="WOrderBottom">
              <WButton
                route="/order/15946/success"
              >
                send request
              </WButton>
            </div>
          </WBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orderpageQuery from '@/apollo/queries/orderpage/orderpage'
import planQuery from '@/apollo/queries/plans/plan'
export default {
  name: 'WPageOrder',
  data () {
    return {
      customFeatureDescription: '',
      customFeatureModal: false,
      selectedFeatures: [],
      plan: {},
      orderpage: {}
    }
  },
  apollo: {
    orderpage: {
      prefetch: true,
      query: orderpageQuery
    },
    plan: {
      prefetch: true,
      query: planQuery,
      variables () {
        return { id: this.$route.query.plan }
      }
    }
  },
  methods: {
    handleFeaturesChanged (features) {
      this.selectedFeatures = features
    },
    addCustomFeature () {
      const customFeature = {
        title: 'custom feature',
        description: this.customFeatureDescription
      }
      this.orderpage.features.push(customFeature)
      this.selectedFeatures.push(customFeature)
      this.customFeatureDescription = ''
      this.customFeatureModal = !this.customFeatureModal
    }
  }
}
</script>

<style lang="scss" scoped>
  .WTitle {
    line-height: 28px;
  }
  .WSubtitle {
    margin-bottom: 14px;
    .WIcon {
      margin-right: 7px;
    }
  }
  .WOrderDetails {
    margin-bottom: 20px;
  }
  .WOrderBottom {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 34px;
  }
  .WOrder {
    display: flex;
    align-items: flex-start;
    &__content {
      flex: 1;
      padding-right: 90px;
    }
    &__sidebar {
      flex-basis: 500px;
      max-width: 600px;
      flex-shrink: 0;
    }
    &__custom {
      .WButton {
        margin-top: 16px;
      }
    }
    @media (max-width: $breakpoint-md) {
      display: block;
      .WOrder__content {
        padding: 0;
      }
      .WOrder__sidebar {
        max-width: 100%;
      }
    }
  }
</style>
