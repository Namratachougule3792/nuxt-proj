// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  ssr: false,                    // SPA mode
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    baseURL: '/',                // Important: fixes white screen
  },
  nitro: {
    output: {
      publicDir: '.output/public' // matches Amplify artifact
    }
  }
})
