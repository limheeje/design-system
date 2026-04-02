# BsButton

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1503&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록
- 버튼 크기 및 색상 조정 가능
- 버튼의 블록 형태와 스타일 조정 가능
- 기본 버튼, 아웃라인 버튼, 텍스트 버튼 등 다양한 스타일 제공
- 버튼에 좌측, 우측 콘텐츠 삽입 가능
## 컴포넌트 정보
BsButton은 다양한 스타일과 크기 옵션을 제공하는 버튼 컴포넌트입니다.
버튼은 기본 버튼, 아웃라인 버튼, 텍스트 버튼 등 여러 가지 스타일을 지원합니다.
버튼 내부에는 사용자 정의 좌측 및 우측 영역을 추가할 수 있으며, 이를 통해 버튼 내용에 유연성을 제공합니다.
click 이벤트로 버튼 클릭 시 동작을 처리할 수 있습니다.

### Props
```ts
const props = withDefaults(defineProps<Props>(),{
  type: 'button', // 버튼 타입, 기본값 'button'
  theme: 'theme-default', // 버튼 테마 (기본, 아웃라인, 텍스트 등)
  color: '', // 버튼 색상
  size: 'size-default', // 버튼 크기 (default, large, medium, small)
  isBlock: false, // 버튼을 블록 레벨로 표시 (true: block, false: inline)
  name: '', // 버튼의 name
  value: '', // 버튼의 value
  to: '', // 링크를 전달할 경우, 이 값에 라우팅 경로 설정
  disabled: false // 버튼 비활성화
})
```
### Types
```ts
/src/components/BsButton/index.type.ts

export interface Props {
  type?: string
  name?: string
  value?: string
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  color?: (typeof COLOR_KEYNAME)[keyof typeof COLOR_KEYNAME] | ''
  size?: (typeof SIZE_KEYNAME)[keyof typeof SIZE_KEYNAME]
  to?: string
  disabled?: boolean
  isBlock?: boolean
}
```
### Constant
```ts
/src/constants/components/BsButton/index.ts

export const THEME_KEYNAME = Object.freeze({
  DEFAULT: 'theme-default',
  DEFAULT_OUTLINE: 'theme-default-outline',
  PILLS: 'theme-pills',
  PILLS_OUTLINE: 'theme-pills-outline',
  TEXT: 'theme-text'
})

export const SIZE_KEYNAME = Object.freeze({
  DEFAULT: 'size-default',
  LARGE: 'size-large',
  MEDIUM: 'size-medium',
  SMALL: 'size-small'
})

export const COLOR_KEYNAME = Object.freeze({
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary'
})
```
### Emits
```ts
'click': (e: Event) => void
```

### Slots

```ts
<slot name="slotButtonInnerSectionLeft" /> // 좌측 콘텐츠 영역
<slot /> // 기본 텍스트 콘텐츠
<slot name="slotButtonInnerSectionRight" /> // 우측 콘텐츠 영역
```

