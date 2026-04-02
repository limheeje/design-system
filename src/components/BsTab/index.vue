<script setup lang="ts">
// Vue의 반응형 기능을 사용하기 위한 import
import {ref, watch, computed} from 'vue'
// Tab 컴포넌트의 Props 타입 정의 import
import type {Props} from '@/components/BsTab/index.type'
// Tab 컴포넌트의 스타일 컴포넌트 import
import {
  Wrapper,
  TabItemList,
  TabItem,
  TabItemSwiper,
  TabContentsBox,
  TabContentsItem,
  IS_ACTIVE
} from '@/components/BsTab/index.style'
import {THEME_KEYNAME, SIZE_KEYNAME, TYPE_KEYNAME} from '@/constants/components/BsTab/index'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import ObjectUtil from '@/utils/ObjectUtil'

/* Tab 컴포넌트의 Props 정의
	@property {string} theme - 탭의 테마 스타일 (rectangle 또는 radius)
	@property {string} color - 탭의 색상
	@property {string} size - 탭의 크기
	@property {string} type - 탭의 스타일
*/
const props = withDefaults(defineProps<Props>(), {
  theme: THEME_KEYNAME['RECTANGLE'],
  color: 'common-100',
  size: SIZE_KEYNAME['DEFAULT'],
  type: TYPE_KEYNAME['LINE'],
  items: () => [],
  codeItem: 'codeItem',
  useSwiper: false,
  swiperObject: () => ({
    slidesPerView: 'auto',
    spaceBetween: 10
  }),
  returnObject: false,
  modelValue: '',
  teleportTo: ''
})

const localValue = ref<Props['modelValue']>('')
const getInitialSlide = computed(() => {
  let _v = 0
  if (props.items.length) {
    props.items.find((item, index) => {
      _v = index
      return isActive(item)
    })
  }
  return _v
})
const emits = defineEmits(['update:modelValue', 'click'])

watch(
  () => props.modelValue,
  (v) => {
    localValue.value = v
  },
  {immediate: true}
)

function onTabClick(item: Props['modelValue'], e: Event) {
  emits('click', e)
  emits('update:modelValue', item)
}

function isActive(item: Props['modelValue']) {
  return ObjectUtil.isEqual(item, localValue.value)
}
</script>

<template>
  <Wrapper class="bs-tab">
    <!-- 탭 버튼들을 감싸는 컨테이너 -->
    <TabItemList :data-theme="props.theme" :data-size="size" :data-type="type">
      <template v-if="props.useSwiper">
        <Swiper v-bind="props.swiperObject" :initial-slide="getInitialSlide">
          <SwiperSlide v-for="(item, index) in props.items" :key="index" style="width: fit-content">
            <TabItemSwiper tabindex="0" :class="{[IS_ACTIVE]: isActive(item)}" @click="(e) => onTabClick(item, e)">
              <slot name="slotCodeItem" :item="item" />
            </TabItemSwiper>
          </SwiperSlide>
        </Swiper>
      </template>
      <template v-else>
        <TabItem
          v-for="(item, index) in props.items"
          :key="index"
          :class="{[IS_ACTIVE]: isActive(item)}"
          @click="(e) => onTabClick(item, e)"
        >
          <slot name="slotCodeItem" :item="item" />
        </TabItem>
      </template>
    </TabItemList>

    <!-- 탭 내용을 감싸는 컨테이너 -->
    <Teleport
      v-bind="{
        to: props.teleportTo || null,
        disabled: !props.teleportTo,
        defer: true
      }"
    >
      <TabContentsBox>
        <TabContentsItem v-for="(item, index) in props.items" v-show="isActive(item)" :key="index">
          <slot name="slotCodeContent" :item="item" />
        </TabContentsItem>
      </TabContentsBox>
    </Teleport>
  </Wrapper>
</template>
