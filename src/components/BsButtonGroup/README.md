# BsButtonGroup

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1503&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록
- gap: 버튼 그룹 항목 간의 간격을 설정하여, 버튼 사이의 여백을 조정할 수 있습니다.
- align: 버튼 그룹의 정렬을 설정하여, justify-content를 이용해 버튼 그룹의 배치를 변경할 수 있습니다.
  - ALIGN_KEYNAME['JUSTIFY_START']: 왼쪽 정렬
  - ALIGN_KEYNAME['JUSTIFY_CENTER']: 가운데 정렬
  - ALIGN_KEYNAME['JUSTIFY_END']: 오른쪽 정렬
## 컴포넌트 정보
- 버튼 그룹 정렬:
  - align prop을 통해 버튼 그룹의 정렬 방식을 제어할 수 있습니다. 기본값은 왼쪽 정렬(JUSTIFY_START)이며, JUSTIFY_CENTER와 JUSTIFY_END 옵션을 선택하여 정렬 방식을 변경할 수 있습니다.
- 버튼 간 간격 조정:
  - gap prop을 사용하여 버튼 그룹 내의 버튼들 사이에 간격을 설정할 수 있습니다. 기본값은 10px이며, 필요에 따라 간격을 조정할 수 있습니다.
- 슬롯:
  - BsButtonGroup 컴포넌트는 slot을 통해 자식 버튼을 자유롭게 삽입할 수 있도록 되어 있어, 부모 컴포넌트에서 버튼을 추가하고 스타일을 쉽게 커스터마이즈할 수 있습니다.

### Props
```ts
const props = withDefaults(defineProps<Props>(),{
  gap: '10px', // 기본 간격
  align: ALIGN_KEYNAME['JUSTIFY_START'] // 기본 정렬은 시작
})
```
### Types
```ts
export interface Props {
  gap?: string
  align?: string
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

