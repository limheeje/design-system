import {THEME_KEYNAME} from '@/constants/components/BsInputField'
export interface Props {
  tag?: string
  name?: string
  id?: string
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  inputFilter?: string
  readonly?: boolean
  disabled?: boolean
  isError?: boolean
  isConfirm?: boolean
  placeholder?: string
  errorMessage?: string
  confirmMessage?: string
  customStyle?: any
  timeRange?: string
  useLengthCheck?: boolean
  useOuterButton?: boolean
  useResponseHeight?: boolean
  maxHeight?: string
  maxlength?: string | number
  modelValue?: string
}
