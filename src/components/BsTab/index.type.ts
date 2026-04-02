import {THEME_KEYNAME, SIZE_KEYNAME, TYPE_KEYNAME} from '@/constants/components/BsTab/index'

export interface Props {
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  color?: string
  size?: (typeof SIZE_KEYNAME)[keyof typeof SIZE_KEYNAME]
  type?: (typeof TYPE_KEYNAME)[keyof typeof TYPE_KEYNAME]
  items?: (Record<string, any> | string)[]
  modelValue?: string | Record<string, any>
  codeItem?: string
  useSwiper?: boolean
  swiperObject?: Record<string, any>
  returnObject?: boolean
  teleportTo?: string
}
