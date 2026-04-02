<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: 'size-sm' | 'size-md' | 'size-lg'
  }>(),
  {
    size: 'size-sm'
  }
)
</script>
<template>
  <div class="loading" :data-size="props.size">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="#2196F3" viewBox="0 0 24 24">
      <g transform-origin="center">
        <circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3" stroke-linecap="round">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dasharray"
            values="0,150;42,150;42,150"
            keyTimes="0;0.475;1"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            values="0;-16;-59"
            keyTimes="0;0.475;1"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.loading {
  width: 20px;
  height: 20px;
  &[data-size='size-sm'] {
    width: 16px;
    height: 16px;
  }
  &[data-size='size-md'] {
    width: 32px;
    height: 32px;
  }
  &[data-size='size-lg'] {
    width: 48px;
    height: 48px;
  }
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
