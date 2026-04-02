import {styled, css} from '@vue-styled-components/core'
import {
  _toCSSParse,
  _toCSSUnit,
  DesignConfigTypography,
  DESIGNCONFIG_KEYNAME_TYPO,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_COLOR,
  _toGetBackgroundSVG,
  DESIGNCONFIG_ICON_MAP
} from '@/themes/DesignConfig'
import iconMapGroup from '@/themes/common/iconMapGroup'
import {THEME_KEYNAME} from '@/constants/components/BsPagination/index'

const THEME_1 = THEME_KEYNAME.THEME_1
const THEME_2 = THEME_KEYNAME.THEME_2
export const IS_ACTIVE = 'is-active'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const BsPaginationInner = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${_toCSSUnit('10px')};
`
export const BsPaginationItem = styled.div``
export const BsPaginationButtonCss = css`
  box-sizing: border-box;
  min-width: ${_toCSSUnit('32px')};
  height: ${_toCSSUnit('32px')};
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: ${_toCSSUnit('1px')} solid transparent;
  background: transparent no-repeat center center;
  background-size: ${_toCSSUnit('24px')};
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Bold']])}
  `};
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/10']]};
  border-radius: ${_toCSSUnit('4px')};
  ${Wrapper}[data-theme="${THEME_1}"] & {
    border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/93']]};
    background-color: #fff;
    &.${IS_ACTIVE} {
      border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
      color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
    }
  }
  ${Wrapper}[data-theme="${THEME_2}"] & {
    &.${IS_ACTIVE} {
      border-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
      background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
      color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['common-0']]};
    }
  }

  ${(props) => {
    const getIcons = (t: string, c: string) => {
      const _t = t as keyof typeof iconMapGroup
      const _c = c as keyof typeof DESIGNCONFIG_KEYNAME_COLOR
      return _toGetBackgroundSVG(DESIGNCONFIG_ICON_MAP[_t], DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR[_c]])
    }
    const disabledBackgroundColor = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/95']]
    const disabledBorderColor = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/93']]

    if (props.type === 'prev') {
      return `
        background-image: ${getIcons('icon_arrow_s_before_line', 'kcpgray/10')};
         [data-theme="${THEME_1}"] &:disabled{
            background-color: ${disabledBackgroundColor};
            border-color: ${disabledBorderColor};
            background-image: ${getIcons('icon_arrow_s_before_line', 'kcpgray/80')};
        }
         [data-theme="${THEME_2}"] &:disabled{
            background-image: ${getIcons('icon_arrow_s_before_line', 'kcpgray/80')};
        }
        `
    }
    if (props.type === 'dprev') {
      return `
       background-image: ${getIcons('icon_arrow_double_left_line', 'kcpgray/10')};
         [data-theme="${THEME_1}"] &:disabled{
            background-color: ${disabledBackgroundColor};
            border-color: ${disabledBorderColor};
            background-image: ${getIcons('icon_arrow_double_left_line', 'kcpgray/80')};
        }
        [data-theme="${THEME_2}"] &:disabled{
            background-image: ${getIcons('icon_arrow_double_left_line', 'kcpgray/80')};
        }
        `
    }
    if (props.type === 'next') {
      return `
      background-image: ${getIcons('icon_arrow_s_next_line', 'kcpgray/10')};
        [data-theme="${THEME_1}"] &:disabled{
            background-color: ${disabledBackgroundColor};
            border-color: ${disabledBorderColor};
            background-image: ${getIcons('icon_arrow_s_next_line', 'kcpgray/80')};
        }
        [data-theme="${THEME_2}"] &:disabled{
            background-image: ${getIcons('icon_arrow_s_next_line', 'kcpgray/80')};
        }
        `
    }
    if (props.type === 'dnext') {
      return `
      background-image: ${getIcons('icon_arrow_double_right_line', 'kcpgray/10')};
         [data-theme="${THEME_1}"] &:disabled{
            background-color: ${disabledBackgroundColor};
            border-color: ${disabledBorderColor};
            background-image: ${getIcons('icon_arrow_double_right_line', 'kcpgray/80')};
        }
         [data-theme="${THEME_2}"] &:disabled{
            background-image: ${getIcons('icon_arrow_double_right_line', 'kcpgray/80')};
        }
        `
    }
  }}
`
export const BsPaginationButton = styled('button', {
  type: String
})`
  cursor: pointer;
  ${BsPaginationButtonCss}
`
export const BsPaginationisMore = styled.span`
  ${BsPaginationButtonCss}
`
