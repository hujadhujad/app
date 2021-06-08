<template>
  <div class="WPage WPage--layout-inner align-items-center">
    <div class="container">
      <div class="WOrder">
        <WBox color="purple">
          <div class="WOrder__header">
            <div class="WTitle">
              credit/debit card
            </div>
          </div>
          <WOrderPaymentForm />
        </WBox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WPageOrderPayment'
}
</script>

<style lang="scss" scoped>
  .WOrder {
    max-width: 790px;
    margin: 0 auto;
    &__header {
      padding-bottom: 23.5px;
      margin-bottom: 22.5px;
      border-bottom: 1px solid rgba($color-white, 0.27);
    }
  }
</style>
