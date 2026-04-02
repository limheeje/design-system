import {THEME_KEYNAME} from '@/constants/components/BsTable'

export interface Types {
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  useLeft?: boolean
  useXscroll?: boolean
  useHover?: boolean
}
