<script setup lang="ts">
import {Wrapper} from '@/components/BsIcon/index.style'
import type {Props} from '@/components/BsIcon/index.type'
import {DESIGNCONFIG_ICON_MAP, DESIGNCONFIG_KEYNAME_COLOR, _toGetBackgroundSVG} from '@/themes/DesignConfig'

const props = withDefaults(defineProps<Props>(), {
  type: 'icon_cancel_line',
  color: DESIGNCONFIG_KEYNAME_COLOR['common-100'],
  width: '20px',
  height: '20px'
})
</script>

<template>
  <Wrapper
    :type="_toGetBackgroundSVG(DESIGNCONFIG_ICON_MAP[props.type])"
    :color="props.color"
    :width="props.width"
    :height="props.height"
  ></Wrapper>
</template>
