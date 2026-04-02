# BsInputField

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/fVKfBzkZDtIOrSVzVC8muN/KCP-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-RESP?node-id=3743-14847&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- tag: 렌더링할 HTML 태그 (기본값: span)
- theme: 테마 (기본값: THEME_1)
- id: 입력 필드의 id (기본값: 없음)
- name: 입력 필드의 name (기본값: 없음)
- type: 입력 필드의 타입 (기본값: text)
- inputFilter: 입력 값 필터링 옵션 (기본값: ALL)
- readonly: 읽기 전용 설정 (기본값: false)
- disabled: 비활성화 설정 (기본값: false)
- isError: 에러 상태 표시 (기본값: false)
- isConfirm: 확인 상태 표시 (기본값: false)
- useResetButton: 리셋 버튼 사용 여부 (기본값: true)
- placeholder: 플레이스홀더 텍스트 (기본값: Placeholder text)
- errorMessage: 에러 메시지 (기본값: 없음)
- confirmMessage: 확인 메시지 (기본값: 없음)
- customStyle: 사용자 정의 스타일 (기본값: { background: '처음기본값' })
- timeRange: 유효시간 표시 여부 (기본값: false)

## 컴포넌트 정보

- 사용자 정의 입력 필드: type, placeholder, name, id 등 다양한 속성으로 사용자 정의 입력 필드를 생성합니다.
- 입력 필터: inputFilter 속성에 따라 입력 값에 필터링을 적용합니다 (예: 한글, 영어, 숫자 등).
- 상태 메시지: isError, isConfirm, errorMessage, confirmMessage, timeRange 등을 통해 입력 상태를 관리하고 메시지를 표시할 수 있습니다.
- 리셋 버튼: useResetButton을 true로 설정하면 리셋 버튼을 활성화하여 입력 값을 초기화할 수 있습니다.
- 슬롯: 다양한 슬롯을 통해 필드의 앞뒤에 추가적인 콘텐츠를 삽입할 수 있습니다.

### Props

```ts
const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  theme: 'THEME_1',
  id: '',
  name: '',
  type: 'text',
  inputFilter: 'ALL',
  readonly: false,
  disabled: false,
  isError: false,
  isConfirm: false,
  placeholder: 'Placeholder text',
  errorMessage: '',
  confirmMessage: '',
  useResetButton: true,
  customStyle: {background: '처음기본값'},
  timeRange: false
})
```
### Types

```ts
export interface Props  = {
  tag?: string;
  name?: string;
  id?: string;
  type?: string;
  theme?: keyof typeof THEME_KEYNAME;
  inputFilter?: string;
  readonly?: boolean;
  disabled?: boolean;
  isError?: boolean;
  isConfirm?: boolean;
  useResetButton?: boolean;
  placeholder?: string;
  errorMessage?: string;
  confirmMessage?: string;
  customStyle?: any;
  timeRange?: string | boolean;
  modelValue?: string;
}
```

### Emits
```ts
'emits': {
  'update:modelValue': (value: string) => void,  // 입력 값 업데이트
  'click:delete': () => void,                   // 리셋 버튼 클릭
  'input': (e: Event) => void,                  // 입력 이벤트
  'focus': (e: FocusEvent) => void,             // 포커스 이벤트
  'blur': (e: FocusEvent) => void,              // 블러 이벤트
  'keyup': (e: KeyboardEvent) => void          // 키업 이벤트
}
```



### Constant

```ts
const INPUT_VALIDATE = {
  ALL: 'all',
  KO: 'ko',
  EN: 'en',
  NUMBER: 'number',
  PRICE_COMMA: 'price_comma',
  SPECIAL: 'special',
  KO_SPECIAL: 'ko_special',
  EN_SPECIAL: 'en_special'
}

const THEME_KEYNAME = {
  THEME_1: 'theme-1',
  THEME_2: 'theme-2'
}

```

### Slots
```ts
<slot name="slotInputSectionLeftArea" /> // 입력 필드 왼쪽에 표시되는 콘텐츠
<slot name="slotInputSectionRightArea" /> // 입력 필드 오른쪽에 표시되는 콘텐츠
<slot name="slotSupportMessage" /> // 지원 메시지
```
### Expose Methods
```ts
defineExpose({
  setFocus, // 포커스 설정 메서드
})
```
