import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    ['@storyblok/nuxt', { accessToken: '5P1KzrnaPwyU0wnlnmXX9Att' }],
    '@nuxtjs/tailwindcss',
  ],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['model-viewer'].includes(tag),
    },
  },
})
