<script setup lang="ts">
import {ref, watch} from 'vue'
import {Wrapper, TooltipBox, TooltipBoxTextArea, TooltipBoxCloseButton} from '@/components/BsTooltip/index.style'
import type {Props} from '@/components/BsTooltip/index.type'
import {THEME_KEYNAME} from '@/constants/components/BsTooltip/index'
import {ALIGN_KEYNAME} from '@/constants/components/BsModal/index'

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  align: ALIGN_KEYNAME.CENTER_BOTTOM,
  theme: THEME_KEYNAME.THEME_1,
  timer: 5000,
  useCloseButton: false
})
const localValue = ref(false)
const localTimer = ref<unknown>(null)
const emits = defineEmits(['update:modelValue'])

watch(
  () => props.modelValue,
  (v) => {
    localValue.value = v
    if (!props.useCloseButton && v) {
      setTime()
    }
  },
  {immediate: true}
)

function onClose() {
  emits('update:modelValue', false)
}
function onMouseEvent() {
  if (!props.useCloseButton) {
    emits('update:modelValue', true)
  }
}
function setTime() {
  if (localTimer.value) localTimer.value = null
  localTimer.value = setTimeout(() => {
    emits('update:modelValue', false)
  }, props.timer)
}
</script>

<template>
  <Wrapper :data-theme="props.theme" :data-align="props.align" @mouseenter="onMouseEvent">
    <slot name="slotTooltipTarget" />
    <TooltipBox v-if="localValue">
      <TooltipBoxTextArea>
        <slot />
      </TooltipBoxTextArea>
      <TooltipBoxCloseButton v-if="props.useCloseButton" @click="onClose" />
    </TooltipBox>
  </Wrapper>
</template>
