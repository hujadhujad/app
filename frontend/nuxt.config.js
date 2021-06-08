export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'webdevs-fe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'bootstrap/dist/css/bootstrap-grid.css',
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/lazysizes.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-observe-visibility.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-parallax.js',
      mode: 'client'
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-ssr-cache',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  env: {
    strapiBaseUri: process.env.API_URL || 'http://jwwg.l.dedikuoti.lt/admin/api'
  },

  // Module configs

  // Apolo module config
  apollo: {
    clientConfigs: {
      default: '~/apollo/config/config.js'
    }
  },
  // Nuxt SSR Cache module config
  cache: {
    useHostPrefix: false,
    pages: [
      '/',
    ],
    store: {
      type: 'memory',
      max: 100,
      ttl: 60,
    },
  },

  // Markdownit config
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },

  // Webfontloader module
  webfontloader: {
    google: {
      families: ['Poppins:600&display=swap']
    },
    typekit: {
      id: 'ovz0ybs'
    }
  },
  // Style resources
  styleResources: {
    scss: [
      '~/assets/scss/variables/*.scss'
    ]
  }
}
