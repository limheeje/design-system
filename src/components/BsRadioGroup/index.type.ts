import {THEME_KEYNAME} from '@/constants/components/BsCheckboxGroup/index'
export interface Props {
  id?: string
  name?: string
  items: (Record<string, any> | string)[]
  modelValue: Record<string, any> | string
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME] | 'default'
  useTheme6CheckIcon?: boolean
  disabled?: boolean
}
