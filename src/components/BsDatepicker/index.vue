<script setup lang="ts">
import dayjs from 'dayjs'
import {onMounted, ref, useTemplateRef, watch} from 'vue'
import {onClickOutside} from '@vueuse/core'
import type {Props} from '@/components/BsDatepicker/index.type'
import {
  Wrapper,
  InputField,
  InputInnerSectionArea,
  InputSectionRightArea,
  IS_FOCUS
} from '@/components/BsDatepicker/index.style'
import {LayerInnerButton, LayerInner, LayerContents, LayerWrapper} from '@/components/BsTimepicker/index.style'
import BsIcon from '@/components/BsIcon/index.vue'
import BsButton from '@/components/BsButton/index.vue'
import {_toCSSUnit} from '@/themes/DesignConfig'
import {DATE_FORMAT} from '@/constants/DateFormat'
import ObjectUtil from '@/utils/ObjectUtil'
import {DatePicker} from 'v-calendar'
import 'v-calendar/style.css'

const props = withDefaults(defineProps<Props>(), {
  color: 'kcpblue/50',
  isRange: false,
  modelValue: '',
  returnValueFormat: DATE_FORMAT['YYYY-MM-DD']
})
const isOpen = ref(false)
const localRefLayer = useTemplateRef('localRefLayer')
const localModel = ref()
const localIsFocus = ref(false)
const emits = defineEmits(['update:modelValue', 'focus', 'blur'])

watch(
  () => props.modelValue,
  (v) => {
    localModel.value = setValue(v || dayjs(new Date()).format(props.returnValueFormat))
  },
  {immediate: true}
)

onMounted(() => {
  emits('update:modelValue', setValue(localModel.value))
})

function setValue(v: Props['modelValue']) {
  if (ObjectUtil.isObject(v)) {
    if (props.isRange) {
      const _v = v as Record<string, any>
      return {
        start: dayjs(_v['start']).format(props.returnValueFormat),
        end: dayjs(_v['end']).format(props.returnValueFormat)
      }
    } else {
      return dayjs(v as Date).format(props.returnValueFormat)
    }
  } else {
    return v
  }
}
function onOpen() {
  isOpen.value = true
}
function onClose() {
  isOpen.value = false
}
function onFocus(e: FocusEvent) {
  emits('focus', e)
  onOpen()
  localIsFocus.value = true
}
function onBlur(e: FocusEvent) {
  emits('blur', e)
  localIsFocus.value = false
}
function onInput(v: Props['modelValue']) {
  emits('update:modelValue', setValue(v))
}
function onSubmit() {
  emits('update:modelValue', setValue(localModel.value))
  onClose()
}
onClickOutside(localRefLayer, onSubmit)
</script>
<template>
  <Wrapper :data-color="props.color">
    <InputInnerSectionArea
      :class="{
        [IS_FOCUS]: localIsFocus
      }"
    >
      <InputField
        type="text"
        readonly
        :value="
          props.isRange ? `${localModel?.start || '0000.00.00'} - ${localModel?.end || '0000.00.00'}` : localModel
        "
        :placeholder="props.isRange ? '0000.00.00 - 0000.00.00' : '0000.00.00'"
        @focus="onFocus"
        @click="onOpen"
        @blur="onBlur"
      />
      <InputSectionRightArea>
        <BsIcon :type="'icon_calendar_month_fill'" :width="'20px'" :height="'20px'" :color="'kcpgray/40'" />
        <slot name="slotSelectSectionRightArea" />
      </InputSectionRightArea>
    </InputInnerSectionArea>
    <LayerWrapper v-if="isOpen" ref="localRefLayer">
      <LayerInner>
        <LayerContents type="date">
          <DatePicker
            v-model="localModel"
            :borderless="true"
            :is-range="props.isRange"
            color="custom"
            :trim-weeks="true"
            :masks="{title: 'YYYY년 MMM'}"
            @update:model-value="onInput"
          ></DatePicker>
        </LayerContents>
        <LayerInnerButton>
          <BsButton :style="{width: '100%', marginTop: _toCSSUnit('16px')}" @click="onSubmit">확인</BsButton>
        </LayerInnerButton>
      </LayerInner>
    </LayerWrapper>
  </Wrapper>
</template>
