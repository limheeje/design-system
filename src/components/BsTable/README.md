# BsTable

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/fVKfBzkZDtIOrSVzVC8muN/KCP-%EA%B3%B5%ED%86%B5-%EA%B8%B0%EB%8A%A5-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=5502-8679&t=revohFOYsFE3k35H-0)

## 컴포넌트 디자인커스텀 목록
- 텍스트(사이즈, 컬러, 폰트 웨이트)
- 라인(컬러)
- Table 내 bg 컬러
- 각 셀 마다 패딩 값 조절(가로, 세로)
- 정렬 (가운데정렬, 왼쪽정렬)
## 컴포넌트 정보
- BsTable:
  - props.theme 선택  THEME_1 | THEME_2 | THEME_3 3가지 타입 선택가능
  - useLeft th+td 타입의 테이블 유무
  - useXsroll 테이블 랩핑 X스크롤 사용유무
- BsColgroup, BsCol, BsThead, BsTbody:
  - html.colgroup, html.col, html.thead, html.tbody 역할
- BsTh:
  - props.textAlign 텍스트 정렬 사용가능
  - colspan, rowspan 사용가능 
- BsTd:
  - props.textAlign 텍스트 정렬 사용가능
  - colspan, rowspan 사용가능

### Props
```ts
const props = withDefaults(defineProps<Types>(), {
  theme: THEME_KEYNAME['THEME_1'], // THEME_1 | THEME_2 | THEME_3
  useLeft: false, //th+td 형식인치 체크
  useXscroll: false // x스크롤 사용유무
})
```
### Types
```ts
export interface Types {
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  useLeft?: boolean
  useXscroll?: boolean
}
```
### Constant
```ts
export const THEME_KEYNAME = Object.freeze({
  THEME_1: 'theme-1',
  THEME_2: 'theme-2',
  THEME_3: 'theme-3'
})
```

