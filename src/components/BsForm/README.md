# BsCheckboxGroup

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1501&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- 세로 레이아웃 설정 (isVertical)
- 레이블 너비 설정 (labelWidth)
- 폼 항목에 고유한 ID 할당 (id)

## 컴포넌트 설명
BsForm는 폼 레이아웃을 관리하는 컴포넌트로, 라벨과 콘텐츠를 포함하는 기본 폼 요소를 제공합니다. 레이블의 너비와 레이아웃(수평/수직)을 설정할 수 있으며, 자동으로 고유 ID를 생성하여 폼 항목에 적용합니다.
## 기능 설명
- isVertical: true로 설정하면 레이아웃이 수직으로 렌더링됩니다. 기본값은 false로, 수평 레이아웃을 제공합니다.
- id: 폼 항목의 고유 ID를 자동으로 생성하거나, id 프로퍼티를 통해 수동으로 설정할 수 있습니다.
- 슬롯: 기본 슬롯과 slotContent 슬롯을 사용하여 폼 콘텐츠를 커스터마이징할 수 있습니다. 기본 슬롯은 레이블을 제공하고, slotContent 슬롯은 폼 콘텐츠 영역에 들어갑니다.


### Props
```ts
const props = withDefaults(defineProps<Props>(), {
  id: '',           // 폼의 고유 ID
  labelWidth: '',   // 레이블의 너비
  isVertical: false // 수직 레이아웃 여부
})
```
### Types
```ts
// /components/BsForm/index.type.ts
export interface Props {
  id?: string           // 폼 항목의 고유 ID
  labelWidth?: string   // 레이블 너비
  isVertical?: boolean  // 수직 레이아웃 여부
}
```

### Slots
```ts
<template v-if="$slots.default" #default>
  <slot name="default" :item="item" />
</template>
```

