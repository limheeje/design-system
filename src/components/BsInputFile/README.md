# BsInputFile

## 해당 컴포넌트 연결링크

- [Pigma](https://www.figma.com/design/fVKfBzkZDtIOrSVzVC8muN/KCP-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-RESP?node-id=3743-14847&p=f&m=dev)

## 컴포넌트 디자인커스텀 목록

- theme 값을 통해 테마 스타일 지정 가능
- tag 값을 통해 최외곽 Wrapper 태그 커스텀 가능
- 각 섹션 커스텀을 위한 slot 지원
- 에러, 확인, 서포트 메시지 영역 커스텀 가능
- 파일 유효성체크

## 기능 설명
- 파일 업로드 기능을 제공하며, 미리보기를 지원함 (usePreview)
- 허용된 파일 유형(accept)을 지정하고 필터링 가능
- 파일 추가 시 썸네일 생성 및 삭제 기능 제공
- focus/blur/change 이벤트 핸들링 지원
- 파일 유효성 검증 및 사용자 정의 모달 노출 처리 포함

#### 파일 타입(accept) 확인 및 유효성 검사
```ts
// /src/constants/RegExp.ts
{
  ...
  testFileAcceptDocument:
    /^application\/(pdf|msword|vnd\.ms-excel|vnd\.openxmlformats-officedocument\.(wordprocessingml|spreadsheetml|presentationml)\.document)$|^text\/plain$|^application\/json$/,
  testFileAcceptImage: /^image\/(jpeg|png|gif|bmp|svg\+xml)$/,
  testFileAcceptText: /^text\/.+$|^application\/(json|xml)$/,
  testFileAcceptVideo: /^video\/.+$/,
  testFileAcceptAudio: /^audio\/.+$/,
  testFileAcceptZip: /^application\/(zip|x-rar-compressed|x-7z-compressed)$/
  ...
}
```
```ts
const ACCEPT_CODE_IMAGE = ACCEPT_CODE[**'IMAGE'**]
const ACCEPT_CODE_VIDEO = ACCEPT_CODE[**'VIDEO'**]
const ACCEPT_CODE_AUDIO = ACCEPT_CODE[**'AUDIO'**]
const ACCEPT_CODE_DOC = ACCEPT_CODE[**'DOC'**]
const ACCEPT_CODE_TXT = ACCEPT_CODE[**'TXT'**]
const ACCEPT_CODE_ZIP = ACCEPT_CODE[**'ZIP'**]
```
### Props

```ts
const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  id: '',
  name: '',
  theme: THEME_KEYNAME['THEME_1'],
  modelValue: () => [],
  disabled: false,
  isConfirm: false,
  isError: false,
  multiple: false,
  usePreview: false,
  placeholder: '파일을 첨부해주세요',
  accept: ACCEPT_CODE['ALL'],
  errorMessage: '',
  confirmMessage: ''
})
```

### Types
```ts
export interface Props {
  tag?: string
  theme?: string
  name?: string
  id?: string
  modelValue?: object
  multiple?: boolean
  disabled?: boolean
  placeholder?: string
  accept?: (typeof ACCEPT_CODE)[keyof typeof ACCEPT_CODE]
  isConfirm?: boolean
  isError?: boolean
  usePreview?: boolean
  errorMessage?: string
  confirmMessage?: string
}

interface PreviewItem {
  uuid?: string
  previewSrc?: string
  name?: string
}

interface FileItem {
  uuid: string
  name: string
  file: File
}
```
### Emits
```ts
'emits': {
  'update:modelValue': (value: object[]) => void,    // 파일 리스트 변경 시 전달
  'focus': (e: FocusEvent) => void                   // focus 진입 시
  'blur': (e: FocusEvent) => void                    // focus 이탈 시
  'change': (e: Event) => void                       // input[type="file"] 변경 시
}
```




### Constant

```ts
export const ACCEPT_CODE = Object.freeze({
  ALL: '',
  IMAGE: 'image/*',
  VIDEO: 'video/*',
  AUDIO: 'audio/*',
  DOC: '.pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, text/plain, application/json',
  TXT: 'text/plain, text/csv, application/json, application/xml, text/xml, text/html',
  ZIP: '.zip, .rar, .7z'
})
```

### Slots

```ts
<slot name="slotInputSectionLeftArea" /> // 좌측 콘텐츠 영역
<slot name="slotInputSectionRightArea" /> // 우측 콘텐츠 영역
<slot name="slotSupportMessage" /> // 서포트 메시지 영역
```
### Expose Methods

```ts
setFocus(): void    // 내부 input[type=file]에 포커스 이동
```
