<script setup lang="ts">
import {} from 'vue'
import type {Props} from '@/components/BsAccordionMenu/index.type'
import BsAccordion from '@/components/BsAccordion/index.vue'
import {THEME_KEYNAME} from '@/constants/components/BsAccordion/index'
import {IS_SELECTED, IS_HOVERABLE} from '@/components/BsAccordion/index.style'
import {AccordionBodyMenu} from '@/components/BsAccordionMenu/index.style'
import {useRouter, useRoute} from 'vue-router'

const props = withDefaults(defineProps<Props>(), {
  theme: THEME_KEYNAME['THEME_1'],
  items: () => [],
  useLeftIcon: false,
  codeTitle: 'codeTitle',
  codeLabel: 'codeLabel',
  codeContent: 'codeContent',
  codeSelected: 'codeSelected'
})

const route = useRoute()
const router = useRouter()

function onClick(link: string) {
  router.push(link)
}
</script>

<template>
  <BsAccordion :items="props.items" :theme="props.theme" :use-left-icon="props.useLeftIcon">
    <template #slotTitle="{item}">
      {{ item[props.codeTitle] }}
    </template>
    <template #slotContent="{item, bodyContent}">
      <!--  -->
      <template v-if="Array.isArray(item[props.codeContent])">
        <AccordionBodyMenu>
          <component
            :is="bodyContent"
            v-for="(content, cidx) in item.content"
            :key="cidx"
            :style="{
              cursor: 'pointer'
            }"
            :theme="props.theme"
            :class="[
              IS_HOVERABLE,
              {
                [IS_SELECTED]: route.path === content.link
              }
            ]"
            @click="content.link && onClick(content.link)"
          >
            {{ content[props.codeLabel] }}
          </component>
        </AccordionBodyMenu>
      </template>
    </template>
  </BsAccordion>
</template>
