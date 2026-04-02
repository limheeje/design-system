<script setup lang="ts">
import {Row} from '@/components/BsGrid/index.style'
import {ALIGN_KEYNAME} from '@/constants/components/BsGrid/index'
import type {Props} from '@/components/BsGrid/index.type'

const props = withDefaults(defineProps<Props>(), {
  align: ALIGN_KEYNAME['JUSTIFY_START']
})
</script>

<template>
  <Row
    :class="{
      'justify-center': props.align === ALIGN_KEYNAME['JUSTIFY_CENTER'],
      'justify-start': props.align === ALIGN_KEYNAME['JUSTIFY_START'],
      'justify-end': props.align === ALIGN_KEYNAME['JUSTIFY_END']
    }"
    ><slot
  /></Row>
</template>
