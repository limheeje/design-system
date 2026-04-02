<script setup lang="ts">
import {onMounted, reactive, ref} from 'vue'
import BsInputField from '@/components/BsInputField/index.vue'
import BsIcon from '@/components/BsIcon/index.vue'
import BsCheckbox from '@/components/BsCheckbox/index.vue'
import BsCheckboxGroup from '@/components/BsCheckboxGroup/index.vue'
import BsRadio from '@/components/BsRadio/index.vue'
import BsRadioGroup from '@/components/BsRadioGroup/index.vue'
import BsSelect from '@/components/BsSelect/index.vue'
import BsTextarea from '@/components/BsTextarea/index.vue'
import BsButton from '@/components/BsButton/index.vue'
import BsModal from '@/components/BsModal/index.vue'
import BsToast from '@/components/BsToast/index.vue'
import BsTooltip from '@/components/BsTooltip/index.vue'
import BsPagination from '@/components/BsPagination/index.vue'
import {createGlobalStyle} from '@vue-styled-components/core'

const refLoginInput = ref()
const selectmodel = ref('3')
const checkboxModel = ref(true)
const radioItems = ref([
  {codeId: 1, codeName: '1'},
  {codeId: 2, codeName: '2'},
  {codeId: 3, codeName: '3'}
])
const checkboxItems = ref([
  {codeId: 1, codeName: '1'},
  {codeId: 2, codeName: '2'},
  {codeId: 3, codeName: '3'}
])
const radioItemsModel = ref({codeId: 3, codeName: '3'})
const checkboxItemsModel = ref([
  {codeId: 1, codeName: '1'},
  {codeId: 3, codeName: '3'}
])
const wxAwss = ref('aa1')
const textareamodel = ref('aa1')
const tooltipmodel = ref(false)
const modalmodel = ref(false)
const modaltoast = ref(true)
const paginationmodel = ref(115)
const testemi = reactive({
  asdf: 1
})

onMounted(() => {
  // refLoginInput.value.setFocus()
})
const GlobalStyle = createGlobalStyle`
    :root {
      --ui-basic-component-fontsize: 16px;
      --color-common-0: #FFFFFF;
      --color-common-100: #000000;
      --color-kcpgray-10: #191919;
      --color-kcpgray-20: #2E2E2E;
      --color-kcpgray-30: #464646;
      --color-kcpgray-40: #5C5C5C;
      --color-kcpgray-50: #727272;
      --color-kcpgray-60: #999999;
      --color-kcpgray-80: #B4B4B4;
      --color-kcpgray-90: #CACACA;
      --color-kcpgray-93: #E0E0E0;
      --color-kcpgray-95: #EDEDED;
      --color-kcpgray-97: #F6F6F6;
      --color-kcpblue-50: #2196F3;
      --color-kcpblue-60: #49A9F5;
      --color-kcpblue-90: #AEDCFF;
      --color-kcpblue-92: #D0EBFF;
      --color-kcpblue-93: #E5F4FF;
      --color-kcpred-50: #FA2828;
      --color-semantic-chart-main-blue: #5BB0FF;
      --color-semantic-chart-main-mint: #63E385;
      --color-semantic-chart-main-yellow: #FBC74F;
      --color-semantic-chart-main-orange: #FF9D40;
      --color-semantic-chart-main-lime: #B3E750;
      --color-semantic-chart-main-cyan: #70E1E8;
      --color-semantic-chart-main-indigo: #6688FF;
      --color-semantic-chart-main-pink: #FF91B0;
      --color-semantic-chart-main-green: #4DCFA2;
      --color-semantic-chart-main-purple: #A382FF;
      --color-semantic-chart-main-red: #FD6B6B;
      --color-semantic-chart-main-teal: #3BBBBC;
    }
  `
const value1 = ref('한국어만asdf123!@#!   sdf 출력asdf')
function test() {
  testemi.asdf++
}
</script>

