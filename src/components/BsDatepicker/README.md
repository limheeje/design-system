# BsDatepicker

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-23454&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- 날짜 범위 선택 (isRange)
- 날짜 포맷 조정 (returnValueFormat)
- 선택된 날짜 값 바인딩 (modelValue)
- 색상 옵션 (color)
- 외부 클릭 시 자동 닫힘 처리

## 컴포넌트 설명
BsDatepicker는 날짜 선택을 위한 컴포넌트로, 날짜 단위로 선택하거나 범위(시작일과 종료일)를 선택할 수 있는 기능을 제공합니다. 날짜 포맷 및 반환 형식은 returnValueFormat을 통해 조정할 수 있으며, modelValue로 선택된 날짜 또는 범위를 관리합니다.
## 기능 설명
- isRange: true일 경우, 날짜 범위를 선택하는 UI를 제공합니다. 시작일과 종료일을 지정할 수 있습니다.
- modelValue: 선택된 날짜 또는 범위는 modelValue에 바인딩되어 부모 컴포넌트와 동기화됩니다.
- 날짜 선택: DatePicker를 사용하여 날짜를 선택하며, 범위 선택도 지원합니다.
- 포커스 및 블러 이벤트: 포커스 및 블러 이벤트를 처리하여 UI의 동작을 제어합니다.
- 외부 클릭 처리: 외부 영역을 클릭하면 날짜 선택 레이어가 자동으로 닫히도록 설정됩니다.


### Props
```ts
const props = withDefaults(defineProps<Props>(), {
  color: 'kcpblue/50',               // 기본 색상 설정
  isRange: false,                             // 날짜 범위 선택 여부
  modelValue: '',                             // 선택된 날짜값 또는 범위
  returnValueFormat: DATE_FORMAT['YYYY-MM-DD'] // 반환되는 날짜 형식
})
```
### Types
```ts
// /components/BsDatepicker/index.type.ts
export interface Props {
  color?: string                   // 색상 설정
  isRange?: boolean                // 날짜 범위 선택 여부
  modelValue?: string | Date | Record<string, any>  // 선택된 날짜 값
  returnValueFormat?: string      // 반환 날짜 형식
}
```
### Emits
```ts
'emits': {
  'update:modelValue': (value: string | Date | Record<string, any>) => void,  // 선택된 날짜 또는 범위 업데이트
  'focus': (e: FocusEvent) => void,  // 포커스 이벤트
  'blur': (e: FocusEvent) => void    // 블러 이벤트
}
```

### Slots
```ts
// 'slotSelectSectionRightArea' 슬롯을 사용하여 우측 섹션 커스터마이즈 가능
<slot name="slotSelectSectionRightArea" />
```

