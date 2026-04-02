# BsBreadcrumb


## 컴포넌트 디자인커스텀 목록

- 홈 버튼 텍스트 커스텀 가능
- 각 아이템 라벨 및 경로 키 커스텀 가능
- 현재 경로 기준으로 is-active 클래스 자동 부여

### 컴포넌트 정보
라우터 경로를 기반으로 한 Breadcrumb(브레드크럼) 컴포넌트입니다.
홈 버튼 클릭 시 '/'로 이동하며, 각 항목은 지정된 경로로 이동합니다.
현재 라우터 경로와 일치하는 항목에는 is-active 클래스가 적용됩니다.
click 이벤트로 각 항목 클릭 시 path 값을 전달합니다.


### 기능설명
- items는 계층형 구조의 메뉴 데이터입니다.
- 각 메뉴 항목 내 하위 리스트는 codeContent 필드를 통해 접근합니다.
- 하위 메뉴 항목 클릭 시 router.push(link) 수행
- 현재 경로(route.path)와 메뉴 링크값이 일치하면 IS_SELECTED 클래스가 적용됩니다.


### Props
```ts
const props = withDefaults(defineProps<Props>(), {
  homeName: '홈', // 홈 버튼에 표시할 이름
  items: () => [], // Breadcrumb 아이템 배열
  codeName: 'name', // 항목에서 라벨로 사용할 key
  codePath: 'path' // 항목에서 경로로 사용할 key
})
```
### Constant
```ts
/src/constants/components/BsBreadcrumb/index.ts

export const CODE_KEYNAME = Object.freeze({
  NAME: 'name',
  PATH: 'path'
})
```
### Types
```ts
///src/components/BsBreadcrumb/index.type.ts

export interface Props {
  tag?: string
  homeName?: string
  items?: Record<string, any>[]
  codeName?: string
  codePath?: string
}
```
