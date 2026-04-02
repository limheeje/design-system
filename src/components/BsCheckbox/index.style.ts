import {styled, css} from '@vue-styled-components/core'
import {THEME_KEYNAME} from '@/constants/components/BsCheckbox/index'
import {
  _toCSSUnit,
  _toGetBackgroundSVG,
  DESIGNCONFIG_ICON_MAP,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_COLOR,
  _toCSSParse,
  DesignConfigTypography,
  DESIGNCONFIG_KEYNAME_TYPO
} from '@/themes/DesignConfig'

const THEME_1 = THEME_KEYNAME.THEME_1
const THEME_2 = THEME_KEYNAME.THEME_2
const THEME_3 = THEME_KEYNAME.THEME_3
const THEME_4 = THEME_KEYNAME.THEME_4
const THEME_5 = THEME_KEYNAME.THEME_5
const THEME_6 = THEME_KEYNAME.THEME_6
const CHECKBOX_THEME_1 = THEME_KEYNAME.CHECKBOX_THEME_1
export const IS_DISABLED = 'is-disabled'
export const USE_THEME_6_CHECKICON = 'use-theme-6-checkicon'

const checkIconCSS = css`
  content: '';
  display: block;
  width: ${_toCSSUnit('20px')};
  height: ${_toCSSUnit('20px')};
  background: no-repeat center center;
  background-size: 100%;
`

export const Wrapper = styled.span`
  position: relative;
  * {
    box-sizing: border-box;
  }
  display: inline-flex;
`
export const InputLabelText = styled.div`
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/20']]};
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Medium']])}
  `}
`
export const InputLabel = styled.label`
  ${Wrapper}[data-theme="${THEME_1}"] &,
  ${Wrapper}[data-theme="${THEME_2}"] &,
  ${Wrapper}[data-theme="${THEME_3}"] &,
  ${Wrapper}[data-theme="${THEME_4}"] &,
  ${Wrapper}[data-theme="${THEME_5}"] & {
    display: inline-flex;
    min-width: ${_toCSSUnit('24px')};
    min-height: ${_toCSSUnit('24px')};
    padding-left: ${_toCSSUnit('24px')};
    ${InputLabelText} {
      padding-left: ${_toCSSUnit('8px')};
    }
  }
  ${Wrapper}[data-theme="${THEME_6}"] & {
    display: inline-flex;
    background-color: #fff;
    padding-left: ${_toCSSUnit('30px')};
    padding-right: ${_toCSSUnit('30px')};
    align-items: center;
    justify-content: center;
    min-height: ${_toCSSUnit('48px')};
    border-radius: ${_toCSSUnit('4px')};
    border: ${_toCSSUnit('1px')} solid ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/90']]};
    ${InputLabelText} {
      ${css`
        ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Semibold']])}
      `}
      color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/50']]};
    }
  }
  ${Wrapper}:not(.${IS_DISABLED})[data-theme="${THEME_6}"] & {
    &:hover {
      border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/90']]};
      background-color: #e6e6e6;
    }
  }
  ${Wrapper}[data-theme="${CHECKBOX_THEME_1}"] & {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    min-width: ${_toCSSUnit('52px')};
    width: ${_toCSSUnit('52px')};
    height: ${_toCSSUnit('32px')};
    padding-left: ${_toCSSUnit('3px')};
    padding-right: ${_toCSSUnit('3px')};
    border-radius: ${_toCSSUnit('32px')};
    background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/90']]};
    transition: transform 0.3s ease-in-out;
    &:before {
      content: '';
      width: ${_toCSSUnit('26px')};
      height: ${_toCSSUnit('26px')};
      display: block;
      border-radius: 50%;
      background: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['common-0']]};
    }
    ${InputLabelText} {
      opacity: 0;
      width: 0;
      height: 0;
      line-height: 0;
      position: absolute;
      left: 0;
      top: 0;
    }
    &:hover {
      background-color: #a3a3a3;
    }
    &:active {
      &:before {
        animation: shadow-expand 0.5s ease-out forwards;
        transform: scale(1.1);
      }
    }
  }
  @keyframes shadow-expand {
    0% {
      box-shadow: 0 0 0px rgba(52, 152, 219, 0.7);
    }
    50% {
      box-shadow: 0 0 20px rgba(52, 152, 219, 0.7);
    }
    100% {
      box-shadow: 0 0 0px rgba(52, 152, 219, 0);
    }
  }
  ${Wrapper}.${IS_DISABLED} & {
    opacity: 0.5;
  }
