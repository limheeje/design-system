<script setup lang="ts">
import {onBeforeUnmount, ref, watch} from 'vue'
import {useScrollLock} from '@vueuse/core'
import {
  Dimm,
  Wrapper,
  ModalInnerSection,
  ModalHeader,
  ModalHeaderText,
  ModalHeaderCloseButton,
  ModalButtonGroup,
  ModalContent,
  ModalFooter
} from '@/components/BsModal/index.style'
import type {Props} from '@/components/BsModal/index.type'
import BsButton from '@/components/BsButton/index.vue'
import {THEME_KEYNAME, COLOR_KEYNAME} from '@/constants/components/BsButton/index'
import {BUTTON_KEYNAME, ALIGN_KEYNAME, BUTTON_LAYOUT} from '@/constants/components/BsModal/index'
import ObjectUtil from '@/utils/ObjectUtil'

const props = withDefaults(defineProps<Props>(), {
  teleportTo: 'body',
  headerText: 'Title',
  headerTextCenter: false,
  headerCloseButtonValign: false,
  useDimm: true,
  align: ALIGN_KEYNAME.CENTER_CENTER,
  buttonLayout: BUTTON_LAYOUT.LAYOUT_AUTO,
  useCloseButton: true,
  buttons: () => [
    {codeName: BUTTON_KEYNAME.CANCEL, codeText: '취소', clickCallback: () => {}},
    {codeName: BUTTON_KEYNAME.CONFIRM, codeText: '확인', clickCallback: () => {}}
  ],
  modelValue: false
})
const localRef = ref()
const localValue = ref()
const isLocked = useScrollLock(document.documentElement)
const emits = defineEmits(['update:modelValue', 'close', 'confirm'])

watch(
  () => props.modelValue,
  (v: boolean) => {
    localValue.value = v
    isLocked.value = localValue.value
  },
  {immediate: true}
)

onBeforeUnmount(() => {
  isLocked.value = false
})

function setFocus() {
  localRef.value?.$el.focus()
}

function onClose() {
  emits('update:modelValue', false)
  emits('close')
}
function onButtonClick(item: Record<string, any>) {
  if (typeof item.clickCallback === 'function') {
    if (item.codeName === BUTTON_KEYNAME.CANCEL) {
      onClose()
    }
    if (item.codeName === BUTTON_KEYNAME.CONFIRM) {
      emits('confirm')
    }
    item.clickCallback(item)
  }
}

defineExpose({
  setFocus
})
</script>

<template>
  <Teleport v-if="localValue" :to="props.teleportTo">
    <Dimm v-if="props.useDimm" />
    <Wrapper
      ref="localRef"
      tabindex="0"
      :data-align="props.align"
      :class="{
        'is-header-close-button-valign':
          !props.headerTextCenter && props.headerCloseButtonValign && props.useCloseButton,
        'is-header-text-center': props.headerTextCenter
      }"
      @click.self="onClose"
    >
      <ModalInnerSection>
        <ModalHeader>
          <ModalHeaderText>{{ props.headerText }}</ModalHeaderText>
          <template v-if="!props.headerTextCenter && props.useCloseButton">
            <ModalHeaderCloseButton @click="onClose"></ModalHeaderCloseButton>
          </template>
        </ModalHeader>
        <ModalContent><slot /></ModalContent>
        <ModalFooter v-if="!ObjectUtil.isEmpty(props.buttons)">
          <ModalButtonGroup :data-button-layout="props.buttonLayout">
            <BsButton
              v-for="(item, index) in props.buttons"
              :key="index"
              :theme="
                ObjectUtil.isLastIndex(props.buttons, index) ? THEME_KEYNAME.DEFAULT : THEME_KEYNAME.DEFAULT_OUTLINE
              "
              :color="
                ObjectUtil.isLastIndex(props.buttons, index)
                  ? COLOR_KEYNAME['kcpblue/50']
                  : COLOR_KEYNAME[`kcpgray/10`]
              "
              @click="onButtonClick(item)"
            >
              {{ item.codeText }}
            </BsButton>
          </ModalButtonGroup>
        </ModalFooter>
      </ModalInnerSection>
    </Wrapper>
  </Teleport>
</template>
