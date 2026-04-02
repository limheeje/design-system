# BsModal

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1504&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- teleportTo - 모달을 렌더링할 위치 (body, #app, 등).
- useDimm - 딤 배경 사용 여부.
- useCloseButton - 닫기 버튼 사용 여부.
- headerText - 헤더 텍스트.
- headerTextCenter - 헤더 가운데 정렬 여부.
- headerCloseButtonValign - 닫기 버튼 세로 정렬 여부.
- align - 모달 정렬 위치 (ALIGN_KEYNAME 사용).
- buttonLayout - 버튼 정렬 레이아웃 (BUTTON_LAYOUT 사용).
- buttons - 사용자 정의 버튼 그룹.

## 기능 설명
- 모달은 Pinia Store (useModalStore)와 연결되어 동적으로 여러 개를 관리 가능.
- addModal(payload)를 통해 어디서든 모달 호출 가능. string 혹은 object 타입.
- BsModal 컴포넌트는 텔레포트를 사용하여 원하는 위치에 렌더링되며, 딤 클릭 시 자동 닫힘.
- scroll lock 기능이 내장되어 모달 열릴 때 백그라운드 스크롤 방지.
- 버튼은 각 모달마다 동적으로 설정할 수 있으며, clickCallback 포함 가능.

### Props

```ts
const props = withDefaults(defineProps<Props>(), {
  modelValue: boolean,                          // 모달의 노출 여부 (v-model)
  teleportTo: string = 'body',                  // 모달을 렌더링할 위치
  useDimm: boolean = true,                      // 딤 배경 사용 여부
  useCloseButton: boolean = true,               // 닫기 버튼 사용 여부
  headerText: string = 'Title',                 // 헤더 텍스트
  headerTextCenter: boolean = false,            // 헤더 가운데 정렬 여부
  headerCloseButtonValign: boolean = false,     // 닫기 버튼 세로 정렬 여부
  buttonLayout: string = 'layout-auto',         // 버튼 레이아웃
  buttons: Array<Record<string, any>>,          // 버튼 목록
  align: ALIGN_KEYNAME = 'CENTER_CENTER'        // 모달 정렬 위치
})
```

### Types
```ts
export interface Props {
  modelValue: boolean
  teleportTo?: string
  useDimm?: boolean
  useCloseButton?: boolean
  headerText?: string
  headerTextCenter?: boolean
  headerCloseButtonValign?: boolean
  buttonLayout?: string
  buttons?: Record<string, any>[]
  align?: keyof typeof ALIGN_KEYNAME
}
```
### Emits
```ts
'emits': {
  'update:modelValue': (value: boolean) => void,  // 모달 상태 업데이트
  'close': () => void,                            // 닫기 버튼 클릭 또는 딤 클릭 시
  'confirm': () => void                           // 확인 버튼 클릭 시
}
```
### Pinia 모달 스토어 사용법
```ts
<script setup lang="ts">
import {onMounted, provide} from 'vue'
import {useModalStore} from '@/stores/useModalStore'

const modalStore = useModalStore()

function onClose(id: string) {
  modalStore.destory(id)
}

function addModal(params?: string | Record<string, any>) {
  modalStore.add(params as string | Record<string, any>)
}

onMounted(()=>{
  modalStore.add('간단한 경고 메세지')
  // 혹은
  modalStore.add({
    message: '이 메시지는 HTML을 포함할 수도 있어요.<br/>확인하세요!',
    type: MODAL_TYPE.CONFIRM,
    buttons: [
      { codeName: BUTTON_KEYNAME.CANCEL, codeText: '닫기', clickCallback: () => {} },
      { codeName: BUTTON_KEYNAME.CONFIRM, codeText: '확인', clickCallback: () => {} }
    ]
  })
})

provide('addModal', addModal)
</script>

```
#### 모달 닫기
```ts
modalStore.destory(item.id)
```




### Constant

```ts
export const ALIGN_KEYNAME = Object.freeze({
  LEFT_TOP: 'LEFT_TOP',
  LEFT_CENTER: 'LEFT_CENTER',
  LEFT_BOTTOM: 'LEFT_BOTTOM',
  CENTER_TOP: 'CENTER_TOP',
  CENTER_CENTER: 'CENTER_CENTER',
  CENTER_BOTTOM: 'CENTER_BOTTOM',
  RIGHT_TOP: 'RIGHT_TOP',
  RIGHT_CENTER: 'RIGHT_CENTER',
  RIGHT_BOTTOM: 'RIGHT_BOTTOM'
})
export const ALIGN_GUBUN = Object.freeze({
  [ALIGN_KEYNAME.LEFT_TOP]: ['flex-start', 'flex-start'],
  [ALIGN_KEYNAME.LEFT_CENTER]: ['flex-start', 'center'],
  [ALIGN_KEYNAME.LEFT_BOTTOM]: ['flex-start', 'flex-end'],
  [ALIGN_KEYNAME.CENTER_TOP]: ['center', 'flex-start'],
  [ALIGN_KEYNAME.CENTER_CENTER]: ['center', 'center'],
  [ALIGN_KEYNAME.CENTER_BOTTOM]: ['center', 'flex-end'],
  [ALIGN_KEYNAME.RIGHT_TOP]: ['flex-end', 'flex-start'],
  [ALIGN_KEYNAME.RIGHT_CENTER]: ['flex-end', 'center'],
  [ALIGN_KEYNAME.RIGHT_BOTTOM]: ['flex-end', 'flex-end']
})
export const BUTTON_LAYOUT = Object.freeze({
  LAYOUT_AUTO: 'layout-auto',
  LAYOUT_RIGHT: 'layout-right',
  LAYOUT_CENTER: 'layout-center'
})
export const BUTTON_KEYNAME = Object.freeze({
  CANCEL: 'cancel',
  CONFIRM: 'confirm'
})
export const MODAL_TYPE = Object.freeze({
  ALERT: 'alert',
  CONFIRM: 'confirm'
})

```

### Slots

```ts
<slot /> // 모달 콘텐츠 영역
```
### Expose Methods

```ts
setFocus(): void   // 모달 열릴 때 포커스 설정
```
