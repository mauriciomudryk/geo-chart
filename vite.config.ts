import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'GeoChart',
      fileName: 'geo-chart'
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  }
})