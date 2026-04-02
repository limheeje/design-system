import {styled, css} from '@vue-styled-components/core'
import {
  DesignConfigTypography,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_COLOR,
  DESIGNCONFIG_KEYNAME_TYPO,
  _toCSSUnit,
  _toCSSParse
} from '@/themes/DesignConfig'
import {
  Wrapper,
  InputInnerSectionAreaCSS,
  inputCSS,
  InputSectionLeftArea,
  InputSectionRightArea,
  InputValueTimerange,
  InputValueResetButton,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  InputConfirmMasseage,
  INPUT_HEIGHT
} from '@/components/BsInputField/index.style'

const USE_RESPONSE_HEIGHT = 'use-response-height'

const WrapperTextarea = styled.div`
  ${Wrapper};
`
const InputInnerSectionArea = styled('div', {
  class: String
})`
  ${InputInnerSectionAreaCSS};
  padding: ${_toCSSUnit('16px')};
  flex-direction: column;
  ${WrapperTextarea}.${USE_RESPONSE_HEIGHT} & {
    padding-top: 0;
    padding-bottom: 0;
  }
`
const InputTextarea = styled.textarea`
  ${inputCSS};
  height: ${_toCSSUnit('128px')};
  resize: none;
  word-wrap: break-word;
  white-space: pre-wrap;
  ${WrapperTextarea}.${USE_RESPONSE_HEIGHT} & {
    height: ${_toCSSUnit(INPUT_HEIGHT)};
    padding: ${_toCSSUnit('13px')} 0;
  }
`

export const InputInnerBottomSectionArea = styled.div`
  margin-top: ${_toCSSUnit('10px')};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const TextareaButtonGroup = styled.div`
  margin-left: auto;
  margin-right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${_toCSSUnit('10px')};
  &.use-outer-section {
    margin-top: ${_toCSSUnit('16px')};
  }
`
export const InputByteCheckArea = styled.span`
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Regular']])}
  `}
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/60']]};
`

export {
  WrapperTextarea,
  InputInnerSectionArea,
  InputTextarea,
  InputSectionLeftArea,
  InputSectionRightArea,
  InputValueTimerange,
  InputValueResetButton,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  InputConfirmMasseage
}
