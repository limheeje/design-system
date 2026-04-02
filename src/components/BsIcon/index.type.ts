import iconMapGroup from '@/themes/common/iconMapGroup'
export interface Props {
  type: keyof typeof iconMapGroup
  color?: string
  width?: string //number도 해야하나??
  height?: string //number도 해야하나??
}
