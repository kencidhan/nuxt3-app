export default defineAppConfig({
    title: 'Nuxt Test',
    
    apiServer: 'http://localhost:8000/api',
    sanctumTokenURL: 'http://localhost:8000/sanctum/csrf-cookie'
  })