# BsRadioGroup

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1501&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- THEME_1: 기본 테마
- THEME_2: 기본 테마 2
- THEME_3: 기본 테마 3
- THEME_4: Form 라디오 버튼 스타일 1
- THEME_5: Form 라디오 버튼 스타일 2
- THEME_6: 버튼 형태 라디오 (아이콘 있음, useTheme6CheckIcon 사용)

## 기능 설명
- 여러 개의 BsRadio를 그룹화하여 사용 가능
- v-model을 통해 그룹의 상태를 관리
- theme 설정을 통해 라디오 그룹의 디자인을 커스터마이징
- useTheme6CheckIcon을 사용해 체크 아이콘을 테마6에서 표시
- disabled 속성을 통해 라디오 그룹을 비활성화할 수 있음
- items 배열로 라디오 버튼 항목을 전달하며, 각 항목은 객체 또는 문자열로 지정 가능
- change 이벤트로 그룹 내 라디오 버튼의 선택 상태 변경 감지

### Props

```ts
const props = withDefaults(defineProps<Props>(), {
items: Array<string | Record<string, any>> = []   // 라디오 버튼 항목들, 문자열 또는 객체 형식으로 제공
modelValue: string | object = {}                    // 그룹 상태 (v-model로 양방향 바인딩)
theme: 'default' | 'theme-1' | 'theme-2' | 'theme-3' | 'theme-4' | 'theme-5' | 'theme-6' = 'default' // 테마 설정
name: string = ''                                  // 그룹 이름 (각각의 라디오 버튼에서 사용됨)
disabled: boolean = false                          // 그룹 내 모든 버튼 비활성화 여부
useTheme6CheckIcon: boolean = false                // 테마6 사용 시 체크 아이콘 표시 여부
})
```

### Emits
```ts
'emits': {
  'update:modelValue': (value: string | object) => void, // 그룹 상태를 업데이트 (v-model)
  'change': (e: Event) => void                          // 그룹 내 상태 변경 이벤트 발생 시
}
```

### Constant

```ts
export const THEME_KEYNAME = Object.freeze({
  THEME_1: 'theme-1',
  THEME_2: 'theme-2',
  THEME_3: 'theme-3',
  THEME_4: 'theme-4',
  THEME_5: 'theme-5',
  THEME_6: 'theme-6',
  CHECKBOX_THEME_1: 'checkbox-theme-1'
})
```
### Slots

```ts
<slot name="default" :item="item" /> // 항목에 대한 추가 슬롯 내용
```

