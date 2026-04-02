import {css, styled} from '@vue-styled-components/core'
import {DesignConfigColor, DESIGNCONFIG_KEYNAME_COLOR, _toCSSUnit} from '@/themes/DesignConfig'
import {Wrapper as IconCSS} from '@/components/BsIcon/index.style'
import {COLOR_KEYNAME, THEME_KEYNAME, SIZE_KEYNAME} from '@/constants/components/BsButton/index'
import {RouterLink} from 'vue-router'

const THEME_DEFAULT = THEME_KEYNAME['DEFAULT']
const THEME_DEFAULT_OUTLINE = THEME_KEYNAME['DEFAULT_OUTLINE']
const THEME_PILLS = THEME_KEYNAME['PILLS']
const THEME_PILLS_OUTLINE = THEME_KEYNAME['PILLS_OUTLINE']
const THEME_TEXT = THEME_KEYNAME['TEXT']
const THEME_FLOAT = THEME_KEYNAME['FLOAT']
const SIZE_DEFAULT = SIZE_KEYNAME['DEFAULT']
const SIZE_LARGE = SIZE_KEYNAME['LARGE']
const SIZE_MEDIUM = SIZE_KEYNAME['MEDIUM']
const SIZE_SMALL = SIZE_KEYNAME['SMALL']
export const IS_BLOCK = 'is-block'

const heightSizeDefault = 48
const heightSizeLarge = 52
const heightSizeMedium = 52
const heightSizeSmall = 34

export const ButtonInnerSectionText = styled.span`
  font-family: Pretendard;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  [data-size='${SIZE_DEFAULT}'] & {
    font-size: ${_toCSSUnit('14px')};
    line-height: ${_toCSSUnit('22.4px')};
  }
  [data-size='${SIZE_LARGE}'] & {
    font-size: ${_toCSSUnit('18px')};
    line-height: ${_toCSSUnit('25.2px')};
  }
  [data-size='${SIZE_MEDIUM}'] & {
    font-size: ${_toCSSUnit('16px')};
    line-height: ${_toCSSUnit('22.4px')};
  }
  [data-size='${SIZE_SMALL}'] & {
    font-size: ${_toCSSUnit('13px')};
    line-height: 120%;
  }
  position: relative;
`
export const buttonCSS = css`
  appearance: none;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  text-align: inherit;
  outline: none;
  cursor: pointer;
  &.${IS_BLOCK} {
    width: 100%;
  }
  &[data-theme='${THEME_DEFAULT}'],
  &[data-theme='${THEME_DEFAULT_OUTLINE}'],
  &[data-theme='${THEME_PILLS}'],
  &[data-theme='${THEME_PILLS_OUTLINE}'] {
    position: relative;
    background-color: #fff;
    border: ${_toCSSUnit('1px')} solid;
    padding-left: ${_toCSSUnit('30px')};
    padding-right: ${_toCSSUnit('30px')};
    // &:before {
    //   content: none;
    //   width: 100%;
    //   height: 100%;
    //   position: absolute;
    //   inset: 0;
    //   background: inherit;
    //   filter: brightness(0.8);
    // }
    // &:hover::before {
    //   content: '';
    // }
    &[data-size='${SIZE_DEFAULT}'] {
      height: ${_toCSSUnit(`${heightSizeDefault}px`)};
    }
    &[data-size='${SIZE_LARGE}'] {
      height: ${_toCSSUnit(`${heightSizeLarge}px`)};
    }
    &[data-size='${SIZE_MEDIUM}'] {
      height: ${_toCSSUnit(`${heightSizeMedium}px`)};
    }
    &[data-size='${SIZE_SMALL}'] {
      min-width: 60px;
      padding-left: ${_toCSSUnit('10px')};
      padding-right: ${_toCSSUnit('10px')};
      height: ${_toCSSUnit(`${heightSizeSmall}px`)};
    }
  }
  &[data-theme='${THEME_DEFAULT}'],
  &[data-theme='${THEME_DEFAULT_OUTLINE}'] {
    border-radius: ${_toCSSUnit('4px')};
    &:before {
      border-radius: ${_toCSSUnit('4px')};
    }
  }
  &[data-theme='${THEME_PILLS}'],
  &[data-theme='${THEME_PILLS_OUTLINE}'] {
    border-radius: ${_toCSSUnit('52px')};
    &:before {
      border-radius: ${_toCSSUnit('52px')};
    }
  }
  &[data-theme='${THEME_TEXT}'] {
    border: none;
  }
  ${Object.keys(COLOR_KEYNAME).map((k: string) => {
    const _DesignConfigColor: Record<string, string> = DesignConfigColor
    const _DESIGNCONFIG_KEYNAME_COLOR: string = DESIGNCONFIG_KEYNAME_COLOR[k as keyof typeof DESIGNCONFIG_KEYNAME_COLOR]
    return `&[data-color='${k}'] {
      color: ${_DesignConfigColor[_DESIGNCONFIG_KEYNAME_COLOR]};
      }
      &[data-theme='${THEME_DEFAULT}'][data-color='${k}'],
      &[data-theme='${THEME_PILLS}'][data-color='${k}']{
        border-color: ${_DesignConfigColor[_DESIGNCONFIG_KEYNAME_COLOR]};
        background-color: ${_DesignConfigColor[_DESIGNCONFIG_KEYNAME_COLOR]};
        ${
          k === DESIGNCONFIG_KEYNAME_COLOR['kcpgray/90'] ||
          k === DESIGNCONFIG_KEYNAME_COLOR['kcpgray/93'] ||
          k === DESIGNCONFIG_KEYNAME_COLOR['kcpgray/97'] ||
          k === DESIGNCONFIG_KEYNAME_COLOR['common-0']
            ? `color: ${_DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/10']]}`
            : `color: #fff;`
        }
        
      }
      `
  })}

  &[data-theme='${THEME_FLOAT}'] {
    width: ${_toCSSUnit('56px')};
    height: ${_toCSSUnit('56px')};
    border-radius: 50%;
    background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
    box-shadow:
      0px ${_toCSSUnit('6px')} ${_toCSSUnit('12px')} 0px rgba(0, 0, 0, 0.12),
      0px ${_toCSSUnit('4px')} ${_toCSSUnit('8px')} 0px rgba(0, 0, 0, 0.08),
      0px ${_toCSSUnit('0px')} ${_toCSSUnit('4px')} 0px rgba(0, 0, 0, 0.08);
    ${ButtonInnerSectionText} {
      display: flex;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`
