// @ts-nocheck
import {resolve} from 'path'
import {defineConfig} from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    {
      // 테스트를 위한 html속성값 "data-testid" production 빌드시 삭제
      name: 'remove-test-attributes',
      transform(code) {
        if (process.env.NODE_ENV === 'production') {
          return code.replace(/\s*data-testid="[^"]*"/g, '')
        }
      }
    }
  ],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@tests': resolve(__dirname, 'tests')
    }
  }
})
