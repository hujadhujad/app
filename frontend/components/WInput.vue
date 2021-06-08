<template>
  <div :class="['WInput', { 'WInput--inverted': inverted }]">
    <label class="WInput__label WSubtitle">
      {{ label }}
    </label>
    <component
      :is="computedComponent"
      ref="input"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      class="WInput__input"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: 'WInput',
  props: {
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    textarea: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    inverted: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedComponent () {
      return this.textarea ? 'textarea' : 'input'
    }
  },
  methods: {
    handleInput () {
      const value = this.$refs.input.value
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .WInput {
    & + & {
      margin-top: 17px;
    }
    &__input {
      outline: none;
      border: 0;
      background-color: $color-white;
      height: 46px;
      border-radius: 5px;
      padding: 0 16px;
      width: 100%;
      font-family: $font-family-secondary;
      font-size: 16px;
    }
    &__label {
      color: $color-black;
      margin-bottom: 7px;
      display: block;
    }
    textarea {
      height: 198px;
      resize: none;
      padding: 16px;
    }
    &--inverted {
      .WInput__label {
        color: $color-white;
      }
      .WInput__input {
        background-color: rgba($color-black, 0.23);
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
    }
  }
</style>
