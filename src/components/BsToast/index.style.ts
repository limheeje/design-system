import {styled, css} from '@vue-styled-components/core'
import {AlignCSS, ModalHeaderCloseButton} from '@/components/BsModal/index.style'
import {
  _toCSSUnit,
  _toCSSParse,
  _toGetBackgroundSVG,
  DESIGNCONFIG_ICON_MAP,
  DESIGNCONFIG_KEYNAME_TYPO,
  DesignConfigTypography,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_COLOR
} from '@/themes/DesignConfig'

const IS_SHADOW = 'is-shadow'
const IS_HEADERICON = 'is-headericon'
const USE_TEXT_ACTION_BUTTON = 'use-text-action-button'

export const TeleportWrapper = styled.div`
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 4500;
  box-sizing: border-box;
  padding: ${_toCSSUnit('20px')};
  ${AlignCSS}
  * {
    pointer-events: initial;
  }
`
export const TeleportInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${_toCSSUnit('10px')};
  * {
    pointer-events: initial;
  }
`
export const Wrapper = styled.div`
  * {
    pointer-events: initial;
  }
`
export const ToastInnerSection = styled.div`
  padding: ${_toCSSUnit('24px')};
  min-width: ${_toCSSUnit('350px')};
  border-radius: ${_toCSSUnit('8px')};
  background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['common-0']]};
  .${IS_SHADOW} & {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`
export const ToastHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ToastHeaderText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${_toCSSUnit('12px')};
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/10']]};
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['T2/Semibold']])}
  `}
`
export const ToastHeaderIcon = styled.span`
  width: ${_toCSSUnit('24px')};
  height: ${_toCSSUnit('24px')};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  cursor: pointer;
  background: transparent no-repeat center center
    ${_toGetBackgroundSVG(
      DESIGNCONFIG_ICON_MAP['icon_error_line'],
      DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpred/50']]
    )};
`

export const ToastHeaderCloseButton = styled(ModalHeaderCloseButton)`
  &.${USE_TEXT_ACTION_BUTTON} {
    width: auto;
    height: auto;
    background: none;
    color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
    ${css`
      ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['T2/Medium']])}
    `}
  }
`
export const ToastContent = styled.div`
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Regular']])}
  `}
  margin-top: ${_toCSSUnit('10px')};
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/50']]};
  .${IS_HEADERICON} & {
    padding-left: ${_toCSSUnit('36px')};
  }
`
