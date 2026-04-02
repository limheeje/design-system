import {THEME_KEYNAME} from '@/constants/components/BsAccordion/index'
export interface Props {
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  items?: Record<string, any>[]
  useLeftIcon?: boolean
  codeTitle?: string
  codeLabel?: string
  codeContent?: string
  codeSelected?: string
}
