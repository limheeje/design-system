import {styled} from '@vue-styled-components/core'
import {
  Wrapper,
  InputInnerSectionAreaCSS,
  InputField,
  IS_DISABLED,
  IS_CONFIRM,
  IS_ERROR,
  IS_FOCUS,
  InputSectionLeftArea,
  InputSectionRightArea,
  InputValueTimerange,
  InputValueResetButton,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  InputConfirmMasseage
} from '@/components/BsInputField/index.style'
import {_toCSSUnit} from '@/themes/DesignConfig'

const InputInnerSectionArea = styled('div', {
  class: String
})`
  ${InputInnerSectionAreaCSS}
  position: relative;
`
const InputFieldFile = styled('input', {})`
  margin-left: ${_toCSSUnit('-16px')};
  position: absolute;
  opacity: 0;
  background: transparent;
  width: 100%;
  height: 100%;
`

export {
  Wrapper,
  InputInnerSectionArea,
  InputField,
  IS_DISABLED,
  IS_CONFIRM,
  IS_ERROR,
  IS_FOCUS,
  InputFieldFile,
  InputSectionLeftArea,
  InputSectionRightArea,
  InputValueTimerange,
  InputValueResetButton,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  InputConfirmMasseage
}
