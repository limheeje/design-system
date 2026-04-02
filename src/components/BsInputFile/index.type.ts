import {ACCEPT_CODE} from '@/constants/components/BsInputFile'
export interface Props {
  tag?: string
  theme?: string
  name?: string
  id?: string
  modelValue?: object
  multiple?: boolean
  disabled?: boolean
  placeholder?: string
  accept?: (typeof ACCEPT_CODE)[keyof typeof ACCEPT_CODE]
  isConfirm?: boolean
  isError?: boolean
  usePreview?: boolean
  errorMessage?: string
  confirmMessage?: string
}
