import {css, styled} from '@vue-styled-components/core'
import {
  _toCSSUnit,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_COLOR,
  _toGetBackgroundSVG,
  DESIGNCONFIG_ICON_MAP,
  _innerScrollCSS
} from '@/themes/DesignConfig'
import {ALIGN_GUBUN, ALIGN_KEYNAME, BUTTON_LAYOUT} from '@/constants/components/BsModal/index'
import {WrapperButton} from '@/components/BsButton/index.style'
const LAYOUT_AUTO = BUTTON_LAYOUT['LAYOUT_AUTO']
const LAYOUT_RIGHT = BUTTON_LAYOUT['LAYOUT_RIGHT']
const LAYOUT_CENTER = BUTTON_LAYOUT['LAYOUT_CENTER']
const IS_HEADER_TEXT_CENTER = 'is-header-text-center'
const IS_HEADER_CLOSE_BUTTON_VALIGN = 'is-header-close-button-valign'

export const AlignCSS = css`
  display: flex;
  ${Object.keys(ALIGN_KEYNAME).map((k: string) => {
    const _ALIGN_GUBUN: Record<string, any> = ALIGN_GUBUN
    return `
    &[data-align='${k}'] {
        align-items: ${_ALIGN_GUBUN[k][1]};
        justify-content: ${_ALIGN_GUBUN[k][0]};
    }
    `
  })}
`

export const Dimm = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5000;
`

export const Wrapper = styled.div`
  position: fixed;
  z-index: 5500;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  padding: ${_toCSSUnit('20px')};
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  ${AlignCSS}
`
export const ModalInnerSection = styled.div`
  min-width: ${_toCSSUnit('350px')};
  border-radius: ${_toCSSUnit('8px')};
  background-color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['common-0']]};
`
export const ModalHeaderText = styled.div`
  font-family: Pretendard;
  font-size: ${_toCSSUnit('18px')};
  font-weight: 700;
  line-height: ${_toCSSUnit('28.8px')};
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  ${Wrapper}.${IS_HEADER_TEXT_CENTER} & {
    margin-left: auto;
    margin-right: auto;
  }
`
export const ModalHeaderCloseButton = styled.button`
  width: ${_toCSSUnit('24px')};
  height: ${_toCSSUnit('24px')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: transparent no-repeat center center
    ${_toGetBackgroundSVG(
      DESIGNCONFIG_ICON_MAP['icon_close'],
      DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['common-100']]
    )};
  background-size: 100%;
`
export const ModalHeader = styled.div`
  padding: ${_toCSSUnit('24px')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Wrapper}.${IS_HEADER_CLOSE_BUTTON_VALIGN} & {
    flex-direction: column-reverse;
    gap: ${_toCSSUnit('10px')};
    ${ModalHeaderText} {
      margin-left: 0;
      margin-right: auto;
    }
    ${ModalHeaderCloseButton} {
      margin-left: auto;
      margin-right: 0;
    }
  }
`

export const ModalContent = styled.div`
  padding: ${_toCSSUnit('16px')} ${_toCSSUnit('24px')};
  max-height: calc(100vh - 240px);
  overflow: auto;
  ${_innerScrollCSS}
  @media only screen and (min-width: 1200px) {
    max-width: 1000px;
  }
`
export const ModalFooter = styled.div`
  padding: ${_toCSSUnit('24px')};
`
export const ModalButtonGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${_toCSSUnit('8px')};
  &[data-button-layout='${LAYOUT_AUTO}'] {
    width: 100%;
    ${WrapperButton} {
      flex: 1;
    }
  }
  &[data-button-layout='${LAYOUT_RIGHT}'] {
    justify-content: flex-end;
  }
  &[data-button-layout='${LAYOUT_CENTER}'] {
    justify-content: center;
  }
`
