import {THEME_KEYNAME} from '@/constants/components/BsPagination/index'

export interface Props {
  theme?: (typeof THEME_KEYNAME)[keyof typeof THEME_KEYNAME]
  totalRow: number
  perViewCount?: number
  useMoreUiPerViewCount?: number
  useMoreUi?: boolean
  modelValue: number
}
