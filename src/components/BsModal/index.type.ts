import {ALIGN_KEYNAME} from '@/constants/components/BsModal/index'
export interface Props {
  modelValue: boolean
  teleportTo?: string
  useDimm?: boolean
  useCloseButton?: boolean
  headerText?: string
  headerTextCenter?: boolean
  headerCloseButtonValign?: boolean
  buttonLayout?: string
  buttons?: Record<string, any>[]
  align?: keyof typeof ALIGN_KEYNAME
}
