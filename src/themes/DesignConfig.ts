import _ from 'lodash'
import * as KeyNamegroup from '@/themes/common/keynameGroup'
import iconMapGroup, {ICON_MAP_KEYNAME} from '@/themes/common/iconMapGroup'
import {css} from '@vue-styled-components/core'

export interface Type {
  colorSet: object
  typography: Record<string, any>
}

export const CSS_FONTFAMLIY_NAME = 'Pretendard'
export const DESIGNCONFIG_KEYNAME_ROOT_COLOR: Record<string, any> = KeyNamegroup.DESIGNCONFIG_KEYNAME_ROOT_COLOR
export const DESIGNCONFIG_KEYNAME_ROOT_CHART_COLOR: Record<string, any> =
  KeyNamegroup.DESIGNCONFIG_KEYNAME_ROOT_CHART_COLOR
export const DESIGNCONFIG_KEYNAME_TYPO: Record<string, any> = KeyNamegroup.DESIGNCONFIG_KEYNAME_TYPO
export const DESIGNCONFIG_KEYNAME_COLOR: Record<string, any> = KeyNamegroup.DESIGNCONFIG_KEYNAME_COLOR
export const DESIGNCONFIG_KEYNAME_CHART_COLOR: Record<string, any> = KeyNamegroup.DESIGNCONFIG_KEYNAME_CHART_COLOR
export const DESIGNCONFIG_ICON_MAP: Record<string, any> = iconMapGroup
export const DESIGNCONFIG_KEYNAME_ICON: Record<string, any> = ICON_MAP_KEYNAME

export const _toCSSUnit = (s: string) =>
  _.replace(s, /(-?\d+(\.\d+)?)px/g, (__, v) => {
    if (v === '1') {
      // return `1px`
      return `calc(var(--ui-basic-component-fontsize) / 16 * ${v})`
    } else {
      return `calc(var(--ui-basic-component-fontsize) / 16 * ${v})`
    }
  })
export const _toCSSParse = (params: Record<string, any>) =>
  _.join(
    _.map(params, (v: string, k: any) => `${k}: ${v};`),
    ''
  )

export const _toGetBackgroundSVG = (s: string, c?: string) => {
  const reg = new RegExp(/#([0-9a-fA-F]{3,6})\b/g)
  const _v = `data:image/svg+xml;utf8`
  const _c =
    (() => {
      const regExp = /--[\w-]+/
      if (c) {
        if (regExp.test(c)) {
          return Object.values(DESIGNCONFIG_KEYNAME_ROOT_COLOR).find(
            (color) => color.property === (c as any).match(regExp)[0]
          )?.value
        } else {
          return c
        }
      }
    })() || '#000'
  const _s = s.replace(reg, _c).replace(reg, '%23$1')
  return `url('${_v},${_s}')`
}

export const _innerScrollCSS = css`
  &::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
  }
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
`

export default class DesignConfig {
  static colorSet = {
    primary: '#3498db',
    error: '#e74c3c',
    warning: '#f1c40f',
    success: '#2ecc71',
    background: '#ecf0f1',
    text: '#2c3e50'
  }
  static typographyParams = (params: Record<string, any>) => ({
    ...{
      'font-family': CSS_FONTFAMLIY_NAME,
      'font-size': _toCSSUnit('22px'),
      'font-weight': 400,
      'line-height': _toCSSUnit('35.2px'),
      'text-align': 'left',
      'text-underline-position': 'from-font',
      'text-decoration-skip-ink': 'none'
    },
    ...params
  })
  static typography = {
    [DESIGNCONFIG_KEYNAME_TYPO['H1/Bold']]: this.typographyParams({
      'font-size': _toCSSUnit('22px'),
      'line-height': _toCSSUnit('35.2px'),
      'font-weight': 700
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['T1/Bold']]: this.typographyParams({
      'font-size': _toCSSUnit('18px'),
      'line-height': _toCSSUnit('28.8px'),
      'font-weight': 700
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['T1/Medium']]: this.typographyParams({
      'font-size': _toCSSUnit('18px'),
      'line-height': _toCSSUnit('28.8px'),
      'font-weight': 500
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['T2/Semibold']]: this.typographyParams({
      'font-size': _toCSSUnit('16px'),
      'line-height': _toCSSUnit('25.6px'),
      'font-weight': 600
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['T2/Medium']]: this.typographyParams({
      'font-size': _toCSSUnit('16px'),
      'font-weight': 500,
      'line-height': _toCSSUnit('25.6px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body1/Bold']]: this.typographyParams({
      'font-size': _toCSSUnit('14px'),
      'font-weight': 700,
      'line-height': _toCSSUnit('22.4px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body1/Semibold']]: this.typographyParams({
      'font-size': _toCSSUnit('14px'),
      'font-weight': 600,
      'line-height': _toCSSUnit('22.4px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body1/Medium']]: this.typographyParams({
      'font-size': _toCSSUnit('14px'),
      'font-weight': 500,
      'line-height': _toCSSUnit('22.4px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body1/Regular']]: this.typographyParams({
      'font-size': _toCSSUnit('14px'),
      'font-weight': 400,
      'line-height': _toCSSUnit('22.4px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body2/Bold']]: this.typographyParams({
      'font-size': _toCSSUnit('13px'),
      'font-weight': 700,
      'line-height': _toCSSUnit('18.2px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body2/Semibold']]: this.typographyParams({
      'font-size': _toCSSUnit('13px'),
      'font-weight': 600,
      'line-height': _toCSSUnit('18.2px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body2/Medium']]: this.typographyParams({
      'font-size': _toCSSUnit('13px'),
      'font-weight': 500,
      'line-height': _toCSSUnit('18.2px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body2/Regular']]: this.typographyParams({
      'font-size': _toCSSUnit('13px'),
      'font-weight': 400,
      'line-height': _toCSSUnit('18.2px')
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Body3/Medium']]: this.typographyParams({
      'font-size': _toCSSUnit('14px'),
      'font-weight': 500,
      'line-height': '140%'
    }),
    [DESIGNCONFIG_KEYNAME_TYPO['Caption1/Medium']]: this.typographyParams({
      'font-size': _toCSSUnit('12px'),
      'font-weight': 500,
      'line-height': _toCSSUnit('16.7px')
    })
  }
  static color = Object.keys(DESIGNCONFIG_KEYNAME_ROOT_COLOR).reduce((o: Record<string, any>, v: string) => {
    o[v] = `var(${DESIGNCONFIG_KEYNAME_ROOT_COLOR[v].property})`
    return o
  }, {})
  static setProperty = Object.values(DESIGNCONFIG_KEYNAME_ROOT_COLOR).reduce((o, {property, value}) => {
    o[property] = value
    return o
  }, {})
  static chartColor = Object.keys(DESIGNCONFIG_KEYNAME_ROOT_CHART_COLOR).reduce((o: Record<string, any>, v: string) => {
    o[v] = `var(${DESIGNCONFIG_KEYNAME_ROOT_CHART_COLOR[v].property})`
    return o
  }, {})
  static chartSetProperty = Object.values(DESIGNCONFIG_KEYNAME_ROOT_CHART_COLOR).reduce((o, {property, value}) => {
    o[property] = value
    return o
  }, {})
}
export const DesignConfigTypography: Record<string, any> = DesignConfig.typography
export const DesignConfigColor: Record<string, any> = DesignConfig.color
export const DesignConfigSetProperty: Record<string, any> = DesignConfig.setProperty
export const DesignConfigChartColor: Record<string, any> = DesignConfig.chartColor
export const DesignConfigChartSetProperty: Record<string, any> = DesignConfig.chartSetProperty
