<template>
  <div class="WPlans row">
    <div
      v-for="(plan, index) in plans"
      :key="index"
      class="col-xs-12 col-lg-4"
    >
      <WPlan
        :plan="plan"
        :highlighted="plan.highlighted"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WPlans',
  props: {
    plans: {
      type: Array,
      default: () => [
        {
          title: 'informative website.',
          price: 799,
          description: 'Sed ante metus, venenatis vitae purus sed, convallis aliquam elit. Nulla eu vestibulum massa, et suscipit ligula.'
        },
        {
          title: 'e-shop.',
          price: 1499,
          description: 'Sed ante metus, venenatis vitae purus sed, convallis aliquam elit. Nulla eu vestibulum massa, et suscipit ligula. Pellentesque orci lectus, aliquam non dignissim eget, semper ac mi. Donec id accumsan ipsum, eu congue leo.'
        },
        {
          title: 'custom project.',
          description: 'Sed ante metus, venenatis vitae purus sed, convallis aliquam elit. Nulla eu vestibulum massa, et suscipit ligula.'
        }
      ]
    }
  }
}
</script>
