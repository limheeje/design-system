import {THEME_KEYNAME} from '@/constants/components/BsInputField'
export interface Props {
  tag?: string
  name?: string
  id?: string
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  disabled?: boolean
  useSelectedTheme2?: boolean
  isError?: boolean
  isConfirm?: boolean
  items?: Record<string, any>[]
  errorMessage?: string
  confirmMessage?: string
  codeId?: string
  codeName?: string
  returnObject?: boolean
  customStyle?: any
  modelValue?: string | number
}
