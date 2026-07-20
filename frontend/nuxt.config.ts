// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_URL
    }
  },

  devServer: {
    port: 3000
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@pinia/nuxt',
    '@nuxt/fonts'
  ],

  fonts: {
    families: [
      {
        name: 'Share Tech Mono',
        provider: 'google',
        weights: ['400', '500', '600', '700']
      }
    ]
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      }
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
