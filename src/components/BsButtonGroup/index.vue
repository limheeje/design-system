<script setup lang="ts">
import {} from 'vue'
import {Wrapper} from '@/components/BsButtonGroup/index.style'
import type {Props} from '@/components/BsButtonGroup/index.type'
import {ALIGN_KEYNAME} from '@/constants/components/BsGrid/index'

const props = withDefaults(defineProps<Props>(), {
  gap: '10px',
  align: ALIGN_KEYNAME['JUSTIFY_START']
})
</script>

<template>
  <Wrapper
    :style="{
      gap: props.gap
    }"
    :class="{
      'justify-center': props.align === ALIGN_KEYNAME['JUSTIFY_CENTER'],
      'justify-start': props.align === ALIGN_KEYNAME['JUSTIFY_START'],
      'justify-end': props.align === ALIGN_KEYNAME['JUSTIFY_END']
    }"
  >
    <slot />
  </Wrapper>
</template>
