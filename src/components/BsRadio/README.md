# BsRadio

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/ZEt2DDonRoeY3jUHWonV9S/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8?node-id=43-1501&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- THEME_1: 기본 테마
- THEME_2: 기본 테마 2
- THEME_3: 기본 테마 3
- THEME_4: Form 라디오 버튼 스타일 1
- THEME_5: Form 라디오 버튼 스타일 2
- THEME_6: 버튼 형태 라디오 (아이콘 있음, useTheme6CheckIcon 사용)

## 기능 설명
- v-model을 통한 양방향 바인딩 지원
- checked props로 초기 선택 가능
- change 이벤트로 상태 변경 감지
- UUID 생성으로 id, name 자동 처리
- THEME_6 선택 시 체크 아이콘 표시 (옵션)

### Props

```ts
const props = withDefaults(defineProps<Props>(), {
id: string = ''                        // input id (없으면 UUID 자동 생성)
name: string = ''                      // input name (없으면 UUID로 자동 설정됨)
checked: boolean = false               // 기본 선택 여부
disabled: boolean = false              // 비활성화 여부
value: string = ''                     // 라디오 버튼의 실제 값
modelValue: string = ''                // v-model 양방향 바인딩 값
useTheme6CheckIcon: boolean = false    // THEME_6 사용 시 체크 아이콘 표시 여부
theme: 'theme-1' | 'theme-2' | 'theme-3' | 'theme-4' | 'theme-5' | 'theme-6' | 'checkbox-theme-1' = 'theme-4' // 테마 설정
})
```

### Types
```ts
export interface Props {
  id?: string                  
  name?: string                
  value?: string               
  modelValue?: string          
  checked?: boolean            
  disabled?: boolean           
  useTheme6CheckIcon?: boolean 
  theme?: 'theme-1' | 'theme-2' | 'theme-3' | 'theme-4' | 'theme-5' | 'theme-6' | 'checkbox-theme-1' 
}
```
### Emits
```ts
'emits': {
  'update:modelValue': (value: string) => void, // 선택된 값으로 v-model 업데이트
  'change': (e: Event) => void                 // 변경 이벤트 발생 시 전달
}
```

### Constant

```ts
export const THEME_KEYNAME = Object.freeze({
  THEME_1: 'theme-1',
  THEME_2: 'theme-2',
  THEME_3: 'theme-3',
  THEME_4: 'theme-4',
  THEME_5: 'theme-5',
  THEME_6: 'theme-6',
  CHECKBOX_THEME_1: 'checkbox-theme-1'
})
```
### Slots

```ts
<slot /> // 라벨 텍스트 영역
```

