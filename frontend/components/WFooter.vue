<template>
  <footer
    class="WFooter"
  >
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-4">
          <WLogo />
          <p class="WParagraph">
            Sed ante metus, venenatis vitae purus sed, convallis aliquam elit. Nulla eu vestibulum massa, et suscipit ligula.
          </p>
        </div>
        <div class="col-xs-12 col-md-2 offset-md-1">
          <h4 class="WSubtitle">
            information
          </h4>
          <nav class="WFooter__nav">
            <nuxt-link
              to="/terms-of-service"
              class="WFooter__navItem"
            >
              Terms of service
            </nuxt-link>
            <nuxt-link
              to="/privacy-policy"
              class="WFooter__navItem"
            >
              Privacy
            </nuxt-link>
          </nav>
        </div>
        <div class="col-xs-12 col-md-4 offset-md-1">
          <h4 class="WSubtitle">
            support
          </h4>
          <div class="WFooter__nav">
            <a
              href="mailto:support@websitedevs.com"
              class="WFooter__navItem"
            >
              support@websitedevs.com
            </a>
            <a
              href="mailto:support@websitedevs.com"
              class="WFooter__navItem"
            >
              Street st. 15, Kaunas
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'WFooter'
}
</script>

<style lang="scss" scoped>
  .WFooter {
    background-color: $color-dark-blue;
    padding: 225px 0 215px 0;
    color: $color-white;
    .WParagraph {
      margin-top: 23px;
    }
    .WSubtitle {
      @media (max-width: $breakpoint-md) {
        margin-top: 46px;
      }
    }
    @media (max-width: $breakpoint-md) {
      padding: 82px 9px;
    }
    &__nav {
      margin-top: 32px;
      @media (max-width: $breakpoint-md) {
        margin-top: 16px;
      }
    }
    &__navItem {
      display: block;
      text-decoration: none;
      font-size: 16px;
      line-height: 20px;
      font-family: $font-family-secondary;
      font-weight: $font-semibold;
      color: rgba($color-white, 0.6);
      &:hover {
        color: $color-white;
      }
      & + & {
        margin-top: 10px;
      }
    }
  }
</style>
