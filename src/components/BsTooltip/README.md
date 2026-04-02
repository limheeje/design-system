# BsTooltip

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1506&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- align - 툴팁 위치 설정 (ALIGN_KEYNAME 사용).
- theme - 테마 스타일 지정 (THEME_KEYNAME 사용).
- useCloseButton - 닫기 버튼 사용 여부.
- timer - 자동 닫힘 시간 (밀리초).

## 기능 설명
- modelValue를 기반으로 툴팁 노출 제어 (v-model).
- 마우스를 올리면(mouseenter) 툴팁이 표시되며, useCloseButton이 꺼져있으면 자동으로 닫힘 타이머 작동.
- 닫기 버튼이 활성화된 경우에는 수동으로 닫기 가능.
- mouseenter 발생 시 modelValue = true로 설정됨.
- 닫기 버튼 클릭 또는 타이머 만료 시 modelValue = false로 변경.
### Props

```ts
const props = withDefaults(defineProps<Props>(), {
  modelValue: boolean = false,                      // 노출 여부 (v-model)
  useCloseButton: boolean = false,                  // 닫기 버튼 사용 여부
  timer: number = 5000,                             // 자동 닫힘 시간 (ms)
  theme: THEME_KEYNAME = 'theme-1',                 // 테마 키값
  align: ALIGN_KEYNAME = 'CENTER_BOTTOM'            // 위치 키값
})
```

### Types
```ts
export interface Props {
  modelValue?: boolean
  useCloseButton?: boolean
  timer?: number
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  align?: (typeof ALIGN_KEYNAME)[keyof typeof ALIGN_KEYNAME]
}
```
### Emits
```ts
'emits': {
  'update:modelValue': (value: boolean) => void    // 상태 변경
}
```




### Constant

```ts
export const THEME_KEYNAME = Object.freeze({
  THEME_1: 'theme-1',
  THEME_2: 'theme-2'
})
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
<slot name="slotTooltipTarget" /> // 툴팁이 연결될 대상 엘리먼트
<slot /> // 툴팁 내용 텍스트 또는 콘텐츠
```
