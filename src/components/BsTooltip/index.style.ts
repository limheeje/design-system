import {styled, css} from '@vue-styled-components/core'
import {
  DesignConfigTypography,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_TYPO,
  DESIGNCONFIG_ICON_MAP,
  DESIGNCONFIG_KEYNAME_COLOR,
  _toGetBackgroundSVG,
  _toCSSParse,
  _toCSSUnit
} from '@/themes/DesignConfig'
import {THEME_KEYNAME} from '@/constants/components/BsTooltip/index'
import {ALIGN_KEYNAME} from '@/constants/components/BsModal/index'

const THEME_1 = THEME_KEYNAME.THEME_1
const THEME_2 = THEME_KEYNAME.THEME_2

export const Wrapper = styled.span`
  position: relative;
  display: inline-flex;
`
const arrowCSS = css`
  width: 0;
  height: 0;
  border-left: ${_toCSSUnit('8px')} solid transparent;
  border-right: ${_toCSSUnit('8px')} solid transparent;
  ${Wrapper}[data-theme="${THEME_1}"] & {
    border-bottom: ${_toCSSUnit('8px')} solid ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/20']]};
  }
  ${Wrapper}[data-theme="${THEME_2}"] & {
    border-bottom: ${_toCSSUnit('8px')} solid ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['common-0']]};
  }
`
export const TooltipBoxTextArea = styled.div`
  white-space: nowrap;
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Caption1/Medium']])}
  `}
`
export const TooltipBoxCloseButton = styled.button`
  border: none;
  background: transparent;
  max-width: ${_toCSSUnit('16px')};
  width: ${_toCSSUnit('16px')};
  height: ${_toCSSUnit('16px')};
  display: block;
  cursor: pointer;
  background: transparent no-repeat center center
    ${_toGetBackgroundSVG(
      DESIGNCONFIG_ICON_MAP['icon_cancle'],
      DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['common-0']]
    )};
  background-size: 100%;
  ${Wrapper}[data-theme="${THEME_2}"] & {
    background-image: ${_toGetBackgroundSVG(
      DESIGNCONFIG_ICON_MAP['icon_cancle'],
      DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['common-100']]
    )};
  }
`
export const TooltipBox = styled.div`
  z-index: 1000;
  position: absolute;
  border-radius: ${_toCSSUnit('8px')};
  padding: ${_toCSSUnit('10px')};
  display: inline-flex;
  align-items: flex-start;
  gap: ${_toCSSUnit('10px')};
  &:before {
    content: '';
    position: absolute;
    ${arrowCSS}
  }
  ${Wrapper}[data-theme="${THEME_1}"] & {
    background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/20']]};
    ${TooltipBoxTextArea} {
      color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['common-0']]};
    }
  }
  ${Wrapper}[data-theme="${THEME_2}"] & {
    background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['common-0']]};
    box-shadow: 0 ${_toCSSUnit('10px')} ${_toCSSUnit('10px')} rgba(0, 0, 0, 0.08);
    ${TooltipBoxTextArea} {
      color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/20']]};
    }
  }

  ${Wrapper}[data-align="${ALIGN_KEYNAME.CENTER_BOTTOM}"] & {
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    margin-top: ${_toCSSUnit('10px')};
    &:before {
      left: 50%;
      transform: translateX(-50%);
      bottom: 100%;
    }
  }
  ${Wrapper}[data-align="${ALIGN_KEYNAME.LEFT_CENTER}"] & {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: ${_toCSSUnit('10px')};
    &:before {
      left: ${_toCSSUnit('-12px')};
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
    }
  }
  ${Wrapper}[data-align="${ALIGN_KEYNAME.CENTER_TOP}"] & {
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%);
    margin-bottom: ${_toCSSUnit('10px')};
    &:before {
      left: 50%;
      bottom: ${_toCSSUnit('-12px')};
      transform: translateY(-50%) rotate(-180deg);
    }
  }
  ${Wrapper}[data-align="${ALIGN_KEYNAME.RIGHT_CENTER}"] & {
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-right: ${_toCSSUnit('10px')};
    &:before {
      right: ${_toCSSUnit('-12px')};
      top: 50%;
      transform: translateY(-50%) rotate(90deg);
    }
  }
`
