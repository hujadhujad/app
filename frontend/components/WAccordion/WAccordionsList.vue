<template>
  <div class="WAccordionsList">
    <WAccordion
      v-for="(accordion, i) in accordions"
      :key="i"
      :index="i"
    >
      <template v-slot:title>
        {{ accordion.title }}
      </template>
      <template v-slot:content>
        {{ accordion.content }}
      </template>
    </WAccordion>
  </div>
</template>

<script>
export default {
  name: 'WAccordionsList',
  props: {
    accordions: {
      type: Array,
      default: () => [
        {
          title: 'Donec sodales id sem sed viverra?',
          content: 'Sed ante metus, venenatis vitae purus sed, convallis aliquam elit. Nulla eu vestibulum massa, et suscipit ligula. Pellentesque orci lectus, aliquam non dignissim eget, semper ac mi. Donec id accumsan ipsum, eu congue leo. Suspendisse dictum est est, et porta metus sagittis auctor. Sed commodo aliquam urna et laoreet. Proin venenatis facilisis tempus. Pellentesque at malesuada est. Morbi eget augue leo. Nullam vitae vestibulum lectus.'
        },
        {
          title: 'Suspendisse dictum est est?',
          content: 'Sed ante metus, venenatis vitae purus sed, convallis aliquam elit. Nulla eu vestibulum massa, et suscipit ligula. Pellentesque orci lectus, aliquam non dignissim eget, semper ac mi. Donec id accumsan ipsum, eu congue leo. Suspendisse dictum est est, et porta metus sagittis auctor. Sed commodo aliquam urna et laoreet. Proin venenatis facilisis tempus. Pellentesque at malesuada est. Morbi eget augue leo. Nullam vitae vestibulum lectus.'
        },
        {
          title: 'Sed commodo aliquam urna et laoreet?',
          content: 'Sed ante metus, venenatis vitae purus sed, convallis aliquam elit. Nulla eu vestibulum massa, et suscipit ligula. Pellentesque orci lectus, aliquam non dignissim eget, semper ac mi. Donec id accumsan ipsum, eu congue leo. Suspendisse dictum est est, et porta metus sagittis auctor. Sed commodo aliquam urna et laoreet. Proin venenatis facilisis tempus. Pellentesque at malesuada est. Morbi eget augue leo. Nullam vitae vestibulum lectus.'
        },
        {
          title: 'Pellentesque at malesuada es?',
          content: 'Sed ante metus, venenatis vitae purus sed, convallis aliquam elit. Nulla eu vestibulum massa, et suscipit ligula. Pellentesque orci lectus, aliquam non dignissim eget, semper ac mi. Donec id accumsan ipsum, eu congue leo. Suspendisse dictum est est, et porta metus sagittis auctor. Sed commodo aliquam urna et laoreet. Proin venenatis facilisis tempus. Pellentesque at malesuada est. Morbi eget augue leo. Nullam vitae vestibulum lectus.'
        },
        {
          title: 'Nullam vitae vestibulum lectus?',
          content: 'Sed ante metus, venenatis vitae purus sed, convallis aliquam elit. Nulla eu vestibulum massa, et suscipit ligula. Pellentesque orci lectus, aliquam non dignissim eget, semper ac mi. Donec id accumsan ipsum, eu congue leo. Suspendisse dictum est est, et porta metus sagittis auctor. Sed commodo aliquam urna et laoreet. Proin venenatis facilisis tempus. Pellentesque at malesuada est. Morbi eget augue leo. Nullam vitae vestibulum lectus.'
        }
      ]
    }
  }
}
</script>
