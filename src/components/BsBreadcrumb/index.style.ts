import {styled, css} from '@vue-styled-components/core'
import {DesignConfigColor, DESIGNCONFIG_KEYNAME_COLOR, _toCSSUnit} from '@/themes/DesignConfig'

const IS_ACTIVE = 'is-active'

export const Wrapper = styled.div``
export const Ol = styled.ol`
  display: flex;
`
export const Li = css``
export const LiHome = styled.li``
export const LiItem = styled.li`
  display: flex;
  gap: ${_toCSSUnit('2px')};
  margin-left: ${_toCSSUnit('2px')};
  &:before {
    content: '>';
  }
`
export const Button = styled.button`
  border: none;
  background: none;
  font-size: ${_toCSSUnit('13px')};
  &.${IS_ACTIVE} {
    color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]};
    text-decoration: underline;
  }
`
