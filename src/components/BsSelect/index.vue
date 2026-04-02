<script setup lang="ts">
import {ref} from 'vue'
import {
  Wrapper,
  InputInnerSectionArea,
  InputSelect,
  IS_DROPDOWN_OPEN,
  InputSectionRightArea,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  InputConfirmMasseage
} from '@/components/BsSelect/index.style'
import {IS_DISABLED, IS_CONFIRM, IS_ERROR, IS_FOCUS} from '@/components/BsInputField/index.style'
import {THEME_KEYNAME} from '@/constants/components/BsInputField'
import type {Props} from '@/components/BsSelect/index.type'

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  id: '',
  name: '',
  items: () => [],
  theme: THEME_KEYNAME.THEME_1,
  readonly: false,
  disabled: false,
  isError: false,
  isConfirm: false,
  codeId: 'codeId',
  codeName: 'codeName',
  modelValue: '',
  errorMessage: '',
  confirmMessage: '',
  customStyle: {background: '처음기본값'}
})
const localIsFocus = ref(false)
const localItems = ref(props.items)
const isOpen = ref(false)
const emits = defineEmits(['update:modelValue', 'focus', 'blur', 'change'])

function onFocus(e: FocusEvent) {
  emits('focus', e)
  localIsFocus.value = true
}
function onBlur(e: FocusEvent) {
  emits('blur', e)
  localIsFocus.value = false
  isOpen.value = false
}
function onChange(e: Event) {
  const $target = e.target as HTMLSelectElement
  emits('change', e)
  emits('update:modelValue', $target.value)
  localIsFocus.value = false
}
function onClick() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <Wrapper
    :as="props.tag"
    :data-theme="props.theme"
    :class="{
      [IS_DROPDOWN_OPEN]: isOpen
    }"
  >
    <InputInnerSectionArea
      :class="{
        [IS_DISABLED]: props.disabled,
        [IS_CONFIRM]: props.isConfirm,
        [IS_ERROR]: props.isError,
        [IS_FOCUS]: localIsFocus
      }"
    >
      <InputSelect
        :disabled="props.disabled"
        :value="props.modelValue"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"
        @click="onClick"
      >
        <template v-if="!$slots.default">
          <template v-if="props.items.length">
            <option v-for="(item, index) in localItems" :key="index" :value="item[props.codeId]">
              {{ item[props.codeName] }}
              <slot name="default" :item="item" />
            </option>
          </template>
        </template>
        <template v-else>
          <slot name="default" />
        </template>
      </InputSelect>
      <InputSectionRightArea>
        <span class="ic-select-arrow"></span>
        <slot name="slotSelectSectionRightArea" />
      </InputSectionRightArea>
    </InputInnerSectionArea>
    <InputOuterSectionArea>
      <InputSupportMasseage>
        <slot name="slotSupportMessage" />
      </InputSupportMasseage>
      <InputErrorMasseage>{{ props.errorMessage }}</InputErrorMasseage>
      <InputConfirmMasseage>{{ props.confirmMessage }}</InputConfirmMasseage>
    </InputOuterSectionArea>
  </Wrapper>
</template>
