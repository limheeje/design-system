import {styled} from '@vue-styled-components/core'
import {
  Wrapper as _Wrapper,
  InputInnerSectionSelectArea as InputInnerSectionArea,
  InputSelect,
  InputSectionRightArea as _InputSectionRightArea,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  InputConfirmMasseage
} from '@/components/BsInputField/index.style'
import {IS_DROPDOWN_OPEN} from '@/components/BsSelectCustom/index.style'
import {
  DESIGNCONFIG_ICON_MAP,
  _toGetBackgroundSVG,
  _toCSSUnit,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_COLOR
} from '@/themes/DesignConfig'

const Wrapper = styled(_Wrapper)``
const InputSectionRightArea = styled(_InputSectionRightArea)`
  .ic-select-arrow {
    width: ${_toCSSUnit('16px')};
    height: ${_toCSSUnit('16px')};
    display: block;
    background: no-repeat center center
      ${_toGetBackgroundSVG(
        DESIGNCONFIG_ICON_MAP['icon_arrow_down_line'],
        DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/40']]
      )};
    background-size: 100%;
  }
  ${Wrapper}.${IS_DROPDOWN_OPEN} & {
    .ic-select-arrow {
      background-image: ${_toGetBackgroundSVG(
        DESIGNCONFIG_ICON_MAP['icon_arrow_up_line'],
        DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/40']]
      )};
    }
  }
`

export {
  Wrapper,
  IS_DROPDOWN_OPEN,
  InputInnerSectionArea,
  InputSelect,
  InputSectionRightArea,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  InputConfirmMasseage
}
