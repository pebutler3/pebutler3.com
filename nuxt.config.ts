// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    port: 8888
  },
  modules: ['nuxt-graphql-client'],
  plugins: ['~/plugins/analytics.client.js'],
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://gql.hashnode.com'
    }
  }
})
