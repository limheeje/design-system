# BsGrid
BsGrid는 BsContainer, BsRow, BsCol 컴포넌트를 포함하는 그리드 시스템입니다. 이 컴포넌트들을 사용하여 페이지 레이아웃을 쉽게 구성할 수 있습니다.

## 컴포넌트 디자인커스텀 목록
- BsContainer와 BsRow 컴포넌트는 기본적으로 Flexbox 기반의 레이아웃을 지원합니다.
- 각 BsCol은 Flexbox의 align-self 속성으로 정렬을 제어할 수 있습니다.
## 컴포넌트 정보
- BsContainer:
  - 컨테이너 역할을 하며 내부에 BsRow와 BsCol을 포함합니다.
  - guideLine prop을 통해 그리드 라인을 표시할 수 있습니다.
- BsRow:
  - BsCol 요소들을 포함하는 행(row)을 생성합니다.
  - align prop을 사용하여 자식 요소들을 정렬할 수 있습니다.

- BsCol:
  - 그리드의 열을 구성하며, alignSelf prop을 통해 요소를 수직으로 정렬할 수 있습니다.

### Props
```ts
// BsContainer.vue
const props = withDefaults(defineProps<Props>(),{
  guideLine: false // 그리드 가이드를 활성화할지 여부 (기본값: false)
})
// BsRow.vue
const props = withDefaults(defineProps<Props>(),{
  align: 'justify-content-start' // 자식 요소들의 가로 정렬 (기본값: 'justify-content-start')

})
// BsCol.vue
const props = withDefaults(defineProps<Props>(),{
  alignSelf: 'align-self-start' // 수직 정렬 (기본값: 'align-self-start')
})
```
### Types
```ts
export interface Props {
  alignSelf?: 'align-self-start' | 'align-self-center' | 'align-self-end'
  align?: 'justify-content-start' | 'justify-content-center' | 'justify-content-end'
  cols?: 'auto' | 'col-1' | 'col-2' | 'col-3' | 'col-4' | 'col-5' | 'col-6' | 'col-7' | 'col-8' | 'col-9' | 'col-10' | 'col-11' | 'col-12'
}
```
### Constant
```ts
export const ALIGN_KEYNAME = Object.freeze({
  JUSTIFY_START: 'justify-content-start',
  JUSTIFY_CENTER: 'justify-content-center',
  JUSTIFY_END: 'justify-content-end',
  SELF_START: 'align-self-start',
  SELF_CENTER: 'align-self-center',
  SELF_END: 'align-self-end'
})
```

