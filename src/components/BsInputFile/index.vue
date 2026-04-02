<script setup lang="ts">
import {ref, watch, inject} from 'vue'
import {
  Wrapper,
  InputInnerSectionArea,
  InputField,
  InputFieldFile,
  InputSectionLeftArea,
  InputSectionRightArea,
  InputOuterSectionArea,
  InputSupportMasseage,
  IS_DISABLED,
  IS_CONFIRM,
  IS_ERROR,
  IS_FOCUS,
  InputErrorMasseage,
  InputConfirmMasseage
} from '@/components/BsInputFile/index.style'
import type {Props} from '@/components/BsInputFile/index.type'
import {THEME_KEYNAME} from '@/constants/components/BsInputField'
import {ACCEPT_CODE} from '@/constants/components/BsInputFile'
import ObjectUtil from '@/utils/ObjectUtil'
import StringUtil from '@/utils/StringUtil'
import RegExp from '@/constants/RegExp'

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
const localRef = ref()
const localValue = ref<object>([])
const localValueName = ref('')
const localPreviewBase64Code = ref<PreviewItem[]>([])
const localIsFocus = ref(false)
const ACCEPT_CODE_IMAGE = ACCEPT_CODE['IMAGE']
const ACCEPT_CODE_VIDEO = ACCEPT_CODE['VIDEO']
const ACCEPT_CODE_AUDIO = ACCEPT_CODE['AUDIO']
const ACCEPT_CODE_DOC = ACCEPT_CODE['DOC']
const ACCEPT_CODE_TXT = ACCEPT_CODE['TXT']
const ACCEPT_CODE_ZIP = ACCEPT_CODE['ZIP']
const REGEXP_TEST_IMAGE = RegExp['testFileAcceptImage']
const REGEXP_TEST_VIDEO = RegExp['testFileAcceptVideo']
const REGEXP_TEST_AUDIO = RegExp['testFileAcceptAudio']
const REGEXP_TEST_DOC = RegExp['testFileAcceptDocument']
const REGEXP_TEST_TXT = RegExp['testFileAcceptText']
const REGEXP_TEST_ZIP = RegExp['testFileAcceptZip']
const addModal = inject('addModal', (params?: Record<string, any>) => params)
const emits = defineEmits(['update:modelValue', 'focus', 'blur', 'change'])

watch(
  () => props.modelValue,
  (v) => {
    if (ObjectUtil.isArray(v) && v.length) {
      localValueName.value = `${v[0].name}${v.length - 1 ? ` 외 ${v.length - 1}개 파일` : ``}`
    } else {
      localValueName.value = ''
    }
    localValue.value = v
  },
  {immediate: true}
)

function setFocus() {
  localRef.value?.$el.focus()
}

function onChange(e: Event) {
  const target = e.target as HTMLInputElement
  const files = target.files as FileList
  const _localValue = ObjectUtil.isNull(setValidateType(files))
    ? []
    : !setValidateType(files)
      ? addModal({
          masseage: `문서 형식에 맞지않습니다.<br/><br/>※ 허용된 문서형식: ${props.accept}`
        })
      : (() => {
          localPreviewBase64Code.value = []
          return Array.from(files).map((file, index) => {
            const _data: FileItem = {
              uuid: StringUtil.getUUID(`FILE_UPLOAD_SQ${index}_`),
              name: file.name,
              file
            }
            if (props.usePreview) {
              ;(async () => {
                localPreviewBase64Code.value.push({
                  uuid: _data.uuid,
                  name: _data.name,
                  previewSrc: (await getFileReader(file)) as string | undefined
                })
              })()
            }
            return _data
          })
        })()
  if (_localValue && _localValue.length) {
    emits('update:modelValue', _localValue)
    emits('change', target)
  }
}

function setValidateType(files: FileList) {
  const _files = files
  const _accept = props.accept
  let _regExp = /\*/
  if (!_files || !_files.length) return null
  if (!_accept) return true
  switch (_accept) {
    case ACCEPT_CODE_IMAGE:
      _regExp = REGEXP_TEST_IMAGE
      break
    case ACCEPT_CODE_VIDEO:
      _regExp = REGEXP_TEST_VIDEO
      break
    case ACCEPT_CODE_AUDIO:
      _regExp = REGEXP_TEST_AUDIO
      break
    case ACCEPT_CODE_DOC:
      _regExp = REGEXP_TEST_DOC
      break
    case ACCEPT_CODE_TXT:
      _regExp = REGEXP_TEST_TXT
      break
    case ACCEPT_CODE_ZIP:
      _regExp = REGEXP_TEST_ZIP
      break
  }

  return Array.from(_files).every((file) => _regExp.test((file as FileList[0]).type))
}

