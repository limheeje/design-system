# test-leem test build



## github action
```code
.github/workflows/npm-package-publish.yml
```
- https://www.npmjs.com/
- settings
- Access Tokens
- Claasic Token
- Name/Automation -> 토큰발급
- https://github.com/ 이동
- 해당 레파시토리 -> settings
- Secrets and variables -> Actions
- New repository secret
- name/Secret영역에 npm에서 발급받은 토큰입력

## /lib/main.ts 작성
```
import TestLeem1 from '../src/components/TestLeem1.vue'
import TestLeem2 from '../src/components/TestLeem2.vue'

export default{
    install: (app:any, options?:any)=>{
        const globalOptions = options || {};
        app.provide('globalOptions', globalOptions);
        app.config.globalProperties.$testleem = (s:any)=>{
            console.log(s);
            console.log(123);
            return `hello plugins params : ${s}`
        }
        app.component('TestLeem1', TestLeem1);
        app.component('TestLeem2', TestLeem2);
    }
}

export {
    TestLeem1,
    TestLeem2
}
```
## /src/main.ts 에서 
```
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import testleem from '../lib/main'

createApp(App).use(testleem).mount('#app')
```
## vite.config.ts
```// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // 여러 진입점은 객체 또는 배열로 지정할 수 있습니다.
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'testleem',
      // 적절한 확장자가 추가됩니다.
      fileName: 'test-leem'
    },
    rollupOptions: {
      // 라이브러리에 포함하지 않을
      // 디펜던시를 명시해주세요
      external: ['vue'],
      output: {
        // 라이브러리 외부에 존재하는 디펜던시를 위해
        // UMD(Universal Module Definition) 번들링 시 사용될 전역 변수를 명시할 수도 있습니다.
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
```


## package.json
```
{
    "private": false,
     "main": "./dist/test-leem.umd.cjs",
    "module": "./dist/test-leem.js",
    "exports": {
        ".": {
        "import": "./dist/test-leem.js",
        "require": "./dist/test-leem.umd.cjs"
        }
    },
}
```

## cmd
```
작업완료 후 
npm run build
```
/dist/.. 파일 업데이트
```
npm adduser
```
npmjs.com 로그인 후 
```
npm publish --access public <-- 초기에만
```
```
/버전업 할때
npm version major | minor | patch
npm publish
```




## 프로젝트 import
```vue3 기준 main.js
import { createApp } from 'vue'
import App from './App.vue'
import UiComponents from 'test-leem-vue3-components'

createApp(App).use(UiComponents).mount('#app')
```

``` App.vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <BsInputField ref="refLoginInput" v-model="testModel" :isError="true">
    <template #slotInputSectionLeftArea>
      <BsIcon :type="'icon_arrow_before_line'" />
    </template>
    <template #slotInputSectionRightArea> asdf </template>
    <template #slotSupportMessage> 서포트메시지12 </template>
  </BsInputField>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {BsIcon, BsInputField} from 'test-leem-vue3-components'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BsInputField,
    BsIcon
  },
  data(){
    return {
      testModel: 123
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```
