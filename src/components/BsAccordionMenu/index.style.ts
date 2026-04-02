import {styled} from '@vue-styled-components/core'
import {DesignConfigColor, _toCSSUnit} from '@/themes/DesignConfig'
import {THEME_1, THEME_2, AccordionWrapper} from '@/components/BsAccordion/index.style'

export const AccordionBodyMenu = styled.div`
  background-color: ${DesignConfigColor['common-0']};
  ${AccordionWrapper}.${THEME_1} & {
    padding: ${_toCSSUnit('8px')} 0;
    border-radius: 0;
  }
  ${AccordionWrapper}.${THEME_2} & {
    padding: ${_toCSSUnit('8px')};
    border-radius: ${_toCSSUnit('8px')};
  }
`
