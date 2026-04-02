# BsSelect

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1501&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- THEME_1: 기본 테마
- THEME_2: 기본 테마 2

## 기능 설명
- select 요소를 확장하여 사용자가 선택할 수 있는 드롭다운을 제공합니다.
- v-model을 사용하여 양방향 데이터 바인딩을 지원합니다.
- isError와 isConfirm을 통해 상태에 따른 메시지를 보여줍니다.
- tag 속성으로 기본 HTML 태그를 변경할 수 있습니다.
- readonly, disabled를 통해 선택 상태를 제어합니다.

### Props

```ts
const props = withDefaults(defineProps<Props>(), {
  tag: 'span', // 컴포넌트의 기본 HTML 태그, 기본값은 'span'
  id: '', // 선택 필드의 ID, 설정하지 않으면 빈 문자열
  name: '', // 선택 필드의 이름, 설정하지 않으면 빈 문자열
  theme: THEME_KEYNAME.THEME_1, // 컴포넌트의 테마, 기본값은 'theme-1'
  readonly: false, // 읽기 전용 설정, 기본값은 false
  disabled: false, // 비활성화 상태, 기본값은 false
  isError: false, // 오류 상태 표시 여부, 기본값은 false
  isConfirm: false, // 확인 상태 표시 여부, 기본값은 false
  modelValue: '', // 선택된 값, 기본값은 빈 문자열
  errorMessage: '', // 오류 메시지, 설정하지 않으면 빈 문자열
  confirmMessage: '', // 확인 메시지, 설정하지 않으면 빈 문자열
  customStyle: {background: '처음기본값'}, // 사용자 정의 스타일, 기본값은 '처음기본값'
})
```

### Types
```ts
import {THEME_KEYNAME} from '@/constants/components/BsInputField'
export interface Props {
  tag?: string
  name?: string
  id?: string
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  disabled?: boolean
  isError?: boolean
  isConfirm?: boolean
  errorMessage?: string
  confirmMessage?: string
  customStyle?: any
  modelValue?: string | number
}
```
### Emits
```ts
'emits': {
  'update:modelValue': (value: string | number) => void, // 선택된 값 업데이트 (v-model)
  'focus': (e: FocusEvent) => void,                      // 포커스 이벤트
  'blur': (e: FocusEvent) => void,                       // 블러 이벤트
  'change': (e: Event) => void                           // 값 변경 이벤트
}
```

### Constant

```ts
export const THEME_KEYNAME = Object.freeze({
  THEME_1: 'theme-1',
  THEME_2: 'theme-2',
})
```
### Slots

```ts
<slot />                                // 옵션 항목
<slot name="slotSelectSectionRightArea" /> // 오른쪽 영역에 추가 슬롯
<slot name="slotSupportMessage" />        // 지원 메시지 슬롯
```

