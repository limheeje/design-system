export const ALIGN_KEYNAME = Object.freeze({
  LEFT_TOP: 'LEFT_TOP',
  LEFT_CENTER: 'LEFT_CENTER',
  LEFT_BOTTOM: 'LEFT_BOTTOM',
  CENTER_TOP: 'CENTER_TOP',
  CENTER_CENTER: 'CENTER_CENTER',
  CENTER_BOTTOM: 'CENTER_BOTTOM',
  RIGHT_TOP: 'RIGHT_TOP',
  RIGHT_CENTER: 'RIGHT_CENTER',
  RIGHT_BOTTOM: 'RIGHT_BOTTOM'
})
export const ALIGN_GUBUN = Object.freeze({
  [ALIGN_KEYNAME.LEFT_TOP]: ['flex-start', 'flex-start'],
  [ALIGN_KEYNAME.LEFT_CENTER]: ['flex-start', 'center'],
  [ALIGN_KEYNAME.LEFT_BOTTOM]: ['flex-start', 'flex-end'],
  [ALIGN_KEYNAME.CENTER_TOP]: ['center', 'flex-start'],
  [ALIGN_KEYNAME.CENTER_CENTER]: ['center', 'center'],
  [ALIGN_KEYNAME.CENTER_BOTTOM]: ['center', 'flex-end'],
  [ALIGN_KEYNAME.RIGHT_TOP]: ['flex-end', 'flex-start'],
  [ALIGN_KEYNAME.RIGHT_CENTER]: ['flex-end', 'center'],
  [ALIGN_KEYNAME.RIGHT_BOTTOM]: ['flex-end', 'flex-end']
})
export const BUTTON_LAYOUT = Object.freeze({
  LAYOUT_AUTO: 'layout-auto',
  LAYOUT_RIGHT: 'layout-right',
  LAYOUT_CENTER: 'layout-center'
})
export const BUTTON_KEYNAME = Object.freeze({
  CANCEL: 'cancel',
  CONFIRM: 'confirm'
})
export const MODAL_TYPE = Object.freeze({
  ALERT: 'alert',
  CONFIRM: 'confirm'
})
