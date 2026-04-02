import {THEME_KEYNAME} from '@/constants/components/BsInputField'
export interface Props {
  tag?: string
  name?: string
  id?: string
  type?: string
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  inputFilter?: string
  readonly?: boolean
  disabled?: boolean
  isError?: boolean
  isConfirm?: boolean
  useResetButton?: boolean
  placeholder?: string
  errorMessage?: string
  confirmMessage?: string
  customStyle?: any
  timeRange?: string | boolean
  modelValue?: string
}
