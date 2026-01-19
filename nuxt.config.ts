export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    baseURL: '/',
    buildAssetsDir: '_nuxt/'  // optional but matches Nitro output
  }
})
