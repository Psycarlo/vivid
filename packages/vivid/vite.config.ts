import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const projectRootDir = resolve(__dirname)

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
      cleanVueFileName: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve(projectRootDir, 'src')
    }
  },
  build: {
    lib: {
      name: 'vivid',
      fileName: 'index',
      entry: resolve(__dirname, 'src/index.ts')
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') return 'index.css'
          return chunkInfo.name as string
        }
      }
    }
  }
})
