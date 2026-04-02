<script setup lang="ts">
import {computed, ref, watch, onMounted, nextTick} from 'vue'
import {
  WrapperTextarea as Wrapper,
  InputInnerSectionArea,
  InputTextarea,
  InputInnerBottomSectionArea,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  InputByteCheckArea,
  TextareaButtonGroup,
  InputConfirmMasseage
} from '@/components/BsTextarea/index.style'
import {
  INPUT_HEIGHT,
  IS_READONLY,
  IS_DISABLED,
  IS_CONFIRM,
  IS_ERROR,
  IS_FOCUS
} from '@/components/BsInputField/index.style'
import {_toCSSUnit} from '@/themes/DesignConfig'
import type {Props} from '@/components/BsTextarea/index.type'
import {THEME_KEYNAME} from '@/constants/components/BsInputField'

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  theme: THEME_KEYNAME.THEME_1,
  id: '',
  name: '',
  type: 'text',
  modelValue: '',
  readonly: false,
  disabled: false,
  isError: false,
  isConfirm: false,
  placeholder: '',
  errorMessage: '',
  confirmMessage: '',
  useLengthCheck: false,
  useOuterButton: false,
  useResponseHeight: false,
  maxHeight: '',
  maxlength: 0,
  customStyle: {background: '처음기본값'},
  timeRange: '0'
})
const localRef = ref()
const localValue = ref('')
const localIsFocus = ref(false)
const emits = defineEmits(['update:modelValue', 'input', 'focus', 'blur', 'keyup'])
const getCurrentLength = computed(() =>
  localValue.value.length >= Number(props.maxlength) ? props.maxlength : localValue.value.length
)
watch(
  () => props.modelValue,
  (v) => {
    localValue.value = v
  },
  {immediate: true}
)

onMounted(() => {
  nextTick(() => {
    if (typeof window !== 'undefined') {
      setResponHeight(localRef.value)
    }
  })
})

function onInput(e: Event) {
  const inputElement = e.target as HTMLTextAreaElement
  const _setValue = inputElement.value
  inputElement.value = _setValue
  setResponHeight(e)
  emits('input', e)
  emits('update:modelValue', _setValue)
}

function setResponHeight(e: Event | any) {
  const inputElement = (e.target as HTMLTextAreaElement) || (e.$el as HTMLTextAreaElement)
  if (inputElement && props.useResponseHeight) {
    inputElement.style.height = _toCSSUnit(INPUT_HEIGHT)
    inputElement.style.height = _toCSSUnit(`${inputElement.scrollHeight}px`)
  }
}

function setFocus() {
  localRef.value?.$el.focus()
}

function onFocus(e: FocusEvent) {
  emits('focus', e)
  localIsFocus.value = true
}
function onBlur(e: FocusEvent) {
  emits('blur', e)
  localIsFocus.value = false
}
function onKeyup(e: KeyboardEvent) {
  emits('keyup', e)
}

defineExpose({
  setFocus
})
</script>

<template>
  <Wrapper
    :data-theme="props.theme"
    :class="{
      'use-response-height': props.useResponseHeight
    }"
  >
    <InputInnerSectionArea
      :class="{
        [IS_READONLY]: props.readonly,
        [IS_DISABLED]: props.disabled,
        [IS_CONFIRM]: props.isConfirm,
        [IS_ERROR]: props.isError,
        [IS_FOCUS]: localIsFocus
      }"
    >
      <InputTextarea
        :id="props.id"
        ref="localRef"
        :placeholder="props.placeholder"
        :value="localValue"
        :name="props.name"
        :readonly="props.readonly"
        :disabled="props.disabled"
        :maxlength="props.useLengthCheck ? props.maxlength : null"
        :style="{
          'max-height': _toCSSUnit(props.maxHeight)
        }"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @keyup="onKeyup"
      />
      <InputInnerBottomSectionArea
        v-if="($slots.slotTextareaButtonGroup && !props.useOuterButton) || props.useLengthCheck"
      >
        <InputByteCheckArea v-if="props.useLengthCheck">
          {{ getCurrentLength }}/{{ props.maxlength }}
        </InputByteCheckArea>
        <TextareaButtonGroup v-if="$slots.slotTextareaButtonGroup && !props.useOuterButton">
          <slot name="slotTextareaButtonGroup" />
        </TextareaButtonGroup>
      </InputInnerBottomSectionArea>
    </InputInnerSectionArea>
    <InputOuterSectionArea v-if="$slots.slotSupportMessage || props.errorMessage || props.confirmMessage">
      <InputSupportMasseage>
        <slot name="slotSupportMessage" />
      </InputSupportMasseage>
      <InputErrorMasseage>{{ props.errorMessage }}</InputErrorMasseage>
      <InputConfirmMasseage>{{ props.confirmMessage }}</InputConfirmMasseage>
    </InputOuterSectionArea>
    <TextareaButtonGroup v-if="$slots.slotTextareaButtonGroup && props.useOuterButton" class="use-outer-section">
      <slot name="slotTextareaButtonGroup" />
    </TextareaButtonGroup>
  </Wrapper>
</template>
