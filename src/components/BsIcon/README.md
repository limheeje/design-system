# BsIcon

## 해당 컴포넌트 연결링크

- [StroyBook](https://www.google.com)
- [Pigma-input](https://www.figma.com/design/fVKfBzkZDtIOrSVzVC8muN/KCP-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-RESP?node-id=3835-30708&m=dev)

## 컴포넌트 디자인커스텀 목록
- color: 아이콘의 색상을 설정합니다.
- width: 아이콘의 너비를 설정합니다.
- height: 아이콘의 높이를 설정합니다.
## 컴포넌트 정보
BsIcon 컴포넌트는 다양한 아이콘을 표시하는 기능을 제공합니다. type, color, width, height 속성으로 아이콘의 스타일을 자유롭게 커스터마이즈할 수 있습니다. 아이콘은 내부적으로 DESIGNCONFIG_ICON_MAP에서 지정된 SVG 파일을 기반으로 렌더링됩니다.

### Props
```ts
const props = withDefaults(defineProps<Props>(), {
  type: 'icon_cancel_line', // 아이콘 타입 (기본값: 'icon_cancel_line')
  color: 'Gray/Black', // 아이콘 색상 (기본값: 'Gray/Black')
  width: '20px',  // 아이콘 너비 (기본값: '20px')
  height: '20px' // 아이콘 높이 (기본값: '20px')
})
```
### Types
```ts
export interface Props {
  type: keyof typeof iconMapGroup
  color?: string
  width?: string
  height?: string
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
export const DESIGNCONFIG_ICON_MAP = {
  'icon_cancel_line': 'path/to/icon_cancel_line.svg',
  'icon_check': 'path/to/icon_check.svg',
  'icon_home': 'path/to/icon_home.svg',
  // 더 많은 아이콘 매핑...
}
export const DESIGNCONFIG_KEYNAME_COLOR = {
  'Gray/Black': '#000000',
  // 더 많은 색상 정의...
}
```

### Slots
```ts
<slot /> // 아이콘을 포함하는 기본 슬롯
```
