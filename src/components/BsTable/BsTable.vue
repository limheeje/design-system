<script setup lang="ts">
import {Wrapper, Table, USE_LEFT, USE_XSCOLL, USE_HOVER} from '@/components/BsTable/index.style'
import type {Types} from '@/components/BsTable/index.type'
import {THEME_KEYNAME} from '@/constants/components/BsTable'

const props = withDefaults(defineProps<Types>(), {
  theme: THEME_KEYNAME['THEME_1'],
  useLeft: false,
  useXscroll: false,
  useHover: false
})
</script>

<template>
  <Wrapper
    :data-theme="props.theme"
    :class="{
      [USE_LEFT]: props.useLeft,
      [USE_XSCOLL]: props.useXscroll,
      [USE_HOVER]: props.useHover
    }"
  >
    <Table>
      <slot />
    </Table>
  </Wrapper>
</template>
