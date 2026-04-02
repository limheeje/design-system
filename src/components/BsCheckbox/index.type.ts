import {THEME_KEYNAME} from '@/constants/components/BsCheckbox/index'
export interface Props {
  id?: string
  name?: string
  modelValue?: boolean
  checked?: boolean
  disabled?: boolean
  useTheme6CheckIcon?: boolean
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
}
