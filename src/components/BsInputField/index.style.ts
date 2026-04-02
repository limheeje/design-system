import {styled, css} from '@vue-styled-components/core'
import {
  DesignConfigTypography,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_TYPO,
  DESIGNCONFIG_KEYNAME_COLOR,
  DESIGNCONFIG_ICON_MAP,
  _toGetBackgroundSVG,
  _toCSSParse,
  _toCSSUnit
} from '@/themes/DesignConfig'

export const IS_READONLY = 'is-readonly'
export const IS_DISABLED = 'is-disabled'
export const IS_CONFIRM = 'is-confirm'
export const IS_ERROR = 'is-error'
export const IS_FOCUS = 'is-focus'
export const THEME_2 = 'theme-2'

export const INPUT_HEIGHT = '46px' // 인풋높이 48을 맞추기위한 46선언 + 위아래테두리+2
export const Wrapper = styled.div`
  min-width: ${_toCSSUnit('276px')};
`
export const InputInnerSectionAreaCSS = css`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${_toCSSUnit('10px')};
  border-radius: ${_toCSSUnit('4px')};
  padding: 0 ${_toCSSUnit('16px')};
  overflow: hidden;
  ${(props) => {
    const style = {
      background: DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['common-0']],
      'border-width': _toCSSUnit('1px'),
      'border-style': 'solid',
      'border-color': DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/93']]
    }
    const _is = (s: string) => props.class?.includes(s)
    if (_is(IS_DISABLED) || _is(IS_READONLY)) {
      style['background'] = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/95']]
      style['border-color'] = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/93']]
    } else if (_is(IS_ERROR)) {
      style['border-color'] = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpred/50']]
    } else if (_is(IS_CONFIRM)) {
      style['border-color'] = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]
    } else if (_is(IS_FOCUS)) {
      style['border-color'] = DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]
    }

    return css`
      ${_toCSSParse(style)}
    `
  }}
  [data-theme="${THEME_2}"] & {
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    border-radius: 0px;
    padding: 0;
    background-color: transparent;
  }
`
export const InputInnerSectionArea = styled('div', {
  class: String
})`
  ${InputInnerSectionAreaCSS}
`
export const InputInnerSectionSelectArea = styled('div', {
  class: String
})`
  ${InputInnerSectionAreaCSS}
  position: relative;
  height: ${_toCSSUnit(INPUT_HEIGHT)};
`
export const inputCSS = css`
  margin: 0;
  padding: 0;
  appearance: none;
  border: none;
  width: 100%;
  background: transparent;
  height: ${_toCSSUnit(INPUT_HEIGHT)};
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Regular']])}
  `} &::placeholder {
    color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/60']]};
  }
  &:focus {
    outline: none;
  }
`
export const InputField = styled.input`
  ${inputCSS}
  &:disabled {
    color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/80']]};
  }
`
export const InputSelect = styled.select`
  ${inputCSS}
  padding-left: ${_toCSSUnit('16px')};
  position: absolute;
  left: 0;
  top: 0;
  ${Wrapper}[data-theme="${THEME_2}"] & {
    padding-left: 0;
  }
  &:disabled {
    color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/80']]};
  }
`
export const InputButton = styled.button`
  ${inputCSS}
  cursor: auto;
  &:disabled {
    color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/80']]};
    opacity: 0.78;
  }
`

export const InputSectionLeftArea = styled.div`
  margin-left: 0;
  margin-right: auto;
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: ${_toCSSUnit('8px')};
`

export const InputSectionRightArea = styled.div`
  margin-left: auto;
  margin-right: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: ${_toCSSUnit('8px')};
`
export const InputValueTimerange = styled.div`
  white-space: nowrap;
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body2/Regular']])}
  `}
`

export const InputValueResetButton = styled.button`
  width: ${_toCSSUnit('20px')};
  height: ${_toCSSUnit('20px')};
  cursor: pointer;
  border: none;
  background: no-repeat center center;
  background-size: 100%;
  background-image: ${_toGetBackgroundSVG(
    DESIGNCONFIG_ICON_MAP['icon_cancel_fill'],
    DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/60']]
  )};
`

export const InputOuterSectionArea = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: ${_toCSSUnit('6px')};
  background: ${(props) => props.theme.primaryColor};
`

// input외부 텍스트 스타일
const textMasseageStyle = css`
  ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body2/Regular']])}
`
export const InputSupportMasseage = styled.div`
  ${textMasseageStyle}
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/50']]};
`
export const InputErrorMasseage = styled.div`
  ${textMasseageStyle}
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpred/50']]};
`
export const InputConfirmMasseage = styled.div`
  ${textMasseageStyle}
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
`
