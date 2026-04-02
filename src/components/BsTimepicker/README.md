# BsTimepicker

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-23453&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록
- Swiper 기반 시간 선택 UI (시/분/AM-PM)
- 테마 컬러: 슬라이드 active 시 --ui-basic-color-primry-primary-01 적용
- 외부 클릭 시 자동 닫힘 처리
- 시/분 선택에 따른 포맷 반환
- 확인 버튼 커스텀 스타일 적용 가능

## 기능 설명
- 시/분/AM-PM 스와이프 UI를 통해 시간 선택 가능
- 외부 영역 클릭 시 자동으로 시간 반영 (onClickOutside)
- focus, blur, change, update:modelValue 이벤트 발생
- 선택된 시간은 modelValue와 returnValueFormat 포맷에 따라 출력됨 (기본: 'HH:mm')
- readonly input 필드 클릭 시 레이어 오픈

### Props

```ts
const props = withDefaults(defineProps<Props>(), {
  modelValue: '',                   // 선택된 시간 값 (예: '13:20')
  returnValueFormat: 'HH:mm'        // 반환 포맷 (dayjs 형식, 기본값 'HH:mm')
})
```

### Types
```ts
export interface Props {
  modelValue?: string
  returnValueFormat?: string
}
```
### Emits
```ts
'emits': {
  'update:modelValue': (value: string) => void,  // 선택된 시간 값을 업데이트
  'change': (el: HTMLElement) => void,           // 확인 버튼 클릭 시 트리거
  'focus': (e: FocusEvent) => void,              // input 포커스
  'blur': (e: FocusEvent) => void                // input 블러
}
```

### Constant

```ts
export const HOURS_ITEMS = ['01', '02', ..., '12']
export const MINUTES_ITEMS = ['00', '01', ..., '59']
export const PERIOD_ITEMS = ['AM', 'PM']          // 오전 / 오후

export const ITEMS_KEYNAME = {
  HOURS: 'hours',
  MINUTES: 'minutes',
  PERIOD: 'period'
}

export const ITEMS_GROUP = [
  { codeName: 'hours', codeItems: HOURS_ITEMS },
  { codeName: 'minutes', codeItems: MINUTES_ITEMS },
  { codeName: 'period', codeItems: PERIOD_ITEMS }
]
```
### Slots

```ts
<slot name="slotInputSectionRightArea" /> // 입력창 우측 영역 (ex. 아이콘, 버튼)
```

