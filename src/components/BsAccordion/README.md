# BsAccordion

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1505&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- 아코디언 테마 선택 (THEME_1, THEME_2)
- 좌측 아이콘 사용 여부
- 우측 아이콘 사용 여부
- 각 항목의 key값 설정 (제목/내용/오픈여부)
- 전체 펼침/접힘 제어

### 컴포넌트 정보
BsAccordion은 리스트 형태의 데이터를 아코디언 형식으로 렌더링하는 컴포넌트입니다.
아이템별 접고 펼침 기능, 전체 열기/닫기 기능, 커스텀 슬롯 지원, 테마 지정 등의 다양한 옵션을 제공합니다.


### Props
```ts
const props = withDefaults(defineProps<Props>(), {
  theme: THEME_KEYNAME['THEME_1'],      // 테마 ('theme-1')
  items: () => [],                      // 아코디언 아이템 리스트
  useLeftIcon: false,                   // 좌측 아이콘 사용 여부
  useRightIcon: true,                   // 우측 아이콘 사용 여부
  codeTitle: 'codeTitle',               // 각 항목의 제목 필드 키
  codeContent: 'codeContent',           // 각 항목의 내용 필드 키
  codeSelected: 'codeSelected',         // 각 항목의 오픈 여부 필드 키
  totalContentOpen: false               // 전체 펼침 여부
})
```
### Types
```ts
// /src/components/BsAccordion/index.type.ts
export interface Props {
  items?: Record<string, any>[]
  theme?: 'theme-1' | 'theme-2'
  useLeftIcon?: boolean
  useRightIcon?: boolean
  codeTitle?: string
  codeContent?: string
  codeSelected?: string
  totalContentOpen?: boolean
}
```

### Slots
```javascript
<slot name="slotLeftIcon" /> // 좌측 아이콘 커스텀
<slot name="slotRightIcon" /> // 우측 아이콘 커스텀
<slot name="slotTitle" :item="item" /> // 제목 영역 커스텀
<slot name="slotContent" :item="item" :body-content="AccordionBodyItem" /> // 내용 영역 커스텀
```
### Emits
```ts
'click': (item: Record<string, any>) => void
```
### Exposed Methods
```ts
setTotalOpen(): void    // 모든 아코디언 열기
setTotalClose(): void   // 모든 아코디언 닫기
```
### Constant
```ts
// /src/constants/components/BsAccordion/index.ts
export const THEME_KEYNAME = Object.freeze({
  THEME_1: 'theme-1',
  THEME_2: 'theme-2'
})
```
