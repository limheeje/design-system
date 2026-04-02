<script setup lang="ts">
import {computed, onUnmounted, ref, watch} from 'vue'
import type {Props} from '@/components/BsToast/index.type'
import {
  Wrapper,
  TeleportWrapper,
  TeleportInner,
  ToastInnerSection,
  ToastHeader,
  ToastHeaderIcon,
  ToastHeaderText,
  ToastHeaderCloseButton,
  ToastContent
} from '@/components/BsToast/index.style'
import {ALIGN_KEYNAME} from '@/constants/components/BsModal/index'

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  headerText: 'Title',
  timer: 5000,
  useHeaderIcon: true,
  useCloseButton: true,
  useShadowCSS: true,
  align: ALIGN_KEYNAME.CENTER_BOTTOM
})

const localValue = ref(false)
const localTimeout = ref<unknown>(null)
const isTeleportDiv = ref(false)
const emits = defineEmits(['update:modelValue', 'close'])
const localTeleportTo = computed(() => {
  return `[data-toast-teleport-div="${props.align}"]`
})

watch(
  () => props.modelValue,
  (v) => {
    localValue.value = v
    const _is = document.querySelector(`[data-toast-teleport-div="${props.align}"]`)
    isTeleportDiv.value = !!_is
    if (v) {
      setTimer()
    } else {
      clearTimer()
    }
  },
  {immediate: true}
)

onUnmounted(() => {
  clearTimer()
})

function clearTimer() {
  localTimeout.value = null
}
function setTimer() {
  localTimeout.value = setTimeout(() => {
    emits('update:modelValue', false)
  }, props.timer)
}

function onClose() {
  emits('update:modelValue', false)
  emits('close', false)
}
</script>

<template>
  <Teleport v-if="localValue" to="body">
    <TeleportWrapper v-if="!isTeleportDiv" :data-align="props.align">
      <TeleportInner :data-toast-teleport-div="props.align" />
    </TeleportWrapper>
  </Teleport>
  <Teleport v-if="localValue" :to="localTeleportTo">
    <Wrapper
      :class="{
        'is-shadow': props.useShadowCSS,
        'is-headericon': props.useHeaderIcon
      }"
    >
      <ToastInnerSection>
        <ToastHeader>
          <ToastHeaderText>
            <ToastHeaderIcon v-if="props.useHeaderIcon" />
            {{ props.headerText }}
          </ToastHeaderText>
          <ToastHeaderCloseButton
            v-if="props.useCloseButton"
            :class="{
              'use-text-action-button': $slots.slotTextActionButton
            }"
            @click="onClose"
          >
            <slot name="slotTextActionButton" />
          </ToastHeaderCloseButton>
        </ToastHeader>
        <ToastContent v-if="$slots.default"><slot /></ToastContent>
      </ToastInnerSection>
    </Wrapper>
  </Teleport>
</template>
