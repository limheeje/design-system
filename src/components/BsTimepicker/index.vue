<script setup lang="ts">
import dayjs from 'dayjs'
import {ref, watch, useTemplateRef} from 'vue'
import {onClickOutside} from '@vueuse/core'
import {
  Wrapper,
  InputInnerSectionArea,
  InputField,
  IS_FOCUS,
  InputSectionRightArea,
  SlidItemInner,
  LayerInnerButton,
  LayerInner,
  LayerContentsShadow,
  LayerContents,
  LayerWrapper
} from '@/components/BsTimepicker/index.style'
import {DESIGNCONFIG_KEYNAME_COLOR, _toCSSUnit} from '@/themes/DesignConfig'
import {ITEMS_GROUP, ITEMS_KEYNAME, PERIOD_ITEMS} from '@/constants/components/BsTimepicker/index'
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Mousewheel} from 'swiper/modules'
import {DATE_FORMAT} from '@/constants/DateFormat'
import type {Props} from '@/components/BsTimepicker/index.type'
import BsIcon from '@/components/BsIcon/index.vue'
import BsButton from '@/components/BsButton/index.vue'
import 'swiper/swiper-bundle.css'

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  returnValueFormat: DATE_FORMAT['HH:mm']
})
const isOpen = ref(false)
const localRefLayer = useTemplateRef('localRefLayer')
const localRef = ref()
const localIsFocus = ref(false)
const localValue = ref('')
const localValueHour = ref('0')
const localValueMin = ref('0')
const localValuePeriod = ref(PERIOD_ITEMS[0])
const emits = defineEmits(['update:modelValue', 'change', 'focus', 'blur'])

watch(
  () => props.modelValue,
  (v) => {
    setValue(v || dayjs(new Date()).format(props.returnValueFormat))
  },
  {immediate: true}
)

function setValue(v: string) {
  const _t = dayjs(v, props.returnValueFormat)
  const _HH = _t.format('HH')
  const _hh = _t.format('hh')
  const _mm = _t.format('mm')

  if (_t) {
    localValueHour.value = _hh
    localValueMin.value = _mm
    localValuePeriod.value = (Number(_HH) as number) >= 12 ? PERIOD_ITEMS[1] : PERIOD_ITEMS[0]
    localValue.value = v
  } else {
    localValue.value = ''
  }
}
function onOpen() {
  isOpen.value = true
}
function onClose() {
  isOpen.value = false
}
function onFocus(e: FocusEvent) {
  emits('focus', e)
  localIsFocus.value = true
}
function onBlur(e: FocusEvent) {
  emits('blur', e)
  localIsFocus.value = false
}
function onSlideChange(e: any, codeName: string) {
  const {activeIndex, slides} = e
  if (codeName === ITEMS_KEYNAME['PERIOD']) {
    localValuePeriod.value = slides[activeIndex]?.dataset?.params
  }
  if (codeName === ITEMS_KEYNAME['HOURS'] || codeName === ITEMS_KEYNAME['MINUTES']) {
    if (codeName === ITEMS_KEYNAME['HOURS']) {
      localValueHour.value = slides[activeIndex]?.dataset?.params
    } else {
      localValueMin.value = slides[activeIndex]?.dataset?.params
    }
  }
}

function onSubmit() {
  const _t = dayjs()
    .hour(
      (() => {
        if (localValuePeriod.value === PERIOD_ITEMS[0] && localValueHour.value === '12') {
          return Number('00')
        } else if (localValuePeriod.value === PERIOD_ITEMS[1] && localValueHour.value === '12') {
          return Number('12')
        } else if (localValuePeriod.value === PERIOD_ITEMS[0]) {
          return Number(localValueHour.value)
        } else if (localValuePeriod.value === PERIOD_ITEMS[1]) {
          return Number(localValueHour.value) + 12
        } else {
          return 0
        }
      })()
    )
    .minute(Number(localValueMin.value))
    .format(props.returnValueFormat)
  emits('change', localRef.value.$el)
  emits('update:modelValue', _t)
  onClose()
}

onClickOutside(localRefLayer, onSubmit)
</script>

<template>
  <Wrapper>
    <InputInnerSectionArea
      :class="{
        [IS_FOCUS]: localIsFocus
      }"
    >
      <InputField
        ref="localRef"
        type="text"
        :value="`${localValueHour}:${localValueMin} ${localValuePeriod}`"
        readonly
        @focus="onFocus"
        @click="onOpen"
        @blur="onBlur"
      />
      <InputSectionRightArea>
        <BsIcon
          :type="'icon_clock_line'"
          width="20px"
          height="20px"
          :color="DESIGNCONFIG_KEYNAME_COLOR['kcpgray/40']"
        />
        <template v-if="$slots.slotInputSectionRightArea" #slotInputSectionRightArea>
          <slot name="slotInputSectionRightArea" />
        </template>
      </InputSectionRightArea>
    </InputInnerSectionArea>
    <LayerWrapper v-if="isOpen" ref="localRefLayer">
      <LayerInner>
        <LayerContents type="time">
          <LayerContentsShadow />
          <template v-for="(item, __index) in ITEMS_GROUP" :key="__index">
            <Swiper
              :modules="[Mousewheel]"
              :style="{
                height: _toCSSUnit('240px')
              }"
              :slides-per-view="5"
              :class="`my-swiper swiper-name-${item.codeName}`"
              :initial-slide="
                item.codeName === ITEMS_KEYNAME['HOURS']
                  ? Number(localValueHour) - 1
                  : item.codeName === ITEMS_KEYNAME['MINUTES']
                    ? Number(localValueMin)
                    : item.codeName === ITEMS_KEYNAME['PERIOD']
                      ? localValuePeriod === PERIOD_ITEMS[0]
                        ? 0
                        : 1
                      : 0
              "
              :direction="'vertical'"
              :centered-slides="true"
              :mousewheel="{
                enabled: true
              }"
              :loop="item.codeName !== ITEMS_KEYNAME['PERIOD']"
              @slide-change="(e) => onSlideChange(e, item.codeName)"
            >
              <SwiperSlide v-for="(_item, _index) in item.codeItems" :key="_index" class="slide" :data-params="_item">
                <SlidItemInner>
                  {{ _item }}
                </SlidItemInner>
              </SwiperSlide>
            </Swiper>
          </template>
        </LayerContents>
        <LayerInnerButton>
          <BsButton :style="{width: '100%', marginTop: _toCSSUnit('16px')}" @click="onSubmit">확인</BsButton>
        </LayerInnerButton>
      </LayerInner>
    </LayerWrapper>
  </Wrapper>
</template>

<style scoped lang="scss">
.my-swiper {
  flex: 0 0 33.333%;
}
.swiper-slide-active.slide {
  span {
    color: var(--color-kcpblue-50) !important;
    font-family: Pretendard;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: 0%;
  }
}
</style>
