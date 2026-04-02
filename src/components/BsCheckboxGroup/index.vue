<script setup lang="ts">
import {ref, watch} from 'vue'
import BsCheckbox from '@/components/BsCheckbox/index.vue'
import type {Props} from '@/components/BsCheckboxGroup/index.type'
import StringUtil from '@/utils/StringUtil'
import {THEME_KEYNAME} from '@/constants/components/BsCheckbox/index'
import {THEME_KEYNAME as CHECKGROUP_THEME_KEYNAME} from '@/constants/components/BsCheckboxGroup/index'
import {Items, Item} from '@/components/BsCheckboxGroup/index.style'
import _ from 'lodash'

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  modelValue: () => [],
  theme: 'default',
  disabled: false,
  useTheme6CheckIcon: false
})
const localValue = ref<object[]>([])
const emits = defineEmits(['update:modelValue', 'change'])

watch(
  () => props.modelValue,
  (v) => {
    localValue.value = v
  },
  {immediate: true}
)

function isChecked(item: Record<string, any>, v: object[]) {
  return _.some(v, item)
}

function onChange(e: Event, item: Record<string, any>) {
  const _e = e.target as HTMLInputElement
  let _items = localValue.value
  if (_e.checked) {
    _items.push(item)
  } else {
    _items = _items.filter((__item) => !StringUtil.isEqual(item, __item))
  }
  emits('change', e)
  emits('update:modelValue', _items)
}

function setTheme() {
  let themeName: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME] = THEME_KEYNAME.THEME_1
  switch (props.theme) {
    case CHECKGROUP_THEME_KEYNAME.THEME_1:
    case CHECKGROUP_THEME_KEYNAME.THEME_2:
      themeName = THEME_KEYNAME.THEME_6 //THEME_6: 'theme-6', //Checkbox&Radio 테마6 (Button)
      break
  }
  return themeName
}
</script>

<template>
  <Items :data-theme="props.theme">
    <Item v-for="(item, index) in props.items" :key="index">
      <BsCheckbox
        :theme="setTheme()"
        :use-theme6-check-icon="props.useTheme6CheckIcon"
        :disabled="props.disabled || item.disabled"
        :checked="isChecked(item, localValue)"
        @change="(e) => onChange(e, item)"
      >
        <template v-if="$slots.default" #default>
          <slot name="default" :item="item" />
        </template>
      </BsCheckbox>
    </Item>
  </Items>
</template>