`

export const InputCheckUI = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${_toCSSUnit('24px')};
  width: ${_toCSSUnit('24px')};
  height: ${_toCSSUnit('24px')};
  border: ${_toCSSUnit('1px')} solid;
  background-color: #fff;
  ${Wrapper}[data-theme="${THEME_1}"] &,
  ${Wrapper}[data-theme="${THEME_2}"] &,
  ${Wrapper}[data-theme="${THEME_3}"] & {
    &:before {
      ${checkIconCSS}
      background-image: ${_toGetBackgroundSVG(DESIGNCONFIG_ICON_MAP['icon_check_line'], '#fff')};
    }
  }
  ${Wrapper}[data-theme="${THEME_1}"] & {
    border-radius: ${_toCSSUnit('4px')};
    border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/90']]};
  }
  ${Wrapper}[data-theme="${THEME_2}"] & {
    background-color: transparent;
    border-color: transparent;
    &:before {
      background-image: ${_toGetBackgroundSVG(
        DESIGNCONFIG_ICON_MAP['icon_check_line'],
        DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/90']]
      )};
    }
  }
  ${Wrapper}[data-theme="${THEME_3}"] & {
    border-radius: 50%;
    border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/90']]};
  }
  ${Wrapper}[data-theme="${THEME_4}"] &,
  ${Wrapper}[data-theme="${THEME_5}"] & {
    border-radius: 50%;
    border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/90']]};
    &:before {
      content: '';
      display: block;
      border-radius: 50%;
      width: ${_toCSSUnit('8px')};
      height: ${_toCSSUnit('8px')};
      background: transparent;
    }
  }
`

export const inputCSS = styled.input`
  width: 0px;
  height: 0px;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  line-height: 0;
  &:checked + ${InputLabel} ${InputCheckUI} {
    background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
    border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
  }
  ${Wrapper}[data-theme="${THEME_2}"] &:checked + ${InputLabel} ${InputCheckUI} {
    background-color: transparent;
    border-color: transparent;
    &:before {
      background-image: ${_toGetBackgroundSVG(
        DESIGNCONFIG_ICON_MAP['icon_check_line'],
        DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]
      )};
    }
  }
  ${Wrapper}[data-theme="${THEME_4}"] &:checked + ${InputLabel} ${InputCheckUI} {
    &:before {
      background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['common-0']]};
    }
  }
  ${Wrapper}[data-theme="${THEME_5}"] &:checked + ${InputLabel} ${InputCheckUI} {
    border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/90']]};
    background-color: #fff;
    &:before {
      width: ${_toCSSUnit('12px')};
      height: ${_toCSSUnit('12px')};
      background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
    }
  }

  ${Wrapper}[data-theme="${THEME_6}"] &:checked + ${InputLabel} {
    border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
    background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/93']]};
    ${InputLabelText} {
      color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
    }
    &:hover {
      border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
      background-color: #c6e5fd;
    }
  }
  ${Wrapper}[data-theme="${CHECKBOX_THEME_1}"] &:checked + ${InputLabel} {
    background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
    justify-content: flex-end;
    &:hover {
      background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/60']]};
    }
  }
  ${Wrapper}.${USE_THEME_6_CHECKICON}[data-theme="${THEME_6}"] &:checked + ${InputLabel} {
    ${InputLabelText} {
      display: inline-flex;
      gap: ${_toCSSUnit('8px')};
      align-items: center;
      &:before {
        ${checkIconCSS}
        background-image:
          ${_toGetBackgroundSVG(
          DESIGNCONFIG_ICON_MAP['icon_check_line'],
          DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]
        )};
      }
    }
    &:hover {
      border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
      background-color: #c6e5fd;
    }
  }
`
export const InputCheckbox = styled.input.attrs(() => ({
  type: 'checkbox'
}))`
  ${inputCSS}
`
export const InputRadio = styled.input.attrs(() => ({
  type: 'radio'
}))`
  ${inputCSS}
`
