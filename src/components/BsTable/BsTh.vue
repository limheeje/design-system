<script setup lang="ts">
import {
  Th,
  BORDER_RIGHT,
  BORDER_TOP,
  BORDER_BOTTOM,
  BORDER_LEFT,
  TYPO_LOW_LEVEL
} from '@/components/BsTable/index.style'

const props = withDefaults(
  defineProps<{
    textAlign?: 'left' | 'right' | 'center'
    borderLeft?: boolean
    borderRight?: boolean
    borderTop?: boolean
    borderBottom?: boolean
    typoLowLevel?: boolean
  }>(),
  {
    textAlign: 'center',
    borderLeft: false,
    borderRight: false,
    borderTop: false,
    borderBottom: false,
    typoLowLevel: false
  }
)
</script>
<template>
  <Th
    :style="`text-align: ${props.textAlign}`"
    :class="{
      [TYPO_LOW_LEVEL]: props.typoLowLevel,
      [BORDER_LEFT]: props.borderLeft,
      [BORDER_RIGHT]: props.borderRight,
      [BORDER_TOP]: props.borderTop,
      [BORDER_BOTTOM]: props.borderBottom
    }"
  >
    <slot />
  </Th>
</template>
