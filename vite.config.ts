import {resolve} from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteDts from 'vite-plugin-dts'
import fs from 'fs'

export default defineConfig({
  plugins: [
    vue(),
    ViteDts({
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json'
    }),
    {
      name: 'update-package-json', // 플러그인 이름
      buildEnd() {
        //updatePackageJson() // 빌드 종료 후 package.json 갱신
      }
    }
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@tests': resolve(__dirname, 'tests')
    }
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'lib/main.ts'),
        ...getComponentEntries()
      },
      name: 'kcp-ui-component',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  }
})

// lib 디렉토리에서 모든 컴포넌트 파일 찾기
function getComponentEntries() {
  const componentsDir = resolve(__dirname, 'lib')
  const entries: Record<string, string> = {}

  // 'lib' 디렉토리에서 모든 파일과 디렉토리 읽기
  const files = fs.readdirSync(componentsDir)
  files.forEach((file) => {
    const filePath = resolve(componentsDir, file)
    if (file !== 'main.ts') {
      // 파일이 디렉토리인 경우, 해당 디렉토리의 index.ts 파일을 엔트리로 추가
      if (fs.statSync(filePath).isDirectory() && fs.existsSync(resolve(filePath, 'index.ts'))) {
        const componentName = file.charAt(0).toUpperCase() + file.slice(1) // 대소문자 처리 (BsInputField 등)
        entries[componentName] = resolve(filePath, 'index.ts')
      }
    }
  })

  return entries
}

// function updatePackageJson() {
//   const packageJsonPath = resolve(__dirname, 'package.json')
//   const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))

//   const components = getComponentEntries()

//   // "exports" 부분을 동적으로 생성
//   const exportsObj: Record<string, {import: string; require: string; types: string}> = {
//     '.': {
//       import: './dist/index.es.js',
//       require: './dist/index.cjs.js',
//       types: './dist/index.d.ts'
//     }
//   }

//   Object.keys(components).forEach((component) => {
//     exportsObj[`./${component}`] = {
//       import: `./dist/${component}.es.js`,
//       require: `./dist/${component}.cjs.js`,
//       types: `./dist/${component}.d.ts`
//     }
//   })

//   // package.json에 exports 항목 추가
//   packageJson.exports = exportsObj

//   // 수정된 package.json을 저장
//   fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8')
// }
