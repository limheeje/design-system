import {THEME_KEYNAME} from '@/constants/components/BsCheckboxGroup/index'
export interface Props {
  items: Record<string, any>[]
  modelValue: Record<string, any>[]
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME] | 'default'
  useTheme6CheckIcon?: boolean
  disabled?: boolean
}
