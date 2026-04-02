<script setup lang="ts">
import {ref, watch} from 'vue'
import type {Props} from '@/components/BsAccordion/index.type'
import BsIcon from '@/components/BsIcon/index.vue'
import {
  AccordionWrapper,
  AccordionItem,
  AccordionHeader,
  HeaderLeftArea,
  HeaderLeftTitle,
  HeaderLeftIcon,
  HeaderRightArea,
  AccordionBody,
  AccordionBodyItem,
  RightBasicButton,
  IS_OPEN,
  USE_LEFTICON
} from '@/components/BsAccordion/index.style'
import ObjectUtil from '@/utils/ObjectUtil'
import {THEME_KEYNAME} from '@/constants/components/BsAccordion/index'

const props = withDefaults(defineProps<Props>(), {
  theme: THEME_KEYNAME['THEME_1'],
  items: () => [],
  useLeftIcon: false,
  useRightIcon: true,
  codeTitle: 'codeTitle',
  codeContent: 'codeContent',
  codeSelected: 'codeSelected',
  totalContentOpen: false
})

const localItems = ref<Props['items']>([])
const emits = defineEmits(['click'])

watch(
  () => props.items,
  (v) => {
    localItems.value = v
  },
  {immediate: true}
)

function setTotalContentCollaps(bool: boolean) {
  localItems.value = (localItems.value as Record<string, any>[]).map((_item) => ({
    ...(_item as Record<string, any>),
    [props.codeSelected]: bool
  }))
}

function onHeaderclick(item: Record<string, any>) {
  localItems.value = (localItems.value as Record<string, any>[]).map((_item) => {
    let __item = _item as Record<string, any>
    if (ObjectUtil.isEqual(__item, item)) {
      __item[props.codeSelected] = !__item[props.codeSelected]
    }
    return __item
  })
  emits(
    'click',
    localItems.value.find((_item) => ObjectUtil.isEqual(_item, item))
  )
}

defineExpose({
  setTotalOpen: () => setTotalContentCollaps(true),
  setTotalClose: () => setTotalContentCollaps(false)
})
</script>

<template>
  <AccordionWrapper
    :class="[
      props.theme,
      {
        [USE_LEFTICON]: props.useLeftIcon
      }
    ]"
  >
    <AccordionItem v-for="(item, idx) in localItems" :key="idx" data-testid="AccordionItem">
      <AccordionHeader :theme="props.theme">
        <HeaderLeftArea @click="onHeaderclick(item)">
          <HeaderLeftIcon v-if="props.useLeftIcon">
            <template v-if="$slots.slotLeftIcon">
              <slot name="slotLeftIcon" />
            </template>
            <template v-else>
              <BsIcon :type="'icon_info_line'" :width="'16px'" :height="'16px'" :color="'kcpgray/40'" />
            </template>
          </HeaderLeftIcon>
          <template v-if="$slots.slotTitle">
            <HeaderLeftTitle>
              <slot name="slotTitle" :item="item" />
            </HeaderLeftTitle>
          </template>
          <template v-else>
            <HeaderLeftTitle>{{ item[props.codeTitle] }}</HeaderLeftTitle>
          </template>
        </HeaderLeftArea>
        <HeaderRightArea
          v-if="props.useRightIcon"
          :theme="props.theme"
          :class="{
            [IS_OPEN]: item[props.codeSelected] && !$slots.slotRightIcon
          }"
        >
          <template v-if="$slots.slotRightIcon">
            <slot name="slotRightIcon" />
          </template>
          <template v-else>
            <RightBasicButton @click="onHeaderclick(item)">
              <BsIcon :type="'icon_arrow_up_line'" :width="'16px'" :height="'16px'" :color="'kcpgray/40'" />
            </RightBasicButton>
          </template>
        </HeaderRightArea>
      </AccordionHeader>
      <AccordionBody v-if="item[props.codeSelected]" :theme="props.theme" :show-icon="props.useLeftIcon">
        <template v-if="$slots.slotContent">
          <slot name="slotContent" :item="item" :body-content="AccordionBodyItem" />
        </template>
        <template v-else>
          <AccordionBodyItem>{{ item[props.codeContent] }}</AccordionBodyItem>
        </template>
      </AccordionBody>
    </AccordionItem>
  </AccordionWrapper>
</template>
