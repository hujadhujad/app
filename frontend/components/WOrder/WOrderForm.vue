<template>
  <form class="WOrderForm">
    <WInput
      label="name / company"
      required
    />
    <WInput
      label="email"
      type="email"
      required
    />
    <WInput
      label="service / product name"
      required
    />
    <WInput
      label="business description"
      textarea
      required
    />
  </form>
</template>

<script>
export default {
  name: 'WOrderForm'
}
</script>

<style lang="scss" scoped>
  .WOrderForm {
    margin-bottom: 44px;
    @media (max-width: $breakpoint-md) {
      margin-top: 74px;
      margin-bottom: 34px;
    }
  }
</style>
