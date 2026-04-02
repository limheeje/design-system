<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import {
  Wrapper,
  BsPaginationInner,
  BsPaginationItem,
  BsPaginationButton,
  IS_ACTIVE,
  BsPaginationisMore
} from '@/components/BsPagination/index.style'
import type {Props} from '@/components/BsPagination/index.type'
import {THEME_KEYNAME} from '@/constants/components/BsPagination/index'
import _ from 'lodash'

const props = withDefaults(defineProps<Props>(), {
  theme: THEME_KEYNAME.THEME_1,
  totalRow: 0,
  perViewCount: 10,
  useMoreUi: false,
  modelValue: 1
})

const localValue = ref(props.modelValue)
const isMore = ref(false)
const localRow = computed(() => {
  const _inArray = [...Array(props.totalRow)].map((__, i) => i + 1)
  let _getCurrentArray: (number | string)[] | undefined = []
  if (props.useMoreUi) {
    let _gubun = 'useMore_1'
    _getCurrentArray = _inArray.reduce(
      (acc, v, i) => {
        const _v = props.modelValue
        const _totalIndex = _inArray.length - 1
        const _findIndex = _inArray.findIndex((n) => n === _v)
        const _perview_2 = Math.floor(props.perViewCount / 2)
        const _sIndex =
          _findIndex < props.perViewCount
            ? 0
            : _findIndex + props.perViewCount - 1 >= _totalIndex
              ? _totalIndex - props.perViewCount
              : _findIndex - _perview_2
        const _eIndex = _findIndex < props.perViewCount ? props.perViewCount + 1 : _findIndex + _perview_2 + 1
        const _rangeArray = _inArray.slice(_sIndex, _eIndex)
        if (i === 0 || i === _totalIndex || _rangeArray.includes(v)) {
          acc.push(v)
          if (_rangeArray.includes(v)) {
            _gubun = 'useMore_2'
          }
        } else {
          acc.push(_gubun)
        }

        return acc
      },
      [] as (number | string)[]
    )
  } else {
    const chunkedArray = _inArray.reduce((acc, __, i) => {
      if (i % props.perViewCount === 0) {
        acc.push(_inArray.slice(i, i + props.perViewCount))
      }
      return acc
    }, [] as number[][])
    _getCurrentArray = chunkedArray.find((item) => item.includes(props.modelValue))
  }

  return _.uniq(_getCurrentArray)
})
const validIsDisabled = computed(() => ({
  first: localValue.value === 1,
  last: localValue.value === props.totalRow,
  prev: localValue.value <= 1,
  next: localValue.value >= props.totalRow
}))
const emits = defineEmits(['update:modelValue'])

watch(
  () => props.modelValue,
  (v) => {
    localValue.value = v
  },
  {immediate: true}
)

function onClick(n: number | string) {
  emits('update:modelValue', n)
}
</script>

<template>
  <Wrapper :data-theme="props.theme">
    <BsPaginationInner>
      <BsPaginationItem v-if="!props.useMoreUi">
        <BsPaginationButton
          type="dprev"
          title="처음"
          :disabled="validIsDisabled.first"
          @click="onClick(1)"
        ></BsPaginationButton>
      </BsPaginationItem>
      <BsPaginationItem>
        <BsPaginationButton
          type="prev"
          title="이전"
          :disabled="validIsDisabled.prev"
          @click="onClick((localValue -= 1))"
        ></BsPaginationButton>
      </BsPaginationItem>
      <BsPaginationItem v-for="(item, index) in localRow" :key="index">
        <template v-if="item === 'useMore_1' || item === 'useMore_2'">
          <BsPaginationisMore>...</BsPaginationisMore>
        </template>
        <template v-else>
          <BsPaginationButton
            :class="{
              [IS_ACTIVE]: localValue === item
            }"
            @click="onClick(item)"
            >{{ item }}</BsPaginationButton
          >
        </template>
      </BsPaginationItem>
      <BsPaginationItem v-if="isMore">...</BsPaginationItem>
      <BsPaginationItem>
        <BsPaginationButton
          type="next"
          title="다음"
          :disabled="validIsDisabled.next"
          @click="onClick((localValue += 1))"
        ></BsPaginationButton>
      </BsPaginationItem>
      <BsPaginationItem v-if="!props.useMoreUi">
        <BsPaginationButton
          type="dnext"
          title="마지막"
          :disabled="validIsDisabled.last"
          @click="onClick(props.totalRow)"
        ></BsPaginationButton>
      </BsPaginationItem>
    </BsPaginationInner>
  </Wrapper>
</template>
