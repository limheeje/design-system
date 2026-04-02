<script setup lang="ts">
import {ref, watch} from 'vue'
import {
  Wrapper,
  InputInnerSectionArea,
  InputField,
  InputSectionLeftArea,
  InputSectionRightArea,
  InputValueTimerange,
  InputValueResetButton,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  IS_READONLY,
  IS_DISABLED,
  IS_CONFIRM,
  IS_ERROR,
  IS_FOCUS,
  InputConfirmMasseage
} from '@/components/BsInputField/index.style'
import {INPUT_VALIDATE} from '@/constants/components/BsInputField/index'
import regExp from '@/constants/RegExp'
import StringUtil from '@/utils/StringUtil'
import type {Props} from '@/components/BsInputField/index.type'
import {THEME_KEYNAME} from '@/constants/components/BsInputField'

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  theme: THEME_KEYNAME.THEME_1,
  id: '',
  name: '',
  type: 'text',
  inputFilter: INPUT_VALIDATE.ALL,
  readonly: false,
  disabled: false,
  isError: false,
  isConfirm: false,
  placeholder: 'Placeholder text',
  errorMessage: '',
  confirmMessage: '',
  useResetButton: true,
  customStyle: {background: '처음기본값'},
  timeRange: false
})

const localRef = ref()
const localValue = ref('')
const localIsFocus = ref(false)
const emits = defineEmits(['update:modelValue', 'click:delete', 'input', 'focus', 'blur', 'keyup'])

watch(
  () => props.modelValue,
  (v) => {
    localValue.value = setValue(v)
  },
  {immediate: true}
)

function onInput(e: Event) {
  const inputElement = e.target as HTMLInputElement
  const _setValue = setValue(inputElement.value)
  inputElement.value = _setValue
  emits('input', e)
  emits('update:modelValue', _setValue)
}

function onClickReset() {
  emits('update:modelValue', '')
  emits('click:delete', '')
  setFocus()
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

function setValue(v: any) {
  let _v = v
  switch (props.inputFilter) {
    case INPUT_VALIDATE.KO:
      _v = v.replace(new RegExp(regExp.korReplace), '')
      break
    case INPUT_VALIDATE.EN:
      _v = v.replace(new RegExp(regExp.enReplace), '')
      break
    case INPUT_VALIDATE.NUMBER:
      _v = v.replace(new RegExp(regExp.numInputReplace), '')
      break
    case INPUT_VALIDATE.KO_SPECIAL:
      _v = v.replace(new RegExp(regExp.korSpecialReplace), '')
      break
    case INPUT_VALIDATE.EN_SPECIAL:
      _v = v.replace(new RegExp(regExp.enSpecialReplace), '')
      break
    case INPUT_VALIDATE.PRICE_COMMA:
      _v = StringUtil.setPriceComma(v.replace(/[^0-9]/g, ''))
      _v = _v === '0' ? '' : _v
      break
  }
  return _v
}

defineExpose({
  setFocus
})
</script>

<template>
  <Wrapper :as="props.tag" :data-theme="props.theme">
    <InputInnerSectionArea
      :class="{
        [IS_READONLY]: props.readonly,
        [IS_DISABLED]: props.disabled,
        [IS_CONFIRM]: props.isConfirm,
        [IS_ERROR]: props.isError,
        [IS_FOCUS]: localIsFocus
      }"
    >
      <InputSectionLeftArea v-if="$slots.slotInputSectionLeftArea">
        <slot name="slotInputSectionLeftArea" />
      </InputSectionLeftArea>
      <InputField
        :id="props.id"
        ref="localRef"
        :type="props.type"
        :placeholder="props.placeholder"
        :value="localValue"
        :name="props.name"
        :readonly="props.readonly"
        :disabled="props.disabled"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @keyup="onKeyup"
      />
      <InputSectionRightArea>
        <InputValueResetButton
          v-if="localValue && !props.disabled && props.useResetButton"
          data-testid="input-reset-button"
          @click="onClickReset"
        />
        <slot name="slotInputSectionRightArea" />
      </InputSectionRightArea>
    </InputInnerSectionArea>
    <InputOuterSectionArea
      v-if="$slots.slotSupportMessage || props.errorMessage || props.confirmMessage || props.timeRange"
    >
      <InputSupportMasseage>
        <slot name="slotSupportMessage" />
      </InputSupportMasseage>
      <InputErrorMasseage>{{ props.errorMessage }}</InputErrorMasseage>
      <InputConfirmMasseage>{{ props.confirmMessage }}</InputConfirmMasseage>
      <InputValueTimerange v-if="props.timeRange"> 유효시간 : {{ props.timeRange }} </InputValueTimerange>
    </InputOuterSectionArea>
  </Wrapper>
</template>
