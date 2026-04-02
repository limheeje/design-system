<script setup lang="ts">
import {computed, ref} from 'vue'
import {
  IS_BLOCK,
  WrapperButton,
  WrapperRouterLink,
  ButtonInnerSection,
  ButtonInnerSectionLeft,
  ButtonInnerSectionRight,
  ButtonInnerSectionText
} from '@/components/BsButton/index.style'
import {THEME_KEYNAME, COLOR_KEYNAME, SIZE_KEYNAME} from '@/constants/components/BsButton/index'
import type {Props} from '@/components/BsButton/index.type'

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  theme: THEME_KEYNAME.DEFAULT,
  color: '',
  size: SIZE_KEYNAME.DEFAULT,
  isBlock: false,
  name: '',
  value: '',
  to: '',
  disabled: false
})
const localRef = ref()
const emits = defineEmits(['click'])

const WarpperTag = computed(() => (props.to ? WrapperRouterLink : WrapperButton))
const WrapperProps = computed(() =>
  props.to
    ? {
        to: props.to
      }
    : {
        type: props.type,
        name: props.name,
        value: props.value,
        disabled: props.disabled
      }
)
const localDefaultColor = computed(() => {
  let _color: keyof typeof COLOR_KEYNAME = COLOR_KEYNAME['kcpblue/50']
  switch (props.theme) {
    case THEME_KEYNAME.DEFAULT_OUTLINE:
    case THEME_KEYNAME.PILLS_OUTLINE:
      _color = COLOR_KEYNAME['kcpgray/10']
      break
  }
  return _color
})

function onClick(e: Event) {
  emits('click', e)
}

function setFocus() {
  localRef.value?.$el.focus()
}

defineExpose({
  setFocus
})
</script>

<template>
  <WarpperTag
    ref="localRef"
    :data-theme="props.theme"
    :data-color="props.color || localDefaultColor"
    :data-size="props.size"
    v-bind="WrapperProps"
    :class="{
      [IS_BLOCK]: props.isBlock
    }"
    @click="onClick"
  >
    <ButtonInnerSection>
      <ButtonInnerSectionLeft v-if="$slots.slotButtonInnerSectionLeft">
        <slot name="slotButtonInnerSectionLeft" />
      </ButtonInnerSectionLeft>
      <ButtonInnerSectionText>
        <slot />
      </ButtonInnerSectionText>
      <ButtonInnerSectionRight v-if="$slots.slotButtonInnerSectionRight">
        <slot name="slotButtonInnerSectionRight" />
      </ButtonInnerSectionRight>
    </ButtonInnerSection>
  </WarpperTag>
</template>
