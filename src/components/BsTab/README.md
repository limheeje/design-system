# BsTab

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1508&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록
- theme: 탭의 테마 스타일을 지정합니다. 'rectangle' (기본값) 또는 'radius'로 설정할 수 있습니다.
- color: 탭의 색상을 지정합니다. 기본값은 'Gray/Black'입니다.
- size: 탭의 크기를 설정합니다. 'size-default' (기본값) 또는 'size-small'을 선택할 수 있습니다.
- type: 탭의 스타일을 정의합니다. 'type-line' (기본값) 또는 'type-fill'을 선택할 수 있습니다.
- items: 탭에 표시할 항목들을 배열로 설정합니다. 기본값은 빈 배열입니다.
- swiperObject: Swiper를 사용하는 경우 슬라이드의 설정을 지정합니다. 기본값은 { slidesPerView: 'auto', spaceBetween: 10 }입니다.
## 기능 설명
- modelValue: 현재 선택된 탭의 값입니다. 기본값은 빈 문자열입니다.
- codeItem: 탭 항목에 사용할 슬롯 이름입니다. 기본값은 'codeItem'입니다.
- useSwiper: Swiper를 사용할지 여부를 결정합니다. 기본값은 false입니다.
- returnObject: 탭 항목 클릭 시 객체를 반환할지 여부를 결정합니다. 기본값은 false입니다.
- teleportTo: 탭 내용을 텔레포트할 위치를 설정합니다. 기본값은 빈 문자열입니다.

### Props
```ts
const props = withDefaults(defineProps<Props>(), {
  theme: THEME_KEYNAME.RECTANGLE, // 탭의 테마 스타일, 'rectangle' 또는 'radius' 중 선택, 기본값은 'rectangle'
  color: 'Gray/Black', // 탭의 색상, 기본값은 'Gray/Black'
  size: SIZE_KEYNAME.DEFAULT, // 탭의 크기, 'size-default' 또는 'size-small' 중 선택, 기본값은 'size-default'
  type: TYPE_KEYNAME.LINE, // 탭의 스타일, 'type-line' 또는 'type-fill' 중 선택, 기본값은 'type-line'
  items: () => [], // 탭에 표시될 항목들, 기본값은 빈 배열
  codeItem: 'codeItem', // 탭 항목에 사용되는 슬롯의 이름, 기본값은 'codeItem'
  useSwiper: false, // Swiper 사용 여부, 기본값은 false
  swiperObject: () => ({
    slidesPerView: 'auto', // Swiper의 slidesPerView 설정, 기본값은 'auto'
    spaceBetween: 10, // Swiper의 spaceBetween 설정, 기본값은 10
  }),
  returnObject: false, // 탭 항목 클릭 시 객체를 반환할지 여부, 기본값은 false
  modelValue: '', // 선택된 탭의 값, 기본값은 빈 문자열
  teleportTo: '', // 텔레포트할 위치, 기본값은 빈 문자열
})
```
### Types
```ts
export interface Props {
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME] 
  color?: string 
  size?: (typeof SIZE_KEYNAME)[keyof typeof SIZE_KEYNAME] 
  type?: (typeof TYPE_KEYNAME)[keyof typeof TYPE_KEYNAME] 
  items?: (Record<string, any> | string)[] 
  modelValue?: string | Record<string, any> 
  codeItem?: string 
  useSwiper?: boolean 
  swiperObject?: Record<string, any> 
  returnObject?: boolean 
  teleportTo?: string 
}
```

### Emits
```ts
'emits': {
  'update:modelValue': (value: string | Record<string, any>) => void,  // 선택된 탭 값 업데이트
  'click': (e: Event) => void,  // 탭 항목 클릭 이벤트
}
```


### Constant
```ts
import {DESIGNCONFIG_KEYNAME_COLOR} from '@/themes/DesignConfig'

export const COLOR_KEYNAME = Object.freeze(DESIGNCONFIG_KEYNAME_COLOR)

export const THEME_KEYNAME = Object.freeze({
  RECTANGLE: 'rectangle', // 탭 테마 'rectangle'
  RADIUS: 'radius' // 탭 테마 'radius'
})

export const SIZE_KEYNAME = Object.freeze({
  DEFAULT: 'size-default', // 기본 크기
  SMALL: 'size-small' // 작은 크기
})

export const TYPE_KEYNAME = Object.freeze({
  LINE: 'type-line', // 선 스타일
  FILL: 'type-fill' // 채우기 스타일
})
```

### Slots

```ts
<slot name="slotCodeItem" :item="item" /> // 탭 항목에 표시할 내용을 정의하는 슬롯입니다.
<slot name="slotCodeContent" :item="item" /> //탭 항목에 해당하는 콘텐츠를 정의하는 슬롯입니다.
```
