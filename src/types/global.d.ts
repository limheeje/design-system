import {} from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $testleem: any // 실제 타입으로 수정 가능
  }
}
declare module 'vue-styled-components' {
  import {DefineComponent} from 'vue'
  export function styled(tag: string): any
  export function styled(tag: DefineComponent): any
  export default styled
}
declare global {
  interface externalSettings {
    [key: string]: any
  }
}
