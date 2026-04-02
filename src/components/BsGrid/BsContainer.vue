<script setup lang="ts">
import {Container, columsArray, SPACING_GAP_DEFAULT} from '@/components/BsGrid/index.style'

const props = withDefaults(defineProps<{guideLine?: boolean}>(), {
  guideLine: false
})
</script>

<template>
  <Container
    :class="{
      'guide-line': props.guideLine
    }"
  >
    <slot />

    <template v-if="props.guideLine">
      <!-- Guide Line 템플릿 실제로는 사용X : S -->
      <div
        class="_guide_container"
        :style="{
          gap: `calc(${SPACING_GAP_DEFAULT} * 2)`
        }"
      >
        <div
          class="_guide_row"
          :style="{
            'margin-left': `calc(${SPACING_GAP_DEFAULT} * -1)`,
            'margin-right': `calc(${SPACING_GAP_DEFAULT} * -1)`
          }"
        >
          <div
            v-for="(__, index) in columsArray"
            :key="index"
            :style="{
              'padding-left': SPACING_GAP_DEFAULT,
              'padding-right': SPACING_GAP_DEFAULT
            }"
            class="_guide_col"
          >
            <div
              style="
                height: 100%;
                border-radius: 6px;
                background: rgba(0, 0, 0, 0.07);
                min-height: 90px;
                mix-blend-mode: luminosity;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            ></div>
          </div>
        </div>
      </div>
      <!-- Guide Line 템플릿 실제로는 사용X : E -->
    </template>
  </Container>
</template>

<style scope lang="scss">
._guide_container {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  ._guide_row {
    display: flex;
    height: 100%;
  }
  ._guide_col {
    flex: 0 0 8.333333%;
  }
}
</style>
