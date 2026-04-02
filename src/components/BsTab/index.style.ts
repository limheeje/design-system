import {css, styled} from '@vue-styled-components/core'
import {DesignConfigColor, _toCSSUnit} from '@/themes/DesignConfig'
import {THEME_KEYNAME, SIZE_KEYNAME, TYPE_KEYNAME} from '@/constants/components/BsTab/index'

export const IS_ACTIVE = 'is-active'
export const SIZE_DEFAULT = SIZE_KEYNAME['DEFAULT']
export const SIZE_SMALL = SIZE_KEYNAME['SMALL']
export const TYPE_LINE = TYPE_KEYNAME['LINE']
export const TYPE_FILL = TYPE_KEYNAME['FILL']
export const THEME_RECTANGLE = THEME_KEYNAME['RECTANGLE']
export const THEME_RADIUS = THEME_KEYNAME['RADIUS']
const defaultPadding = `${_toCSSUnit('16px')} ${_toCSSUnit('24px')}`
// const heightSizeLarge = 52
// const heightSizeMedium = 52

export const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
`
// 탭 컨테이너

// 탭버튼
export const TabItemCSS = css`
  background: none;
  flex: 1;
  appearance: none;
  border: none;
  margin: 0;
  cursor: pointer;
  position: relative;
  padding: ${defaultPadding};

  font-size: ${_toCSSUnit('18px')};
  font-weight: 600;
  line-height: 1.6;

  color: ${DesignConfigColor['kcpblue/50']};
  &.${IS_ACTIVE} {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: ${_toCSSUnit('-1px')};
      height: ${_toCSSUnit('2px')};
      background: ${DesignConfigColor['kcpblue/50']};
    }
  }
`
export const TabItem = styled.button`
  ${TabItemCSS}
`
export const TabItemSwiper = styled.span`
  display: block;
  text-align: center;
  ${TabItemCSS}
`
export const TabItemList = styled.div`
  display: flex;
  color: red;
  &[data-theme='${THEME_RECTANGLE}'] {
    border-bottom: ${_toCSSUnit('1px')} solid ${DesignConfigColor['kcpgray/93']};
  }
  &[data-theme='${THEME_RADIUS}'] {
    gap: 0 ${_toCSSUnit('10px')};
    ${TabItem}, ${TabItemSwiper} {
      min-width: ${_toCSSUnit('84px')};
      color: ${DesignConfigColor['kcpgray/50']};
      border: solid ${_toCSSUnit('1px')} ${DesignConfigColor['kcpgray/93']};
      border-radius: ${_toCSSUnit('40px')};
      flex: 0 0 auto;
      padding: ${_toCSSUnit('8px')} ${_toCSSUnit('32px')};
      font-weight: normal;
      &:hover {
        background: ${DesignConfigColor['kcpgray/50']}26;
        color: ${DesignConfigColor['kcpgray/50']};
      }
      &.${IS_ACTIVE} {
        background: ${DesignConfigColor['kcpblue/50']};
        color: #fff;
      }
      &:after {
        display: none;
      }
    }

    // 타입
    &[data-type='${TYPE_FILL}'] {
      ${TabItem}, ${TabItemSwiper} {
        &:hover {
          background: ${DesignConfigColor['kcpgray/50']}26;
          color: ${DesignConfigColor['kcpgray/50']};
        }
        &.${IS_ACTIVE} {
          background: ${DesignConfigColor['kcpblue/50']};
          color: #fff;
        }
        color: ${DesignConfigColor['kcpgray/50']};
        background: ${DesignConfigColor['kcpgray/97']};
      }
    }

    // 사이즈
    &[data-size='${SIZE_SMALL}'] {
      ${TabItem}, ${TabItemSwiper} {
        padding: ${_toCSSUnit('8px')} ${_toCSSUnit('30px')};
      }
    }
    &[data-size='${SIZE_DEFAULT}'] {
      ${TabItem}, ${TabItemSwiper} {
        padding: ${_toCSSUnit('10px')} ${_toCSSUnit('32px')};
      }
    }
  }

  // 사이즈
  &[data-size='${SIZE_SMALL}'] {
    display: flex;
    ${TabItem}, ${TabItemSwiper} {
      padding: ${_toCSSUnit('8px')} ${_toCSSUnit('30px')};
    }
  }
`

export const TabContentsBox = styled.div`
  // border: dashed ${_toCSSUnit('1px')} #b4b4b4;
  // padding: ${defaultPadding};
  // margin-top: 16px;
  // background-color: rgba(0, 0, 0, 0.03);
`
export const TabContentsItem = styled.div`
  // padding: ${defaultPadding};
`
