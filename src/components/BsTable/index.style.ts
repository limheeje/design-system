import {styled, css} from '@vue-styled-components/core'
import {THEME_KEYNAME} from '@/constants/components/BsTable'
import {
  DesignConfigTypography,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_TYPO,
  DESIGNCONFIG_KEYNAME_COLOR,
  _toCSSParse,
  _toCSSUnit
} from '@/themes/DesignConfig'

const THEME_1 = THEME_KEYNAME['THEME_1']
const THEME_2 = THEME_KEYNAME['THEME_2']
const THEME_3 = THEME_KEYNAME['THEME_3']
const paddingTopBottom = _toCSSUnit('12px')
const paddingLeftRight = _toCSSUnit('16px')
const backgroundColor = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/97']]
const borderColor = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/95']]
export const TYPO_LOW_LEVEL = 'typo-low-level'
export const BORDER_LEFT = 'border-left'
export const BORDER_RIGHT = 'border-right'
export const BORDER_TOP = 'border-top'
export const BORDER_BOTTOM = 'borderbottomt'
export const USE_LEFT = 'use-left'
export const USE_XSCOLL = 'use-xscoll'
export const USE_HOVER = 'use-hover'

export const Wrapper = styled.div`
  background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['common-0']]};
  &.${USE_XSCOLL} {
    overflow: hidden;
    overflow-x: auto;
  }
`
export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  ${Wrapper}[data-theme="${THEME_1}"] &,
  ${Wrapper}[data-theme="${THEME_2}"] & {
    border-top: ${_toCSSUnit('1px')} solid ${borderColor};
  }
  & * {
    word-break: break-all;
  }
`

const tdtrCSS = css`
  padding: ${paddingTopBottom} ${paddingLeftRight};
  border-bottom: ${_toCSSUnit('1px')} solid ${borderColor};
  text-align: center;
  ${Wrapper}[data-theme="${THEME_1}"] & {
    border-right: ${_toCSSUnit('1px')} solid ${borderColor};
    &:last-child {
      border-right: none;
    }
  }
  ${Wrapper}[data-theme="${THEME_2}"] & {
  }
  ${Wrapper}[data-theme="${THEME_3}"] & {
  }
  ${Wrapper}.${USE_LEFT} & {
  }
  ${Wrapper}.${USE_XSCOLL} & {
    white-space: nowrap;
  }
  &.${BORDER_LEFT} {
    border-left: ${_toCSSUnit('1px')} solid ${borderColor};
  }
  &.${BORDER_RIGHT} {
    border-right: ${_toCSSUnit('1px')} solid ${borderColor};
  }
  &.${BORDER_TOP} {
    border-top: $ ${_toCSSUnit('1px')} solid ${borderColor};
  }
  &.${BORDER_BOTTOM} {
    border-bottom: ${_toCSSUnit('1px')} solid ${borderColor};
  }
  ${Wrapper} &.${TYPO_LOW_LEVEL} {
    ${css`
      ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body2/Regular']])}
    `}
  }
`

export const Th = styled.th`
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/30']]};
  ${Wrapper}[data-theme="${THEME_1}"] &,
  ${Wrapper}[data-theme="${THEME_2}"] & {
    ${css`
      ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Bold']])}
    `}
    background-color: ${backgroundColor};
    text-align: center;
  }
  ${tdtrCSS}
  ${Wrapper}[data-theme="${THEME_3}"] & {
    ${css`
      ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Semibold']])}
    `}
    border-bottom-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/10']]};
    text-align: center;
  }
`
export const Td = styled.td`
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/20']]};
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Medium']])}
  `}
  ${tdtrCSS}
`
export const Thead = styled.thead``
export const Tbody = styled.tbody``
export const Tr = styled.tr`
  ${Wrapper}.${USE_HOVER} & {
    &:hover {
      ${Td} {
        background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/93']]};
        color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]} !important;
      }
    }
  }
`

export const WrapperNull = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`
export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${_toCSSUnit('12px')};
  padding: ${_toCSSUnit('24px')} 0;
`
export const Icon = styled.div`
  width: ${_toCSSUnit('52px')};
  height: ${_toCSSUnit('52px')};
  svg {
    width: 100%;
    height: 100%;
  }
`
export const Text = styled.div`
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body3/Medium']])}
  `}
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/30']]};
  text-align: center;
`
