# BsToast

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1504&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- teleportTo - 토스트가 표시될 DOM 위치.
- align - 정렬 위치 (ALIGN_KEYNAME 사용, 예: CENTER_BOTTOM, TOP_RIGHT 등).
- headerText - 헤더 텍스트.
- useHeaderIcon - 헤더 아이콘 표시 여부.
- useCloseButton - 닫기 버튼 표시 여부.
- useShadowCSS - 그림자 스타일 적용 여부.

## 기능 설명
- modelValue를 통해 노출 여부 제어 (v-model).
- 자동으로 사라지는 토스트: timer(ms) 설정으로 자동 종료 타이머 작동.
- teleport 사용으로 특정 위치에 렌더링되며, 정렬 위치별로 data-toast-teleport-div 관리.
- 닫기 버튼 클릭 또는 timer 종료 시 modelValue가 false로 변경됨.
- 슬롯을 활용해 기본 내용 영역 및 버튼 커스터마이징 가능.

### Props

```ts
const props = withDefaults(defineProps<Props>(), {
  modelValue: boolean,                         // 노출 여부 (v-model)
  timer: number = 5000,                        // 자동 종료 시간 (ms)
  teleportTo?: string,                         // 렌더링 위치
  headerText: string = 'Title',                // 헤더 텍스트
  useHeaderIcon: boolean = true,               // 헤더 아이콘 사용 여부
  useCloseButton: boolean = true,              // 닫기 버튼 사용 여부
  useShadowCSS: boolean = true,                // 그림자 효과 사용 여부
  align: ALIGN_KEYNAME = 'CENTER_BOTTOM'       // 위치 (ALIGN_KEYNAME 상수 사용)
})
```

### Types
```ts
export interface Props {
  modelValue: boolean
  timer?: number
  teleportTo?: string
  headerText?: string
  useShadowCSS?: boolean
  useCloseButton?: boolean
  useHeaderIcon?: boolean
  align?: keyof typeof ALIGN_KEYNAME
}
```
### Emits
```ts
'emits': {
  'update:modelValue': (value: boolean) => void,   // 상태 업데이트
  'close': () => void                              // 닫기 버튼 클릭 시
}
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
```

### Slots

```ts
<slot name="slotTextActionButton" /> // 닫기 버튼 안의 텍스트/버튼 커스터마이징
<slot /> // 토스트 본문 콘텐츠 영역
```
