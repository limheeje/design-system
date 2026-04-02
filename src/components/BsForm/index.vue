<script setup lang="ts">
import {onMounted, ref, nextTick} from 'vue'
import {Wrapper, FormInner, LabelArea, Label, FormContent} from '@/components/BsForm/index.style'
import type {Props} from '@/components/BsForm/index.type'
import StringUtil from '@/utils/StringUtil'

const props = withDefaults(defineProps<Props>(), {
  id: '',
  labelWidth: '',
  isVertical: false
})

const localId = ref('')

onMounted(() => {
  nextTick(() => {
    const _localId = StringUtil.getUUID()
    localId.value = props.id || _localId
  })
})
</script>

<template>
  <Wrapper
    :class="{
      'is-vertical': props.isVertical
    }"
  >
    <FormInner>
      <LabelArea
        :style="{
          width: labelWidth,
          'min-width': labelWidth
        }"
      >
        <Label :for="localId"><slot /></Label>
      </LabelArea>
      <FormContent>
        <slot :id="localId" name="slotContent" />
      </FormContent>
    </FormInner>
  </Wrapper>
</template>
