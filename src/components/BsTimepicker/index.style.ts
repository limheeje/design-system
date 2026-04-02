import {styled, css} from '@vue-styled-components/core'
import {
  Wrapper as WrapperInput,
  InputInnerSectionArea,
  InputField,
  IS_FOCUS,
  InputSectionRightArea
} from '@/components/BsInputField/index.style'
import {
  _toCSSParse,
  DesignConfigTypography,
  DESIGNCONFIG_KEYNAME_TYPO,
  _toCSSUnit,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_COLOR
} from '@/themes/DesignConfig'

const Wrapper = styled.div`
  ${WrapperInput};
  position: relative;
`
const LayerWrapper = styled.div`
  position: absolute;
  min-width: ${_toCSSUnit('216px')};
  right: 0;
  z-index: 10;
  transform: translateY(${_toCSSUnit('16px')});
  * {
    box-sizing: border-box;
  }
`
const LayerInner = styled.div`
  width: 100%;
  padding: ${_toCSSUnit('16px')};
  background: #fff;
  box-shadow: 0px ${_toCSSUnit('2px')} ${_toCSSUnit('4px')} 0px #00000005;
  box-shadow: 0px ${_toCSSUnit('6px')} ${_toCSSUnit('12px')} 0px #0000000a;
  box-shadow: 0px ${_toCSSUnit('12px')} ${_toCSSUnit('38px')} 0px #0000000f;
  border-radius: ${_toCSSUnit('8px')};
`

const LayerContentsShadow = styled.div`
  &:after,
  &:before {
    content: '';
    width: 100%;
    height: ${_toCSSUnit('95px')};
    position: absolute;
    left: 0;
    z-index: 2;
    pointer-events: none;
  }
  &:after {
    background: linear-gradient(180deg, transparent 0%, #fff 100%);
    bottom: 0;
  }
  &:before {
    background: linear-gradient(180deg, #fff 0%, transparent 100%);
    top: 0;
    z-index: 3;
  }
`
const LayerContents = styled('div', {
  type: String
})<{
  type?: 'time' | 'date'
}>`
  display: flex;
  width: 100%;
  position: relative;
  ${(props) =>
    props.type === 'time'
      ? `
    &:before {
    content: '';
    width: 100%;
    height: ${_toCSSUnit('48px')};
    position: absolute;
    left: 0;
    border-radius: ${_toCSSUnit('4px')};
    background: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/93']]};
    top: 50%;
    transform: translateY(-50%);
  }
  &:after {
    content: ':';
    position: absolute;
    left: 33.3333%;
    margin-top: ${_toCSSUnit('-3px')};
    color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
    top: 50%;
    transform: translateY(-50%);
  }
    `
      : ``}
`

const SlidItemInner = styled.span`
  height: ${_toCSSUnit('48px')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/10']]};
  ${css`
    ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Medium']])}
  `};
  &.is-active {
    color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
    ${css`
      ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['Body1/Bold']])}
    `};
  }
`

const LayerInnerButton = styled.div`
  display: block;
  min-width: 100%;
`

export {
  Wrapper,
  InputInnerSectionArea,
  InputField,
  IS_FOCUS,
  InputSectionRightArea,
  LayerInnerButton,
  SlidItemInner,
  LayerContentsShadow,
  LayerInner,
  LayerContents,
  LayerWrapper
}
