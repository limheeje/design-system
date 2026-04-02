<script setup lang="ts">
import {ref, watch} from 'vue'
import BsInputField from '@/components/BsInputField/index.vue'
import {InputValueVisbileButton} from '@/components/BsInputPassword/index.style'
import type {Props} from '@/components/BsInputPassword/index.type'
import {THEME_KEYNAME} from '@/constants/components/BsInputField'

const LOCAL_KEYNAME = Object.freeze({
  PASSWORD: 'password',
  TEXT: 'text'
})
const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  id: '',
  name: '',
  theme: THEME_KEYNAME['THEME_1'],
  errorMessage: '',
  confirmMessage: '',
  useResetButton: true,
  useVisibleButton: false,
  readonly: false,
  disabled: false,
  isError: false,
  isConfirm: false,
  modelValue: ''
})
const localValue = ref('')
const localType = ref('password')
const emits = defineEmits(['update:modelValue', 'click:delete', 'input', 'focus', 'blur', 'keyup'])

watch(
  () => props.modelValue,
  (v) => {
    localValue.value = v
  },
  {immediate: true}
)

function onInput(e: Event) {
  const inputElement = e.target as HTMLInputElement
  const _setValue = inputElement.value
  inputElement.value = _setValue
  emits('input', e)
  emits('update:modelValue', _setValue)
}

function onVisibleButton() {
  localType.value = localType.value === LOCAL_KEYNAME['PASSWORD'] ? LOCAL_KEYNAME['TEXT'] : LOCAL_KEYNAME['PASSWORD']
}

function onFocus(e: FocusEvent) {
  emits('focus', e)
}
function onBlur(e: FocusEvent) {
  emits('blur', e)
}
function onKeyup(e: KeyboardEvent) {
  emits('keyup', e)
}

function onClickReset() {
  emits('update:modelValue', '')
}
</script>

<template>
  <BsInputField
    :id="props.id"
    v-model="localValue"
    :type="localType"
    :name="props.name"
    :theme="props.theme"
    :placeholder="props.placeholder"
    :use-reset-button="props.useResetButton"
    :error-message="props.errorMessage"
    :confirm-message="props.confirmMessage"
    :readonly="props.readonly"
    :disabled="props.disabled"
    :is-error="props.isError"
    :is-confirm="props.isConfirm"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
    @keyup="onKeyup"
    @click:delete="onClickReset"
  >
    <template v-if="$slots.slotInputSectionLeftArea" #slotInputSectionLeftArea>
      <slot name="slotInputSectionLeftArea" />
    </template>
    <template v-if="$slots.slotSupportMessage" #slotSupportMessage>
      <slot name="slotSupportMessage" />
    </template>
    <template v-if="$slots.slotInputSectionRightArea || props.useVisibleButton" #slotInputSectionRightArea>
      <InputValueVisbileButton
        v-if="props.useVisibleButton && localValue"
        :class="{
          'is-active': localType === LOCAL_KEYNAME['TEXT']
        }"
        @click="onVisibleButton"
      />
      <slot name="slotInputSectionRightArea" />
    </template>
  </BsInputField>
</template>