<template>
  <GlobalStyle />
  <br />
  <button @click="test">paginationmodel 19</button>{{ testemi }}
  <button @click="paginationmodel = 19">paginationmodel 19</button>{{ paginationmodel }}
  <BsPagination v-model="paginationmodel" :total-row="115" />
  <div>
    <button @click="tooltipmodel = !tooltipmodel">툴팁</button>:{{ tooltipmodel }} <br /><br /><br /><br />
    <span style="margin-left: 100px; display: inline-block"></span>
    <BsTooltip v-model="tooltipmodel">
      <template #slotTooltipTarget> 내용asdfasfsdaf내용asdfasfsdaf내용asdfasfsdaf내용asdfasfsdaf </template>
      툴팁내용툴팁내용툴팁내용툴팁내용
    </BsTooltip>
  </div>
  <BsToast v-model="modaltoast">토스트여</BsToast>
  <BsToast v-model="modaltoast">토스트여</BsToast>
  <button @click="modaltoast = !modaltoast">modaltoast / {{ modaltoast }}</button>
  <BsModal v-model="modalmodel">
    <BsButton>sdf</BsButton>
    <BsButton size="size-default">size-d12efault</BsButton>
  </BsModal>
  <button @click="modalmodel = !modalmodel">modalmodel</button>
  <br />
  <BsButton>sdf</BsButton>
  <BsButton theme="theme-default-outline" :color="`kcpgray/10`">kcpgray/10</BsButton>
  <BsButton size="size-default">size-d12efault</BsButton>
  <BsButton theme="theme-default-outline" :color="`Gray/Lightgray_01`">size-default</BsButton>
  <BsButton :color="`Gray/Lightgray_01`">Gray/Lightgray_01</BsButton>
  <BsButton theme="theme-default-outline" :color="`Gray/Darkgray_05`">size-default</BsButton>
  <BsButton :color="`Gray/Darkgray_05`">size-default</BsButton>
  <BsButton size="size-large">size-large 높이 52</BsButton>
  <BsButton size="size-medium">size-medium 높이 52</BsButton>
  <BsButton theme="theme-default-outline" :color="`Warning/Point_Red`">DEFAULT_OUTLINE</BsButton>
  <BsButton theme="theme-default-outline">DEFAULT_OUTLINE</BsButton>
  <BsButton theme="theme-pills-outline">DEFAULT_OUTLINE</BsButton>
  <BsButton disabled :color="`Warning/Point_Red`">
    <template #slotButtonInnerSectionLeft>
      <BsIcon :type="'icon_arrow_before_line'" />
    </template>
    sdf
  </BsButton>
  <BsButton :color="`Warning/Point_Red`">
    <template #slotButtonInnerSectionLeft>
      <BsIcon :type="'icon_arrow_before_line'" :color="`Gray/Darkgray_06`" />
    </template>
    sdf
  </BsButton>
  <BsButton theme="theme-pills">
    sdf
    <template #slotButtonInnerSectionRight>
      <BsIcon :type="'icon_arrow_before_line'" />
    </template>
  </BsButton>
  <BsButton>
    <template #slotButtonInnerSectionLeft>
      <BsIcon :type="'icon_arrow_before_line'" />
    </template>
    sdf
    <template #slotButtonInnerSectionRight>
      <BsIcon :type="'icon_arrow_before_line'" />
    </template>
  </BsButton>
  <br />
  <BsTextarea v-model="textareamodel" />{{ textareamodel }}<br />
  <pre>
    {{ textareamodel }}
  </pre>
  <br />
  <BsRadioGroup v-model="radioItemsModel" :items="radioItems" theme="theme-2" />{{ radioItemsModel }}
  <BsRadioGroup v-model="radioItemsModel" :items="radioItems" theme="theme-1" />{{ radioItemsModel }}
  <br />
  <BsRadio v-model="wxAwss" name="a1" value="aa1">1</BsRadio>
  <BsRadio v-model="wxAwss" name="a1" value="aa2">2</BsRadio>{{ wxAwss }}
  <br />
  {{ selectmodel }}
  <BsSelect v-model="selectmodel">
    <option value="1">3</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </BsSelect>
  <BsCheckboxGroup v-model="checkboxItemsModel" :items="checkboxItems" />
  <BsCheckboxGroup v-model="checkboxItemsModel" :items="checkboxItems" theme="theme-1" />
  <br />
  <BsCheckboxGroup v-model="checkboxItemsModel" :items="checkboxItems" use-theme6-check-icon theme="theme-2">
    <template #default="{item}">{{ item.codeName }}</template>
  </BsCheckboxGroup>
  <BsCheckboxGroup v-model="checkboxItemsModel" :items="checkboxItems" theme="theme-2">
    <template #default="{item}">{{ item.codeName }}</template>
  </BsCheckboxGroup>
  <BsCheckboxGroup v-model="checkboxItemsModel" :items="checkboxItems" />
  {{ checkboxItemsModel }}
  <br />
  <br />
  <br />
  <BsCheckbox v-model="checkboxModel">테마1</BsCheckbox><br />{{ checkboxModel }}
  <BsCheckbox v-model="checkboxModel" theme="theme-2">테마2</BsCheckbox><br />
  <BsCheckbox v-model="checkboxModel" theme="theme-3">테마3</BsCheckbox><br />
  <BsCheckbox v-model="checkboxModel" theme="theme-4">테마4</BsCheckbox><br />
  <BsCheckbox v-model="checkboxModel" theme="theme-5">테마5</BsCheckbox><br />
  <BsCheckbox v-model="checkboxModel" theme="theme-6" disabled>테마6</BsCheckbox><br />
  <BsCheckbox v-model="checkboxModel" use-theme6-check-icon theme="theme-6">테마6-체크아이콘있는거</BsCheckbox><br />
  <BsCheckbox v-model="checkboxModel" theme="checkbox-theme-1">테마7</BsCheckbox><br />
  <BsInputField ref="refLoginInput" v-model="value1">
    <template #slotInputSectionLeftArea>
      <BsIcon :type="'icon_arrow_before_line'" />
    </template>
    <template #slotInputSectionRightArea> asdf </template>
    <template #slotSupportMessage> 서포트메시지12 </template>
  </BsInputField>
</template>

<style>
* {
  vertical-align: top;
}
</style>
