const DESIGNCONFIG_KEYNAME_TYPO = Object.freeze({
  'H1/Bold': 'H1/Bold',
  'T1/Bold': 'T1/Bold',
  'T1/Medium': 'T1/Medium',
  'T2/Semibold': 'T2/Semibold',
  'T2/Medium': 'T2/Medium',
  'Body1/Bold': 'Body1/Bold',
  'Body1/Semibold': 'Body1/Semibold',
  'Body1/Medium': 'Body1/Medium',
  'Body1/Regular': 'Body1/Regular',
  'Body2/Bold': 'Body2/Bold',
  'Body2/Semibold': 'Body2/Semibold',
  'Body2/Medium': 'Body2/Medium',
  'Body2/Regular': 'Body2/Regular',
  'Body3/Medium': 'Body3/Medium',
  'Caption1/Medium': 'Caption1/Medium'
})

const DESIGNCONFIG_KEYNAME_COLOR = Object.freeze({
  'common-0': 'common-0',
  'common-100': 'common-100',
  'kcpgray/10': 'kcpgray/10',
  'kcpgray/20': 'kcpgray/20',
  'kcpgray/30': 'kcpgray/30',
  'kcpgray/40': 'kcpgray/40',
  'kcpgray/50': 'kcpgray/50',
  'kcpgray/60': 'kcpgray/60',
  'kcpgray/80': 'kcpgray/80',
  'kcpgray/90': 'kcpgray/90',
  'kcpgray/93': 'kcpgray/93',
  'kcpgray/95': 'kcpgray/95',
  'kcpgray/97': 'kcpgray/97',
  'kcpblue/50': 'kcpblue/50',
  'kcpblue/60': 'kcpblue/60',
  'kcpblue/90': 'kcpblue/90',
  'kcpblue/92': 'kcpblue/92',
  'kcpblue/93': 'kcpblue/93',
  'kcpred/50': 'kcpred/50'
})
const DESIGNCONFIG_KEYNAME_CHART_COLOR = Object.freeze({
  //chart전용 색상
  'blue/600': 'blue/600',
  'mint/600': 'mint/600',
  'yellow/600': 'yellow/600',
  'orange/600': 'orange/600',
  'lime/600': 'lime/600',
  'cyan/600': 'cyan/600',
  'indigo/600': 'indigo/600',
  'pink/600': 'pink/600',
  'green/600': 'green/600',
  'purple/600': 'purple/600',
  'red/600': 'red/600',
  'teal/600': 'teal/600'
})
const DESIGNCONFIG_KEYNAME_ROOT_COLOR = Object.freeze({
  [DESIGNCONFIG_KEYNAME_COLOR['common-0']]: {property: '--color-common-0', value: '#FFFFFF'},
  [DESIGNCONFIG_KEYNAME_COLOR['common-100']]: {property: '--color-common-100', value: '#000000'},
  [DESIGNCONFIG_KEYNAME_COLOR['kcpgray/10']]: {property: '--color-kcpgray-10', value: '#191919'},
  [DESIGNCONFIG_KEYNAME_COLOR['kcpgray/20']]: {property: '--color-kcpgray-20', value: '#2E2E2E'},
  [DESIGNCONFIG_KEYNAME_COLOR['kcpgray/30']]: {property: '--color-kcpgray-30', value: '#464646'},
  [DESIGNCONFIG_KEYNAME_COLOR['kcpgray/40']]: {property: '--color-kcpgray-40', value: '#5C5C5C'},
  [DESIGNCONFIG_KEYNAME_COLOR['kcpgray/50']]: {property: '--color-kcpgray-50', value: '#727272'},
  [DESIGNCONFIG_KEYNAME_COLOR['kcpgray/60']]: {property: '--color-kcpgray-60', value: '#999999'},
  [DESIGNCONFIG_KEYNAME_COLOR['kcpgray/80']]: {property: '--color-kcpgray-80', value: '#B4B4B4'},
  [DESIGNCONFIG_KEYNAME_COLOR['kcpgray/90']]: {property: '--color-kcpgray-90', value: '#CACACA'},
  [DESIGNCONFIG_KEYNAME_COLOR['kcpgray/93']]: {property: '--color-kcpgray-93', value: '#E0E0E0'},
  [DESIGNCONFIG_KEYNAME_COLOR['kcpgray/95']]: {property: '--color-kcpgray-95', value: '#EDEDED'},
  [DESIGNCONFIG_KEYNAME_COLOR['kcpgray/97']]: {property: '--color-kcpgray-97', value: '#F6F6F6'},
  [DESIGNCONFIG_KEYNAME_COLOR['kcpblue/50']]: {
    property: '--color-kcpblue-50',
    value: '#2196F3'
  },
  [DESIGNCONFIG_KEYNAME_COLOR['kcpblue/60']]: {
    property: '--color-kcpblue-60',
    value: '#49A9F5'
  },
  [DESIGNCONFIG_KEYNAME_COLOR['kcpblue/90']]: {
    property: '--color-kcpblue-90',
    value: '#AEDCFF'
  },
  [DESIGNCONFIG_KEYNAME_COLOR['kcpblue/92']]: {
    property: '--color-kcpblue-92',
    value: '#D0EBFF'
  },
  [DESIGNCONFIG_KEYNAME_COLOR['kcpblue/93']]: {
    property: '--color-kcpblue-93',
    value: '#E5F4FF'
  },
  [DESIGNCONFIG_KEYNAME_COLOR['kcpred/50']]: {property: '--color-kcpred-50', value: '#FA2828'}
})
const DESIGNCONFIG_KEYNAME_ROOT_CHART_COLOR = Object.freeze({
  [DESIGNCONFIG_KEYNAME_CHART_COLOR['blue/600']]: {
    useChart: true,
    property: '--color-semantic-chart-main-blue',
    value: '#5BB0FF'
  },
  [DESIGNCONFIG_KEYNAME_CHART_COLOR['mint/600']]: {
    useChart: true,
    property: '--color-semantic-chart-main-mint',
    value: '#63E385'
  },
  [DESIGNCONFIG_KEYNAME_CHART_COLOR['yellow/600']]: {
    useChart: true,
    property: '--color-semantic-chart-main-yellow',
    value: '#FBC74F'
  },
  [DESIGNCONFIG_KEYNAME_CHART_COLOR['orange/600']]: {
    useChart: true,
    property: '--color-semantic-chart-main-orange',
    value: '#FF9D40'
  },
  [DESIGNCONFIG_KEYNAME_CHART_COLOR['lime/600']]: {
    useChart: true,
    property: '--color-semantic-chart-main-lime',
    value: '#B3E750'
  },
  [DESIGNCONFIG_KEYNAME_CHART_COLOR['cyan/600']]: {
    useChart: true,
    property: '--color-semantic-chart-main-cyan',
    value: '#70E1E8'
  },
  [DESIGNCONFIG_KEYNAME_CHART_COLOR['indigo/600']]: {
    useChart: true,
    property: '--color-semantic-chart-main-indigo',
    value: '#6688FF'
  },
  [DESIGNCONFIG_KEYNAME_CHART_COLOR['pink/600']]: {
    useChart: true,
    property: '--color-semantic-chart-main-pink',
    value: '#FF91B0'
  },
  [DESIGNCONFIG_KEYNAME_CHART_COLOR['green/600']]: {
    useChart: true,
    property: '--color-semantic-chart-main-green',
    value: '#4DCFA2'
  },
  [DESIGNCONFIG_KEYNAME_CHART_COLOR['purple/600']]: {
    useChart: true,
    property: '--color-semantic-chart-main-purple',
    value: '#A382FF'
  },
  [DESIGNCONFIG_KEYNAME_CHART_COLOR['red/600']]: {
    useChart: true,
    property: '--color-semantic-chart-main-red',
    value: '#FD6B6B'
  },
  [DESIGNCONFIG_KEYNAME_CHART_COLOR['teal/600']]: {
    useChart: true,
    property: '--color-semantic-chart-main-teal',
    value: '#3BBBBC'
  }
})

export {
  DESIGNCONFIG_KEYNAME_TYPO,
  DESIGNCONFIG_KEYNAME_COLOR,
  DESIGNCONFIG_KEYNAME_CHART_COLOR,
  DESIGNCONFIG_KEYNAME_ROOT_COLOR,
  DESIGNCONFIG_KEYNAME_ROOT_CHART_COLOR
}
