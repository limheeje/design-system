import {
  DesignConfigTypography,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_TYPO,
  DESIGNCONFIG_KEYNAME_COLOR,
  DESIGNCONFIG_ICON_MAP,
  _toGetBackgroundSVG,
  _toCSSParse,
  _toCSSUnit
} from '../src/themes/DesignConfig'

export default {
  install: (app: any, settings?: any) => {
    const externalSettings = settings || {}
    app.provide('externalSettings', externalSettings)

    const htmlElement = document.documentElement
    htmlElement.style.setProperty('--ui-basic-component-fontsize', '16px')
    // const divElement = document.createElement('div') // div 태그 생성
    // divElement.setAttribute('id', 'ui-toast-teleport-div')
    // app.config.globalProperties.$testleem = (s:any)=>{
    //     console.log(s);
    //     console.log(123);
    //     return `hello plugins params : ${s}`
    // }
    // app.component('BsInputField', BsInputField)
    // app.component('BsIcon', BsIcon)
    // app.component('BsCheckbox', BsIcon)
    // app.component('BsCheckboxGroup', BsIcon)
  }
}

export {
  DesignConfigTypography,
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_TYPO,
  DESIGNCONFIG_KEYNAME_COLOR,
  DESIGNCONFIG_ICON_MAP,
  _toGetBackgroundSVG,
  _toCSSParse,
  _toCSSUnit
}
