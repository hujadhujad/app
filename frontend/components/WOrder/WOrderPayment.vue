<template>
  <div class="WOrderPayment">
    <WButton route="/order/15946/payment">
      credit/debit card
    </WButton>
    <WButton>
      paypal
    </WButton>
  </div>
</template>

<script>
export default {
  name: 'WOrderPayment',
  props: {
    features: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
  .WOrderPayment {

  }
</style>
