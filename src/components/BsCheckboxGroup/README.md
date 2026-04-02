# BsCheckboxGroup

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1501&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- 아코디언 테마 선택 (THEME_1, THEME_2)
- 테마에 따른 체크박스 아이콘 스타일 (THEME_6 체크아이콘 사용 여부)
- 각 항목 선택 및 모델 값 바인딩 처리
- disabled 속성 및 개별 아이템 비활성화 처리

## 컴포넌트 설명
BsCheckboxGroup는 여러 개의 BsCheckbox를 포함하는 그룹형 체크박스 컴포넌트입니다. 각 체크박스 항목은 그룹 내에서 선택 또는 해제될 수 있으며, 선택된 항목들은 modelValue로 바인딩됩니다. 개별 아이템의 상태는 disabled 속성으로 비활성화할 수 있으며, 테마에 따라 체크박스의 스타일을 조정할 수 있습니다.
## 기능 설명
- items: 체크박스 항목은 계층형 구조를 가질 수 있으며, 각 항목은 items 배열을 통해 정의됩니다.
- modelValue: 이 값은 선택된 체크박스를 실시간으로 반영하며, 바인딩된 값은 update:modelValue를 통해 부모 컴포넌트와 연동됩니다.
- 테마 설정: theme prop을 사용하여 체크박스 스타일을 변경할 수 있습니다. 테마에 따라 체크박스의 아이콘 및 스타일이 달라집니다.
- 개별 항목 비활성화: disabled prop을 사용하여 체크박스를 비활성화할 수 있습니다.
- 이벤트 처리: 체크박스 선택 상태 변경 시 change와 update:modelValue 이벤트가 발생하여 부모와 상태를 동기화합니다.


### Props
```ts
const props = withDefaults(defineProps<Props>(), {
  items: () => [],                      // 체크박스 항목 리스트 (배열 형태)
  modelValue: () => [],                  // 선택된 체크박스 값을 바인딩
  theme: 'default',                      // 테마 ('default', 'theme-1', 'theme-2')
  disabled: false,                       // 전체 체크박스 비활성화 여부
  useTheme6CheckIcon: false              // 테마 6 체크아이콘 사용 여부
})
```
### Types
```ts
// /components/BsCheckboxGroup/index.type.ts
export interface Props {
  items: Record<string, any>[]       // 체크박스 항목 목록
  modelValue: Record<string, any>[]  // 선택된 체크박스 값
  theme?: 'default' | 'theme-1' | 'theme-2' // 테마 지정
  useTheme6CheckIcon?: boolean       // 테마 6 체크아이콘 사용 여부
  disabled?: boolean                 // 비활성화 여부
}
```
### Emits
```ts
'emits': {
  'update:modelValue': (value: object[]) => void,    // 선택된 항목 배열을 업데이트
  'change': (e: Event) => void                       // 상태 변경 이벤트
}
```

### Constant
```ts
export const THEME_KEYNAME = Object.freeze({
  THEME_1: 'theme-1', // 체크박스 테마1
  THEME_2: 'theme-2'  // 체크박스 테마2
})
```

### Slots
```ts
<template v-if="$slots.default" #default>
  <slot name="default" :item="item" />
</template>
```

