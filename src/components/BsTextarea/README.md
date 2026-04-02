# BsTextarea

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1502&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록
- 테마 적용 가능 (theme)
- customStyle로 배경 등 스타일 커스텀
- 버튼 위치 조정 (useOuterButton)
- 최대 높이 및 자동 높이 조절 (maxHeight, useResponseHeight)
- 바이트 수 체크 UI 노출 (useLengthCheck)
## 기능 설명
- 텍스트 입력 필드를 제공합니다.
- 글자 수 제한 및 자동 높이 조절을 지원합니다.
- 입력 상태에 따라 에러/확인 메시지를 보여줄 수 있습니다.
- 내부/외부 버튼 영역을 지원하며, 슬롯으로 버튼을 커스터마이징할 수 있습니다.
- setFocus() 메서드로 외부에서 포커스를 줄 수 있습니다.

### Props
```ts
const props = withDefaults(defineProps<Props>(), {
  tag: 'span',                                      // 감싸는 태그 (default: span)
  theme: THEME_KEYNAME.THEME_1,                     // 테마 키값
  id: '',                                           // input의 id
  name: '',                                         // input의 name
  type: 'text',                                     // input 타입 (미사용 - 고정값)
  modelValue: '',                                   // 바인딩 값
  readonly: false,                                  // 읽기 전용 여부
  disabled: false,                                  // 비활성화 여부
  isError: false,                                   // 에러 상태 여부
  isConfirm: false,                                 // 확인 상태 여부
  placeholder: '',                                  // 플레이스홀더 텍스트
  errorMessage: '',                                 // 에러 메시지 텍스트
  confirmMessage: '',                               // 확인 메시지 텍스트
  useLengthCheck: false,                            // 글자 수 체크 사용 여부
  useOuterButton: false,                            // 버튼 외부 노출 여부
  useResponseHeight: false,                         // 입력 길이에 따른 높이 자동 조절 여부
  maxHeight: '',                                    // 최대 높이 (px, rem 등 단위 포함)
  maxlength: 0,                                     // 최대 입력 글자 수
  customStyle: { background: '처음기본값' },        // 커스텀 스타일 (예: 배경색)
  timeRange: '0'                                    // (사용처 미정 또는 예약용)
})
```
### Types
```ts
export interface Props {
  tag?: string
  name?: string
  id?: string
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  inputFilter?: string
  readonly?: boolean
  disabled?: boolean
  isError?: boolean
  isConfirm?: boolean
  placeholder?: string
  errorMessage?: string
  confirmMessage?: string
  customStyle?: any
  timeRange?: string
  useLengthCheck?: boolean
  useOuterButton?: boolean
  useResponseHeight?: boolean
  maxHeight?: string
  maxlength?: string | number
  modelValue?: string
}
```

### Emits
```ts
'emits': {
  'update:modelValue': (value: string) => void,     // 입력된 텍스트 값 업데이트
  'input': (e: Event) => void,                      // input 이벤트 전달
  'focus': (e: FocusEvent) => void,                 // 포커스 이벤트
  'blur': (e: FocusEvent) => void,                  // 포커스 아웃 이벤트
  'keyup': (e: KeyboardEvent) => void               // 키 입력 이벤트
}
```

### Slots

```ts
<slot name="slotTextareaButtonGroup" /> // 텍스트 영역 내/외부 버튼 그룹
<slot name="slotSupportMessage" />      // 서포트 메시지 영역
```

### Expose Methods

```ts
'expose': {
  setFocus: () => void    // 텍스트에 포커스 이동
}
```
