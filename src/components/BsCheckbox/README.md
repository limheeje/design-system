# BsCheckbox

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1501&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- 테마 선택: THEME_1, THEME_2, THEME_3, THEME_4, THEME_5, THEME_6, CHECKBOX_THEME_1
- 좌측 아이콘 사용 여부: useTheme6CheckIcon
- 체크박스 라벨 및 상태 필드명 커스터마이징: codeTitle, codeLabel, codeContent, codeSelected
- 커서 hover 효과 및 선택 스타일 지정

## 컴포넌트 설명
- BsCheckbox는 기본적으로 체크박스를 구현한 컴포넌트입니다.
- **modelValue**와 checked 속성으로 체크 여부를 제어할 수 있습니다.
- theme 속성으로 다양한 스타일 테마를 설정할 수 있으며, 기본값은 THEME_1입니다.
- useTheme6CheckIcon 속성으로 아이콘 표시 여부를 제어할 수 있습니다.
- disabled 속성으로 체크박스를 비활성화할 수 있습니다.
- onChange 이벤트를 통해 체크 상태 변경 시 외부로 값을 전달합니다.

### Props
```ts
const props = withDefaults(defineProps<Props>(), {
  id: '',                                // 체크박스의 id
  name: '',                              // 체크박스의 name
  checked: false,                        // 기본 체크 상태
  disabled: false,                       // 체크박스를 비활성화 할지 여부
  modelValue: false,                     // v-model을 위한 체크 상태 값
  useTheme6CheckIcon: false,             // 테마6 아이콘 사용 여부
  theme: THEME_KEYNAME.THEME_1           // 테마 종류 ('theme-1' 기본값)
})
```
### Types
```ts
export interface Props {
  id?: string
  name?: string
  modelValue?: boolean
  checked?: boolean
  disabled?: boolean
  useTheme6CheckIcon?: boolean
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
}
```
### Emits
```ts
const emits = defineEmits({
  'update:modelValue': (value: boolean) => true,  // 체크 상태 업데이트
  'change': (event: Event) => true               // 상태 변경 이벤트
})
```

### Constant
```ts
export const THEME_KEYNAME = Object.freeze({
  THEME_1: 'theme-1', // Checkbox&Radio 테마1
  THEME_2: 'theme-2', // Checkbox&Radio 테마2
  THEME_3: 'theme-3', // Checkbox&Radio 테마3
  THEME_4: 'theme-4', // Checkbox&Radio 테마1 (Form Radio button)
  THEME_5: 'theme-5', // Checkbox&Radio 테마2 (Form Radio button)
  THEME_6: 'theme-6', // Checkbox&Radio 테마6 (Button)
  CHECKBOX_THEME_1: 'checkbox-theme-1' // CHECKBOX 전용 테마1 (Form Toggle Switch)
})
```

### Slots
```ts
<slot></slot> // 체크박스 라벨을 커스터마이징할 수 있는 슬롯
```

