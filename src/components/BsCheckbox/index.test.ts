import {describe, expect, it} from 'vitest'
import BsCheckbox from '@/components/BsCheckbox/index.vue'
import {mount} from '@vue/test-utils'

/**
 * Mount 시, Props로 받은 modelValue가 정상적으로 localValue에 업데이트
 * Change이벤트시 modelValue 업데이트
 */

describe('BsCheckbox', () => {
  it('Mount 시, Props로 받은 modelValue가 정상적으로 localValue에 업데이트', async () => {
    const wrapper = mount(BsCheckbox, {
      props: {
        modelValue: false
      }
    }) as Record<string, any>

    await wrapper.setProps({modelValue: true})
    expect(wrapper.vm.localValue).toBe(true)
  })

  it('Change이벤트시 modelValue 업데이트', async () => {
    const wrapper = mount(BsCheckbox, {
      props: {
        modelValue: true
      }
    })
    const $input = wrapper.find('input')
    await $input.setValue(false)
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
  })
})
