<template>
  <div class="WOrderPaymentForm">
    <div class="WOrderPaymentForm__part">
      <div class="WOrderPaymentForm__title">
        Cardholder name
      </div>
      <input
        placeholder="first name"
        type="text"
        class="WOrderPaymentForm__input"
      >
      <input
        placeholder="last name"
        type="text"
        class="WOrderPaymentForm__input"
      >
    </div>
    <div class="WOrderPaymentForm__part">
      <div class="WOrderPaymentForm__title">
        Card details
      </div>
      <input
        v-model="cardNumber"
        v-mask="'#### #### #### ####'"
        placeholder="0000 0000 0000 0000"
        type="text"
        class="WOrderPaymentForm__input"
      >
      <div class="row">
        <div class="col-sm-6">
          <input
            v-model="cardDate"
            v-mask="'## / ##'"
            placeholder="mm / yy"
            type="text"
            class="WOrderPaymentForm__input"
          >
        </div>
        <div class="col-sm-6">
          <input
            v-model="cardCvc"
            v-mask="'###'"
            placeholder="cvc"
            type="text"
            class="WOrderPaymentForm__input"
          >
        </div>
      </div>
    </div>
    <div class="WOrderPaymentForm__bottom">
      <div class="WSubtitle align-items-center">
        <span class="WIcon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21"><path data-name="Path 295" d="M14 7h-1V5A5 5 0 003 5v2H2a2.006 2.006 0 00-2 2v10a2.006 2.006 0 002 2h12a2.006 2.006 0 002-2V9a2.006 2.006 0 00-2-2zm-6 9a2 2 0 112-2 2.006 2.006 0 01-2 2zm3.1-9H4.9V5a3.1 3.1 0 016.2 0z" fill="#0bf" /></svg>
        </span>
        Secure transaction
      </div>
      <WButton color="skyblue" route="/order/15946/success">
        make payment
      </WButton>
    </div>
  </div>
</template>

<script>
import { VueMaskDirective } from 'v-mask'
export default {
  name: 'WOrderPaymentForm',
  directives: {
    mask: VueMaskDirective
  },
  data () {
    return {
      cardNumber: '',
      cardDate: '',
      cardCvc: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .row {
    margin-left: -7.5px;
    margin-right: -7.5px;
    .col-sm-6 {
      padding: 0 7.5px;
    }
  }
  .WIcon {
    margin-right: 10px;
    margin-top: -4px;
    svg {
      display: block;
    }
  }
  .WOrderPaymentForm {
    display: flex;
    align-items: flex-start;
    margin-left: -12.5px;
    margin-right: -12.5px;
    flex-wrap: wrap;
    &__title {
      font-size: 15px;
      font-family: $font-family-secondary;
      line-height: 19px;
      margin-bottom: 13px;
    }
    &__input {
      height: 61px;
      background-color: rgba($color-black, 0.23);
      border-radius: 5px;
      outline: none;
      padding: 0 25px;
      width: 100%;
      margin-bottom: 10px;
      display: block;
      font-family: $font-family-main;
      font-size: 16px;
      font-weight: $font-semibold;
      color: rgba($color-white, 0.45);
      border: 0;
      &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: rgba($color-white, 0.45);
        opacity: 1; /* Firefox */
      }
      &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: rgba($color-white, 0.45);
      }
      &::-ms-input-placeholder { /* Microsoft Edge */
        color: rgba($color-white, 0.45);
      }
    }
    &__part {
      flex-basis: 50%;
      max-width: 50%;
      padding: 0 12.5px;
    }
    &__bottom {
      flex-basis: 100%;
      max-width: 100%;
      padding: 0 12.5px;
      margin-top: 13px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
