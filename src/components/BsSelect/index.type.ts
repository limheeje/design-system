import {THEME_KEYNAME} from '@/constants/components/BsInputField'
export interface Props {
  tag?: string
  name?: string
  id?: string
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  disabled?: boolean
  isError?: boolean
  items?: Record<string, any>[]
  isConfirm?: boolean
  errorMessage?: string
  confirmMessage?: string
  codeId?: string
  codeName?: string
  customStyle?: any
  modelValue?: string | number
}
