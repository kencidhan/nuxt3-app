// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['/assets/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      }
    },
    
    components: [
        {
            path: '~/components'
        }
    ],
    
    devServer: {
        host: '127.0.0.1',
        port: 4000,
        url: 'http://127.0.0.1:4000'
    }
})
