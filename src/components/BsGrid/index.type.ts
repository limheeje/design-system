import {PREFIX_, PREFIX_AUTO, PREFIX_SMALL} from '@/components/BsGrid/index.style'
import {ALIGN_KEYNAME} from '@/constants/components/BsGrid/index'
export interface Props {
  alignSelf?: (typeof ALIGN_KEYNAME)[keyof typeof ALIGN_KEYNAME]
  align?: (typeof ALIGN_KEYNAME)[keyof typeof ALIGN_KEYNAME]
  cols?: typeof PREFIX_AUTO | (typeof PREFIX_)[number] | (typeof PREFIX_SMALL)[number]
}
