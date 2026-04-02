import {THEME_KEYNAME} from '@/constants/components/BsTooltip/index'
import {ALIGN_KEYNAME} from '@/constants/components/BsModal/index'
export interface Props {
  modelValue?: boolean
  useCloseButton?: boolean
  timer?: number
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  align?: (typeof ALIGN_KEYNAME)[keyof typeof ALIGN_KEYNAME]
}
