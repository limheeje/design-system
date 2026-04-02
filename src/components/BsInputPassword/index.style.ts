import {styled} from '@vue-styled-components/core'
import {
  DESIGNCONFIG_ICON_MAP,
  DESIGNCONFIG_KEYNAME_COLOR,
  DesignConfigColor,
  _toGetBackgroundSVG,
  _toCSSUnit
} from '@/themes/DesignConfig'
export const InputValueVisbileButton = styled.button`
  width: ${_toCSSUnit('20px')};
  height: ${_toCSSUnit('20px')};
  border: none;
  background: transparent center center no-repeat
    ${_toGetBackgroundSVG(
      DESIGNCONFIG_ICON_MAP['icon_eye_off_fill'],
      DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/60']]
    )};
  background-size: 100%;
  &.is-active {
    background-image: ${_toGetBackgroundSVG(
      DESIGNCONFIG_ICON_MAP['icon_eye_fill'],
      DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/60']]
    )};
  }
`
