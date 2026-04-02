# BsPagination

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1507&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- theme - 테마 스타일 지정 (THEME_KEYNAME 사용).
- perViewCount - 한 번에 보여줄 페이지 수.
- useMoreUi - ... 버튼 UI 사용 여부.
- useMoreUiPerViewCount (옵션) - useMoreUi 사용 시 perViewCount와 별도로 정의 가능.

## 기능 설명
- modelValue를 기준으로 현재 선택된 페이지를 표시함 (v-model).
- 페이지 수(totalRow)에 따라 버튼이 동적으로 생성됨.
- useMoreUi가 true일 경우 중간 페이지는 ...으로 대체되고, 현재 페이지 기준으로 양쪽을 보여줌.
- "처음", "이전", "다음", "마지막" 버튼을 통해 빠른 이동 가능 (useMoreUi가 false일 때만 "처음", "마지막" 노출).
- 페이지 클릭 시 update:modelValue 이벤트 발생.

### Props

```ts
const props = withDefaults(defineProps<Props>(), {
  theme: THEME_KEYNAME = 'theme-1',            // 테마 스타일
  totalRow: number,                            // 전체 페이지 수
  perViewCount: number = 10,                   // 한 번에 보여줄 페이지 수
  useMoreUi: boolean = false,                  // '...' UI 사용 여부
  useMoreUiPerViewCount?: number,              // useMoreUi 전용 perViewCount (선택)
  modelValue: number = 1                       // 현재 페이지 (v-model)
}
)
```

### Types
```ts
export interface Props {
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  totalRow: number
  perViewCount?: number
  useMoreUiPerViewCount?: number
  useMoreUi?: boolean
  modelValue: number
}
```
### Emits
```ts
'emits': {
  'update:modelValue': (value: number) => void   // 현재 페이지 업데이트
}
```

### Constant

```ts
export const THEME_KEYNAME = Object.freeze({
  THEME_1: 'theme-1',
  THEME_2: 'theme-2'
})
```

