<script setup lang="ts">
import {nextTick, onMounted, ref, watch} from 'vue'
import BsRadio from '@/components/BsRadio/index.vue'
import type {Props} from '@/components/BsRadioGroup/index.type'
import StringUtil from '@/utils/StringUtil'
import {THEME_KEYNAME} from '@/constants/components/BsCheckbox/index'
import {THEME_KEYNAME as CHECKGROUP_THEME_KEYNAME} from '@/constants/components/BsCheckboxGroup/index'
import {Items, Item} from '@/components/BsCheckboxGroup/index.style'

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  modelValue: () => ({}),
  theme: 'default',
  name: '',
  disabled: false,
  useTheme6CheckIcon: false
})
const localValue = ref({})
const localValueString = ref('')
const localName = ref('')
const emits = defineEmits(['update:modelValue', 'change'])

watch(
  () => props.modelValue,
  (v) => {
    localValue.value = v
    localValueString.value = typeof v === 'string' ? v : JSON.stringify(v)
  },
  {immediate: true}
)

onMounted(() => {
  nextTick(() => {
    localName.value = props.name || StringUtil.getUUID()
  })
})

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

function onChange(item: Record<string, any> | string, e: Event) {
  emits('change', e)
  emits('update:modelValue', item)
}
</script>

<template>
  <Items :data-theme="props.theme">
    <Item v-for="(item, index) in props.items" :key="index">
      <BsRadio
        v-model="localValueString"
        :theme="setTheme()"
        :name="localName"
        :value="typeof item === 'string' ? item : JSON.stringify(item)"
        :use-theme6-check-icon="props.useTheme6CheckIcon"
        :disabled="props.disabled || (typeof item === 'object' && item.disabled)"
        @change="(e) => onChange(item, e)"
      >
        <template v-if="$slots.default" #default>
          <slot name="default" :item="item" />
        </template>
      </BsRadio>
    </Item>
  </Items>
</template>
