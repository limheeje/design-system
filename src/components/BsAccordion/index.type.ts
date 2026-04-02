import {THEME_KEYNAME} from '@/constants/components/BsAccordion/index'

export interface Props {
  items?: Record<string, any>[]
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  useLeftIcon?: boolean
  useRightIcon?: boolean
  codeTitle?: string
  codeContent?: string
  codeSelected?: string
  totalContentOpen?: boolean
}
