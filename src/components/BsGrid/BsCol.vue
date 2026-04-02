<script setup lang="ts">
import {Col} from '@/components/BsGrid/index.style'
import {ALIGN_KEYNAME} from '@/constants/components/BsGrid/index'
import type {Props} from '@/components/BsGrid/index.type'

const props = withDefaults(defineProps<Props>(), {
  alignSelf: ALIGN_KEYNAME['SELF_START']
})
</script>

<template>
  <Col
    :class="{
      'align-self-start': props.alignSelf === ALIGN_KEYNAME['SELF_START'],
      'align-self-center': props.alignSelf === ALIGN_KEYNAME['SELF_CENTER'],
      'align-self-end': props.alignSelf === ALIGN_KEYNAME['SELF_END']
    }"
    ><slot
  /></Col>
</template>
