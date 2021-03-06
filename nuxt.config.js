
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  target: 'static',
  head: {
    title: 'Martin Riedweg | Freelance Software Engineer & Indie Maker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Martin Riedweg, freelance, laravel, vue' },
      { name: 'copyright', content: 'Martin Riedweg' },
      { hid: 'description', name: 'description', content: 'My name is Martin, I\'m an engineering student and software developer. I’m also an indie maker that built SAAS products.' },
      { hid: 'og:description', name: 'og:description', content: 'My name is Martin, I\'m an engineering student and software developer. I’m also an indie maker that built SAAS products.' },
      { hid: 'og:image', name: 'og:image', content: 'https://martin-riedweg.s3.eu-west-3.amazonaws.com/martin_riedweg_com_c7841d749e.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/styles/agate.min.css'}
    ]
  },
  env: {
    strapiBaseUri: process.env.API_URL || 'http://localhost:1337'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit'
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || 'http://localhost:1337/graphql'
      }
    }
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-highlightjs'
    ],
    injected: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    },
    babel: {
      presets ({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  }
}
