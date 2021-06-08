<template>
  <div class="WPage WPage--layout-inner">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6 offset-sm-3">
          <div class="WPage__header">
            <h1 class="WHeadline">
              Contact us
            </h1>
          </div>
          <form class="WContactsForm">
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
              label="message"
              textarea
              required
            />
            <div class="WContactsForm__bottom">
              <WButton
                route="/"
              >
                send request
              </WButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WPageContacts'
}
</script>

<style lang="scss" scoped>
  .WContactsForm {
    &__bottom {
      display: flex;
      justify-content: flex-end;
      margin-top: 32px;
    }
  }
</style>
