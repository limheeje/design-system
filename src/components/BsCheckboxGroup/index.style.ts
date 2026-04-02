import {styled} from '@vue-styled-components/core'
import {THEME_KEYNAME} from '@/constants/components/BsCheckbox/index'
import {Wrapper, inputCSS, InputLabel} from '@/components/BsCheckbox/index.style'
import {_toCSSUnit} from '@/themes/DesignConfig'

const THEME_DEFAULT = 'default'
const THEME_1 = THEME_KEYNAME.THEME_1
const THEME_2 = THEME_KEYNAME.THEME_2

export const Items = styled.div`
  &[data-theme='${THEME_DEFAULT}'] {
    display: inline-flex;
    flex-wrap: wrap;
    gap: ${_toCSSUnit('16px')};
  }
  &[data-theme='${THEME_1}'] {
    display: flex;
    gap: ${_toCSSUnit('16px')};
  }
  &[data-theme='${THEME_2}'] {
    display: inline-flex;
    flex-wrap: wrap;
  }
`
export const Item = styled.div`
  flex: auto;
  ${Wrapper},${InputLabel} {
    display: flex;
    width: 100%;
  }
  ${Items}[data-theme='${THEME_2}'] & {
    margin-left: ${_toCSSUnit('-1px')};
    &:first-child {
      margin-left: 0;
    }
    ${inputCSS}:checked+${InputLabel} {
      position: relative;
      z-index: 1;
    }
    ${InputLabel} {
      border-radius: 0;
    }
    &:first-child ${InputLabel} {
      border-top-left-radius: ${_toCSSUnit('4px')};
      border-bottom-left-radius: ${_toCSSUnit('4px')};
    }
    &:last-child ${InputLabel} {
      border-top-right-radius: ${_toCSSUnit('4px')};
      border-bottom-right-radius: ${_toCSSUnit('4px')};
    }
  }
`
