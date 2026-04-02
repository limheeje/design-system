export const HOURS_ITEMS = Object.freeze(
  [...new Array(12)].map((__, i: number) => {
    const count = ++i
    if (count < 10) {
      return `0${count}`
    } else {
      return count.toFixed()
    }
  })
)
export const MINUTES_ITEMS = Object.freeze([...new Array(60)].map((__, i: number) => (i < 10 ? `0${i}` : i.toFixed())))
export const PERIOD_ITEMS = Object.freeze(['AM', 'PM']) // [0] : 오전 [1] : 오후 명칭은 변경가능 / index변경 금지

export const ITEMS_KEYNAME = Object.freeze({
  HOURS: 'hours',
  MINUTES: 'minutes',
  PERIOD: 'period'
})
export const ITEMS_GROUP = Object.freeze([
  {
    codeName: ITEMS_KEYNAME['HOURS'],
    codeItems: HOURS_ITEMS
  },
  {
    codeName: ITEMS_KEYNAME['MINUTES'],
    codeItems: MINUTES_ITEMS
  },
  {
    codeName: ITEMS_KEYNAME['PERIOD'],
    codeItems: PERIOD_ITEMS
  }
])
