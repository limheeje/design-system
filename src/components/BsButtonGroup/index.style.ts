import {styled} from '@vue-styled-components/core'
import {_toCSSUnit} from '@/themes/DesignConfig'
import {JUSTIFY_START, JUSTIFY_CENTER, JUSTIFY_END} from '@/components/BsGrid/index.style'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${_toCSSUnit('10px')};
  &.${JUSTIFY_START} {
    justify-content: flex-start;
  }
  &.${JUSTIFY_CENTER} {
    justify-content: center;
  }
  &.${JUSTIFY_END} {
    justify-content: flex-end;
  }
  & > * {
    align-self: flex-end;
    flex: 0 0 1;
  }
`
