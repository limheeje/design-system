import {ALIGN_KEYNAME} from '@/constants/components/BsModal/index'
export interface Props {
  modelValue: boolean
  timer?: number
  teleportTo?: string
  headerText?: string
  useShadowCSS?: boolean
  useCloseButton?: boolean
  useHeaderIcon?: boolean
  align?: keyof typeof ALIGN_KEYNAME
}
