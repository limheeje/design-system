<script setup lang="ts">
import {useRouter, useRoute} from 'vue-router'
import type {Props} from '@/components/BsBreadcrumb/index.type'
import {Wrapper, Ol, LiHome, LiItem, Button} from '@/components/BsBreadcrumb/index.style'
import {CODE_KEYNAME} from '@/constants/components/BsBreadcrumb/index'
import ObjectUtil from '@/utils/ObjectUtil'

const props = withDefaults(defineProps<Props>(), {
  homeName: '홈',
  items: () => [],
  codeName: CODE_KEYNAME['NAME'],
  codePath: CODE_KEYNAME['PATH']
})
const router = useRouter()
const route = useRoute()
const emits = defineEmits(['click'])

function onClick(path: string) {
  router.push(path)
  emits('click', path)
}
</script>

<template>
  <Wrapper>
    <Ol>
      <LiHome>
        <Button @click="onClick('/')">{{ props.homeName }}</Button>
      </LiHome>
      <template v-for="(item, index) in props.items" :key="index">
        <LiItem v-if="item[props.codeName]">
          <Button
            :class="{
              'is-active': ObjectUtil.isEqual(item[props.codePath], route.path)
            }"
            @click="onClick(item[props.codePath])"
            >{{ item[props.codeName] }}</Button
          >
        </LiItem>
      </template>
    </Ol>
  </Wrapper>
</template>
