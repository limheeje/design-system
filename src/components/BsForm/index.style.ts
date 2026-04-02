import {styled, css} from '@vue-styled-components/core'
import {INPUT_HEIGHT} from '@/components/BsInputField/index.style'
import {
  DesignConfigTypography,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_TYPO,
  DESIGNCONFIG_KEYNAME_COLOR,
  _toCSSParse,
  _toCSSUnit
} from '@/themes/DesignConfig'

const IS_VERTICAL = 'is-vertical'

export const Wrapper = styled.div``
export const FormInner = styled.div`
  display: flex;
  width: 100%;
  ${Wrapper}:not(.${IS_VERTICAL}) & {
    gap: ${_toCSSUnit('10px')};
  }
  ${Wrapper}.${IS_VERTICAL} & {
    flex-direction: column;
    gap: ${_toCSSUnit('8px')};
  }
`
export const LabelArea = styled.div`
  ${Wrapper}:not(.${IS_VERTICAL}) & {
    align-self: flex-start;
    min-height: ${_toCSSUnit(INPUT_HEIGHT)};
    align-items: center;
    display: flex;
    font-size: 0;
  }
`
export const Label = styled.label`
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Medium']])}
  `}
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/20']]};
  width: max-content;
  max-width: fit-content;
  white-space: normal;
`
export const FormContent = styled.div``
