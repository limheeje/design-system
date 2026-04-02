import {THEME_KEYNAME, COLOR_KEYNAME, SIZE_KEYNAME} from '@/constants/components/BsButton/index'
export interface Props {
  type?: string
  name?: string
  value?: string
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  color?: (typeof COLOR_KEYNAME)[keyof typeof COLOR_KEYNAME] | ''
  size?: (typeof SIZE_KEYNAME)[keyof typeof SIZE_KEYNAME]
  to?: string
  disabled?: boolean
  isBlock?: boolean
}
