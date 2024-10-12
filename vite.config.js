import { defineConfig } from 'vite'

export default defineConfig({
  base: '/FruitNinja_EDU_Clone/',
  build: {
    rollupOptions: {
      external: ['three']
    }
  }
})
