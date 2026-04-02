<script setup lang="ts">
import {nextTick, onMounted, ref, watch} from 'vue'
import StringUtil from '@/utils/StringUtil'
import {
  Wrapper,
  inputCSS,
  InputLabel,
  InputLabelText,
  InputCheckUI,
  IS_DISABLED,
  USE_THEME_6_CHECKICON
} from '@/components/BsCheckbox/index.style'
import type {Props} from '@/components/BsCheckbox/index.type'
import {THEME_KEYNAME} from '@/constants/components/BsCheckbox/index'

const props = withDefaults(defineProps<Props>(), {
  id: '',
  name: '',
  checked: false,
  disabled: false,
  modelValue: false,
  useTheme6CheckIcon: false,
  theme: THEME_KEYNAME.THEME_1
})

const localId = ref(props.id)
const localName = ref(props.name)
const localValue = ref<boolean>(false)
const localChecked = ref(localValue.value)
const emits = defineEmits(['update:modelValue', 'change'])

watch(
  () => props.modelValue,
  (v) => {
    localValue.value = v
    localChecked.value = v
  },
  {immediate: true}
)

onMounted(() => {
  nextTick(() => {
    const _localId = StringUtil.getUUID()
    localId.value = props.id || _localId
    localName.value = props.name || localId.value
  })
})

function onChange(e: Event) {
  const $input = e.target as HTMLInputElement
  const isChecked = $input.checked
  emits('change', e)
  emits('update:modelValue', isChecked)
}
</script>

<template>
  <Wrapper
    :class="{
      [IS_DISABLED]: props.disabled,
      [USE_THEME_6_CHECKICON]: props.theme === THEME_KEYNAME.THEME_6 && props.useTheme6CheckIcon
    }"
    :data-theme="props.theme"
  >
    <inputCSS
      :id="localId"
      type="checkbox"
      :name="localName"
      :checked="props.checked || localValue"
      :disabled="props.disabled"
      @change="onChange"
    />
    <InputLabel :for="localId">
      <InputCheckUI
        v-if="
          props.theme === THEME_KEYNAME.THEME_1 ||
          props.theme === THEME_KEYNAME.THEME_2 ||
          props.theme === THEME_KEYNAME.THEME_3 ||
          props.theme === THEME_KEYNAME.THEME_4 ||
          props.theme === THEME_KEYNAME.THEME_5
        "
      />
      <InputLabelText v-if="$slots.default"><slot /></InputLabelText>
    </InputLabel>
  </Wrapper>
</template>