export const WrapperButton = styled.button`
  ${buttonCSS}
`
export const WrapperRouterLink = styled(RouterLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  sizing-box: border-box;
  ${buttonCSS}
  &[data-theme='${THEME_DEFAULT}'],
  &[data-theme='${THEME_DEFAULT_OUTLINE}'],
  &[data-theme='${THEME_PILLS}'],
  &[data-theme='${THEME_PILLS_OUTLINE}'] {
    border: ${_toCSSUnit('1px')} solid;
    padding-left: ${_toCSSUnit('30px')};
    padding-right: ${_toCSSUnit('30px')};
    &[data-size='${SIZE_DEFAULT}'] {
      height: ${_toCSSUnit(`${heightSizeDefault - 2}px`)};
    }
    &[data-size='${SIZE_LARGE}'] {
      height: ${_toCSSUnit(`${heightSizeLarge - 2}px`)};
    }
    &[data-size='${SIZE_MEDIUM}'] {
      height: ${_toCSSUnit(`${heightSizeMedium - 2}px`)};
    }
    &[data-size='${SIZE_SMALL}'] {
      min-width: ${_toCSSUnit('60px')};
      padding-left: ${_toCSSUnit('10px')};
      padding-right: ${_toCSSUnit('10px')};
      height: ${_toCSSUnit(`${heightSizeSmall - 2}px`)};
    }
  }
`

export const ButtonInnerSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${_toCSSUnit('8px')};
`
const ButtonIconCSS = css`
  display: flex;
  width: ${_toCSSUnit('20px')};
  height: ${_toCSSUnit('20px')};
  ${IconCSS} {
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
  }
`
export const ButtonInnerSectionLeft = styled.div`
  ${ButtonIconCSS}
`
export const ButtonInnerSectionRight = styled.div`
  ${ButtonIconCSS}
`
