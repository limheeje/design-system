import {styled, css} from '@vue-styled-components/core'
import {
  DesignConfigTypography,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_TYPO,
  _toCSSParse,
  _toCSSUnit
} from '@/themes/DesignConfig'
import {Wrapper as BsIconWrapper} from '@/components/BsIcon/index.style'
import {THEME_KEYNAME} from '@/constants/components/BsAccordion/index'

export const THEME_1 = THEME_KEYNAME['THEME_1']
export const THEME_2 = THEME_KEYNAME['THEME_2']
export const IS_SELECTED = 'is-selected'
export const IS_HOVERABLE = 'is-hoverable'
export const USE_LEFTICON = 'use-lefticon'
export const IS_OPEN = 'is-open'

export const AccordionWrapper = styled.div`
  border-radius: ${_toCSSUnit('4px')};
  overflow: hidden;
`

export const AccordionHeader = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  background-color: ${DesignConfigColor['common-0']};
  cursor: pointer;
  ${AccordionWrapper}.${THEME_1} & {
    border-radius: 0;
  }
  ${AccordionWrapper}.${THEME_2} & {
    border-radius: ${_toCSSUnit('4px')};
  }
`
export const HeaderLeftArea = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: ${_toCSSUnit('8px')};
  padding: ${_toCSSUnit('16px')};
`

export const HeaderLeftIcon = styled.div`
  display: flex;
  ${BsIconWrapper} {
    display: inline-block;
    margin-top: ${_toCSSUnit('3px')};
    vertical-align: top;
  }
`
export const HeaderLeftTitle = styled.div`
  padding-right: ${_toCSSUnit('30px')};
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Semibold']])}
  `}
  color: ${DesignConfigColor['kcpgray/10']};
  word-break: break-word;
`

export const HeaderRightArea = styled.div`
  margin-left: auto;
  min-width: ${_toCSSUnit('52px')};
  margin-right: 0;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${_toCSSUnit('54px')};
  transition: transform 0.3s ease;
  &.${IS_OPEN} {
    transform: rotate(180deg);
  }
  ${AccordionWrapper}.${THEME_1} & {
    padding: ${_toCSSUnit('13px')};
  }
  ${AccordionWrapper}.${THEME_2} & {
    padding: ${_toCSSUnit('16px')};
  }
`
export const RightBasicButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${_toCSSUnit('52px')};
`
export const AccordionBody = styled.div`
  ${AccordionWrapper}.${THEME_1} & {
    padding: 0;
    margin-top: 0;
    border-radius: 0;
  }
  ${AccordionWrapper}.${THEME_2} & {
    margin-top: ${_toCSSUnit('8px')};
  }
`
export const AccordionBodyItem = styled.div`
  background-color: ${DesignConfigColor['common-0']};
  margin: 0;
  ${AccordionWrapper}.${THEME_2} & {
    margin-top: ${_toCSSUnit('8px')};
    padding: ${_toCSSUnit('8px')};
    border-radius: ${_toCSSUnit('4px')};
  }
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Regular']])}
  `}
  color: ${DesignConfigColor['kcpgray/50']};
  word-break: keep-all;
  transition: all 0.3s;
  ${AccordionWrapper}.${THEME_1} & {
    padding: ${_toCSSUnit('16px')} ${_toCSSUnit('62px')} ${_toCSSUnit('16px')} ${_toCSSUnit('16px')};
    &.${IS_HOVERABLE}:hover {
      color: ${DesignConfigColor['kcpblue/50']};
    }
  }
  ${AccordionWrapper}.${THEME_2} & {
    padding: ${_toCSSUnit('13px')} ${_toCSSUnit('62px')} ${_toCSSUnit('13px')} ${_toCSSUnit('16px')};
    &.${IS_HOVERABLE}:hover {
      //color: ${DesignConfigColor['kcpblue/50']};
      background: ${DesignConfigColor['kcpgray/97']};
    }
  }
  ${AccordionWrapper}.${USE_LEFTICON} & {
    padding-left: ${_toCSSUnit('40px')};
  }
  &.${IS_SELECTED} {
    color: ${DesignConfigColor['kcpblue/50']};
  }
`
export const AccordionItem = styled.div`
  ${AccordionWrapper}.${THEME_2} & ~ div {
    margin-top: ${_toCSSUnit('8px')};
  }
`
