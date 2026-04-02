# BsAccordionMenu

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1505&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- 아코디언 테마 선택 (THEME_1, THEME_2)
- 좌측 아이콘 사용 여부
- 각 필드명(codeTitle, codeContent, codeLabel, codeSelected) 커스터마이징
- 현재 라우트 경로 기반 메뉴 선택 처리
- 커서 hover 효과 및 선택 스타일 지정

### 컴포넌트 정보
BsAccordionMenu는 BsAccordion 컴포넌트를 기반으로 한 아코디언 메뉴 컴포넌트입니다.
vue-router와 연동하여 현재 페이지 경로에 따라 메뉴 항목을 자동 선택하며, 클릭 시 router.push로 이동됩니다.
레이블/링크 필드명을 자유롭게 설정 가능하며, 테마 및 아이콘도 유연하게 커스터마이징할 수 있습니다.


### 기능설명
- items는 계층형 구조의 메뉴 데이터입니다.
- 각 메뉴 항목 내 하위 리스트는 codeContent 필드를 통해 접근합니다.
- 하위 메뉴 항목 클릭 시 router.push(link) 수행
- 현재 경로(route.path)와 메뉴 링크값이 일치하면 IS_SELECTED 클래스가 적용됩니다.


### Props
```ts
const props = withDefaults(defineProps<Props>(), {
  theme: THEME_KEYNAME['THEME_1'],      // 테마 ('theme-1')
  items: () => [],                      // 아코디언 메뉴 리스트
  useLeftIcon: false,                   // 좌측 아이콘 사용 여부
  codeTitle: 'codeTitle',               // 아코디언 헤더 타이틀 필드명
  codeLabel: 'codeLabel',               // 메뉴 라벨 필드명
  codeContent: 'codeContent',           // 하위 메뉴 리스트 필드명
  codeSelected: 'codeSelected'          // 펼침 여부 필드명
})
```
### Types
```ts
// /components/BsAccordionMenu/index.type.ts
export interface Props {
  theme?: 'theme-1' | 'theme-2'
  items?: Record<string, any>[]
  useLeftIcon?: boolean
  codeTitle?: string
  codeLabel?: string
  codeContent?: string
  codeSelected?: string
}
```

### Slots
```ts
<slot name="slotLeftIcon" /> // 좌측 아이콘 커스텀  
<slot name="slotRightIcon" /> // 우측 아이콘 커스텀  
<slot name="slotTitle" :item="item" /> // 제목 영역 커스텀  
<slot name="slotContent" :item="item" :body-content="AccordionBodyItem" /> // 내용 영역 커스텀
```
