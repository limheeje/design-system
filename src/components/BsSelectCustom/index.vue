<script setup lang="ts">
import {nextTick, ref, useTemplateRef, watch} from 'vue'
import {
  Wrapper,
  InputInnerSectionArea,
  InputButton,
  DropdownLayer,
  DropdownLayerInner,
  IS_ACTIVE,
  USE_SELECTED_THEME2,
  IS_DROPDOWN_OPEN,
  OptionGroup,
  OptionItem,
  OptionButton,
  InputSectionRightArea,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  InputConfirmMasseage
} from '@/components/BsSelectCustom/index.style'
import {IS_DISABLED, IS_CONFIRM, IS_ERROR, IS_FOCUS} from '@/components/BsInputField/index.style'
import {THEME_KEYNAME} from '@/constants/components/BsInputField'
import type {Props} from '@/components/BsSelectCustom/index.type'
import StringUtil from '@/utils/StringUtil'
import {onClickOutside} from '@vueuse/core'

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  id: '',
  name: '',
  theme: THEME_KEYNAME.THEME_1,
  useSelectedTheme2: false,
  items: () => [],
  readonly: false,
  disabled: false,
  isError: false,
  codeId: 'codeId',
  codeName: 'codeName',
  isConfirm: false,
  modelValue: '',
  errorMessage: '',
  confirmMessage: '',
  returnObject: false,
  customStyle: {background: '처음기본값'}
})
const localIsFocus = ref(false)
const localValue = ref({})
const localRefButton = useTemplateRef('localRefButton')
const localRefLayer = useTemplateRef('localRefLayer')
const isOpen = ref(false)
const localItems = ref(props.items)
const emits = defineEmits(['update:modelValue', 'focus', 'blur', 'click'])

watch(
  () => props.modelValue,
  (v) => {
    localValue.value = localItems.value.find((item) => StringUtil.isLooseEqual(item[props.codeId], v))?.[props.codeName]
  },
  {immediate: true}
)
function onFocus(e: FocusEvent) {
  emits('focus', e)
  localIsFocus.value = true
}
function onBlur(e: FocusEvent) {
  emits('blur', e)
  localIsFocus.value = false
}

function onClickButton() {
  isOpen.value = !isOpen.value
  emits('click')
}

function setButtonFocus() {
  nextTick(() => {
    if (localRefButton.value?.$el) {
      const $el = localRefButton.value.$el as HTMLButtonElement
      $el.focus()
    }
  })
}

function onClickOption(item: Record<string, any>) {
  let _item = item
  if (!props.returnObject) {
    _item = item[props.codeId]
  }
  emits('update:modelValue', _item)
  setButtonFocus()
  isOpen.value = false
}
onClickOutside(localRefLayer, () => {
  isOpen.value = false
})
</script>

<template>
  <Wrapper
    ref="localRefLayer"
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
      @click="onClickButton"
    >
      <InputButton ref="localRefButton" :disabled="props.disabled" @focus="onFocus" @blur="onBlur">
        {{ localValue }}
      </InputButton>

      <InputSectionRightArea>
        <span class="ic-select-arrow"></span>
        <slot name="slotSelectSectionRightArea" />
      </InputSectionRightArea>
    </InputInnerSectionArea>

    <DropdownLayer v-if="isOpen">
      <DropdownLayerInner>
        <OptionGroup>
          <OptionItem v-for="(item, index) in localItems" :key="index">
            <OptionButton
              :class="{
                [IS_ACTIVE]: StringUtil.isLooseEqual(props.modelValue, item[props.codeId]),
                [USE_SELECTED_THEME2]: props.useSelectedTheme2
              }"
              @click="onClickOption(item)"
            >
              {{ item[props.codeName] }}
              <template v-if="$slots.default">
                <slot name="default" :item="item" />
              </template>
            </OptionButton>
          </OptionItem>
        </OptionGroup>
      </DropdownLayerInner>
    </DropdownLayer>
    <InputOuterSectionArea>
      <InputSupportMasseage>
        <slot name="slotSupportMessage" />
      </InputSupportMasseage>
      <InputErrorMasseage>{{ props.errorMessage }}</InputErrorMasseage>
      <InputConfirmMasseage>{{ props.confirmMessage }}</InputConfirmMasseage>
    </InputOuterSectionArea>
  </Wrapper>
</template>
