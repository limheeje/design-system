import {styled, css} from '@vue-styled-components/core'
import {
  Wrapper as _Wrapper,
  InputInnerSectionSelectArea as InputInnerSectionArea,
  INPUT_HEIGHT,
  InputButton,
  InputSectionRightArea as _InputSectionRightArea,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  InputConfirmMasseage
} from '@/components/BsInputField/index.style'
import {
  DESIGNCONFIG_ICON_MAP,
  DESIGNCONFIG_KEYNAME_TYPO,
  _toGetBackgroundSVG,
  _toCSSUnit,
  _toCSSParse,
  DesignConfigColor,
  DesignConfigTypography,
  DESIGNCONFIG_KEYNAME_COLOR
} from '@/themes/DesignConfig'

const DROPDOWN_LAYER_RADIUS = '8px'
export const IS_DROPDOWN_OPEN = 'is-dropdown-open'
export const IS_ACTIVE = 'is-active'
export const USE_SELECTED_THEME2 = 'use-selected-theme2'

const Wrapper = styled(_Wrapper)`
  position: relative;
`
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

const DropdownLayer = styled.div`
  position: absolute;
  top: calc(${INPUT_HEIGHT} + ${_toCSSUnit('8px')});
  left: 0;
  width: 100%;
  z-index: 10;
`
const DropdownLayerInner = styled.div`
  background: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['common-0']]};
  border-radius: ${_toCSSUnit(DROPDOWN_LAYER_RADIUS)};
  box-shadow: 0px ${_toCSSUnit('4px')} ${_toCSSUnit('16px')} 0px rgba(0, 0, 0, 0.04);
`
const OptionGroup = styled.div``
const OptionButton = styled.button`
  padding: ${_toCSSUnit('16px')};
  width: 100%;
  border: none;
  background: transparent;
  display: flex;
  word-break: break-all;
  gap: ${_toCSSUnit('16px')};
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Semibold']])}
  `}
  &:after {
    content: none;
    width: ${_toCSSUnit('20px')};
    min-width: ${_toCSSUnit('20px')};
    height: ${_toCSSUnit('20px')};
    margin-left: auto;
    margin-right: 0;
    display: block;
    background: no-repeat center center
      ${_toGetBackgroundSVG(
        DESIGNCONFIG_ICON_MAP['icon_check_line'],
        DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]
      )};
    background-size: 100%;
  }
  &:not(.${USE_SELECTED_THEME2}):hover,
  &:not(.${USE_SELECTED_THEME2}).${IS_ACTIVE} {
    background: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/93']]};
    color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
  }
  &.${USE_SELECTED_THEME2}:hover, &.${USE_SELECTED_THEME2}.${IS_ACTIVE} {
    color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
    &:after {
      content: '';
    }
  }
`
const OptionItem = styled.div`
  &:first-child ${OptionButton} {
    border-top-left-radius: ${_toCSSUnit(DROPDOWN_LAYER_RADIUS)};
    border-top-right-radius: ${_toCSSUnit(DROPDOWN_LAYER_RADIUS)};
  }
  &:last-child ${OptionButton} {
    border-bottom-left-radius: ${_toCSSUnit(DROPDOWN_LAYER_RADIUS)};
    border-bottom-right-radius: ${_toCSSUnit(DROPDOWN_LAYER_RADIUS)};
  }
`

export {
  Wrapper,
  InputInnerSectionArea,
  InputButton,
  InputSectionRightArea,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  DropdownLayer,
  DropdownLayerInner,
  OptionGroup,
  OptionItem,
  OptionButton,
  InputConfirmMasseage
}
