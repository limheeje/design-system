# BsInputPassword

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/fVKfBzkZDtIOrSVzVC8muN/KCP-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-RESP?node-id=3743-14847&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- theme: 컴포넌트 스타일 테마 설정

## 기능 설명
- v-model을 통해 패스워드 값을 양방향 바인딩
- useVisibleButton이 true일 경우 비밀번호 보기/숨기기 토글 버튼 노출
- useResetButton이 true일 경우 입력값 초기화 버튼 노출
- isError, isConfirm 상태에 따라 메시지 및 스타일 처리

### Props

```ts
const props = withDefaults(defineProps<Props>(), {
  placeholder: '',                         // input placeholder
  id: '',                                  // input ID
  name: '',                                // input name
  theme: THEME_KEYNAME['THEME_1'],         // 테마 키값
  errorMessage: '',                        // 에러 메시지
  confirmMessage: '',                      // 확인 메시지
  useResetButton: true,                    // 리셋 버튼 사용 여부
  useVisibleButton: false,                 // 비밀번호 보기 버튼 사용 여부
  readonly: false,                         // 읽기 전용 여부
  disabled: false,                         // 비활성화 여부
  isError: false,                          // 에러 상태 여부
  isConfirm: false,                        // 확인 상태 여부
  modelValue: ''                           // input value
})
```

### Types
```ts
export interface Props {
  tag?: string
  name?: string
  id?: string
  type?: string
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
  modelValue?: string
  useVisibleButton?: boolean
  useResetButton?: boolean
}
```
### Emits
```ts
'emits': {
  'update:modelValue': (value: string) => void,    // 입력값 변경
  'click:delete': () => void,                      // 리셋 버튼 클릭
  'input': (e: Event) => void,                     // 입력 이벤트
  'focus': (e: FocusEvent) => void,                // 포커스 이벤트
  'blur': (e: FocusEvent) => void,                 // 블러 이벤트
  'keyup': (e: KeyboardEvent) => void              // 키업 이벤트
}
```





### Slots

```ts
<slot name="slotInputSectionLeftArea" /> // 좌측 아이콘 및 커스텀 콘텐츠
<slot name="slotSupportMessage" /> // 지원 메시지 영역
<slot name="slotInputSectionRightArea" /> // 우측 아이콘 및 커스텀 콘텐츠
```