function getFileReader(file: File) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    const {type} = file
    console.log(file)
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result as string | undefined
      if (REGEXP_TEST_IMAGE.test(type)) {
        resolve(result)
      } else if (REGEXP_TEST_VIDEO.test(type)) {
        resolve('/images/@thumb_video.jpg')
      } else if (REGEXP_TEST_AUDIO.test(type)) {
        resolve('/images/@thumb_audio.jpg')
      } else if (REGEXP_TEST_DOC.test(type)) {
        resolve('/images/@thumb_doc.jpg')
      } else if (REGEXP_TEST_TXT.test(type)) {
        resolve('/images/@thumb_txt.jpg')
      } else if (REGEXP_TEST_ZIP.test(type)) {
        resolve('/images/@thumb_zip.jpg')
      }
    }
    reader.readAsDataURL(file)
  })
}

function onFocus(e: FocusEvent) {
  emits('focus', e)
  localIsFocus.value = true
}

function onBlur(e: FocusEvent) {
  emits('blur', e)
  localIsFocus.value = false
}

function onClickFileDelete(uuid: string) {
  if (ObjectUtil.isArray(localValue.value)) {
    const _localValue = localValue.value.filter((item) => item.uuid !== uuid)
    localPreviewBase64Code.value = localPreviewBase64Code.value.filter((item) => item.uuid !== uuid)
    emits('update:modelValue', _localValue)
    localRef.value.$el.value = null
  }
}

defineExpose({
  setFocus
})
</script>

<template>
  <Wrapper :as="props.tag" :data-theme="props.theme">
    <InputInnerSectionArea
      :class="{
        [IS_DISABLED]: props.disabled,
        [IS_CONFIRM]: props.isConfirm,
        [IS_ERROR]: props.isError,
        [IS_FOCUS]: localIsFocus
      }"
    >
      <InputSectionLeftArea v-if="$slots.slotInputSectionLeftArea">
        <slot name="slotInputSectionLeftArea" />
      </InputSectionLeftArea>
      <InputField type="text" readonly tabindex="-1" :placeholder="props.placeholder" :value="localValueName" />
      <InputFieldFile
        :id="props.id"
        ref="localRef"
        type="file"
        :name="props.name"
        :multiple="props.multiple"
        :disabled="props.disabled"
        :accept="props.accept || null"
        @change="onChange"
        @focus="onFocus"
        @blur="onBlur"
      />
      <InputSectionRightArea>
        <slot name="slotInputSectionRightArea" />
      </InputSectionRightArea>
    </InputInnerSectionArea>
    <InputOuterSectionArea v-if="$slots.slotSupportMessage || props.errorMessage || props.confirmMessage">
      <InputErrorMasseage>{{ props.errorMessage }}</InputErrorMasseage>
      <InputConfirmMasseage>{{ props.confirmMessage }}</InputConfirmMasseage>
      <InputSupportMasseage>
        <slot name="slotSupportMessage" />
      </InputSupportMasseage>
    </InputOuterSectionArea>
    <div class="thumb-grid">
      <template v-for="(item, __index) in localPreviewBase64Code" :key="__index">
        <div class="thumb-grid-item">
          <template v-if="item.previewSrc">
            <div class="thumb-grid-img">
              <button class="thumb-grid-delbtn" @click="onClickFileDelete((item as FileItem).uuid)">삭제</button>
              <img :src="item.previewSrc" :alt="item.name" />
            </div>
            <!-- <span class="thumb-grid-name">{{ item.name }}</span> -->
          </template>
          <template v-else> 대기중 </template>
        </div>
      </template>
    </div>
  </Wrapper>
</template>

<style scope lang="scss">
.thumb-grid {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .thumb-grid-item {
    display: inline-flex;
    .thumb-grid-img {
      position: relative;
      background: #eee;
      border-radius: 10px;
      width: 100px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
      .thumb-grid-delbtn {
        position: absolute;
        right: 5px;
        top: 5px;
        font-size: 0;
        background: red;
        border: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
      }
    }
    .thumb-grid-name {
      font-size: 13px;
      color: #000;
    }
  }
}
</style>
