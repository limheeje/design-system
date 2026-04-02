import {styled, css} from '@vue-styled-components/core'
import {
  DesignConfigColor,
  DESIGNCONFIG_KEYNAME_COLOR,
  DesignConfigTypography,
  _toCSSParse,
  DESIGNCONFIG_KEYNAME_TYPO,
  _toGetBackgroundSVG,
  DESIGNCONFIG_ICON_MAP,
  _toCSSUnit
} from '@/themes/DesignConfig'
import {InputField, InputInnerSectionArea, InputSectionRightArea, IS_FOCUS} from '@/components/BsInputField/index.style'

const hexToRgba = (hex: string, alpha = 1) => {
  // HEX 코드에서 '#'을 제거하고, 길이가 4인 경우 7자리로 변환
  if (hex.length === 4) {
    hex = '#' + [...hex.slice(1)].map((c) => c + c).join('')
  }
  // HEX 값을 RGB로 변환
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  // RGBA 형식으로 반환
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const primaryColor = '#990099'

const colorCSS = css`
  /* --primary: ${() => hexToRgba(primaryColor, 1)};
  --primary5p: ${() => hexToRgba(primaryColor, 0.05)};
  --primary10p: ${() => hexToRgba(primaryColor, 0.1)};
  --primary20p: ${() => hexToRgba(primaryColor, 0.2)};
  --primary30p: ${() => hexToRgba(primaryColor, 0.3)};
  --primary40p: ${() => hexToRgba(primaryColor, 0.4)};
  --primary50p: ${() => hexToRgba(primaryColor, 0.5)};
  --primary60p: ${() => hexToRgba(primaryColor, 0.6)};
  --primary70p: ${() => hexToRgba(primaryColor, 0.7)};
  --primary80p: ${() => hexToRgba(primaryColor, 0.8)};
  --primary90p: ${() => hexToRgba(primaryColor, 0.9)};

  .vc-light {
    --vc-hover-bg: var(--primary5p);
    --vc-focus-ring: 0 0 0 2px var(--primary10p);
  } */

  ${Object.keys(DESIGNCONFIG_KEYNAME_COLOR).map((k: string) => {
    const baseColor = DesignConfigColor[k]
    return `
        &[data-color='${k}'] {
          --primary: ${baseColor};
          --primary5p: ${baseColor}0D;
          --primary10p: ${baseColor}1A;
          --primary20p: ${baseColor}33;
          --primary30p: ${baseColor}4D;
          --primary40p: ${baseColor}66;
          --primary50p: ${baseColor}80;
          --primary60p: ${baseColor}99;
          --primary70p: ${baseColor}B3;
          --primary80p: ${baseColor}CC;
          --primary90p: ${baseColor}E6;
          .vc-light {
            --vc-hover-bg: ${baseColor}0D;
            --vc-focus-ring: 0 0 0 2px ${baseColor}1A;
          }
        }
      `
  })}
`

const Wrapper = styled('div', {})`
  /* theme color */
  position: relative;
  ${colorCSS}

  /* default var */
  --vc-shadow-lg: 0px 2px 4px 0px #00000005, 0px 6px 12px 0px #0000000a, 0px 12px 38px 0px #0000000f;

  .vc-popover-content-wrapper {
    --popover-horizontal-content-offset: 16px;
    --popover-vertical-content-offset: 16px;
    --popover-caret-horizontal-offset: 18px;
    --popover-caret-vertical-offset: 8px;
  }

  .vc-popover-content {
    border: 0;
  }

  .vc-popover-caret {
    display: none;
  }

  /* color custom */
  .vc-custom {
    --vc-accent-50: var(--primary5p);
    --vc-accent-100: var(--color-kcpblue-93);
    --vc-accent-200: var(--primary30p);
    --vc-accent-300: var(--primary50p);
    --vc-accent-400: var(--primary70p);
    --vc-accent-500: var(--primary);
    --vc-accent-600: var(--primary);
    --vc-accent-700: var(--primary);
    --vc-accent-800: var(--primary);
    --vc-accent-900: var(--primary);
  }

  .vc-pane {
    min-width: ${_toCSSUnit('322px')};
  }

  .vc-header {
    height: auto;
    margin-top: 0;
    padding: ${_toCSSUnit('6px')} 0;
    margin-bottom: ${_toCSSUnit('16px')};
    .vc-title,
    .vc-arrow {
      background-color: transparent;
    }
    .vc-title {
      padding: 0;
      height: ${_toCSSUnit('42px')};
      display: flex;
      align-items: center;
      ${css`
        ${_toCSSParse(DesignConfigTypography[DESIGNCONFIG_KEYNAME_TYPO['T1/Bold']])}
      `}
    }
    .vc-arrow {
      width: ${_toCSSUnit('40px')};
      height: ${_toCSSUnit('40px')};
      background: no-repeat center center;
      background-size: ${_toCSSUnit('16px')};
      svg {
        display: none;
      }
      &.vc-prev {
        background-image: ${_toGetBackgroundSVG(
          DESIGNCONFIG_ICON_MAP['icon_arrow_before_line'],
          DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/40']]
        )};
      }
      &.vc-next {
        background-image: ${_toGetBackgroundSVG(
          DESIGNCONFIG_ICON_MAP['icon_arrow_next_line'],
          DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/40']]
        )};
      }
    }
  }
  .vc-weeks {
    padding: 0;
    .vc-week {
      padding: ${_toCSSUnit('10px')} 0;
    }
  }

  .vc-container {
    color: #212121;
    .is-today.in-month {
      color: var(--vc-accent-600);
      font-weight: var(--vc-font-medium);
      &::after {
        content: '';
        position: absolute;
        top: ${_toCSSUnit('3px')};
        left: calc(50% - ${_toCSSUnit('2px')};);
        width: ${_toCSSUnit('4px')};
        height: ${_toCSSUnit('4px')};
        border-radius: 50%;
        background: var(--vc-accent-600);
      }
    }
    .vc-day-content {
      width: ${_toCSSUnit('32px')};
      height: ${_toCSSUnit('32px')};
    }
    .vc-highlight {
      width: ${_toCSSUnit('32px')};
      height: ${_toCSSUnit('32px')};
    }
    .vc-highlight.vc-highlight-base-middle {
      width: 100%;
    }
    .vc-highlight-content-light {
      font-weight: var(--vc-font-medium);
      /* color: var(--vc-accent-600); */
      color: var(--primary);
    }
    .vc-highlight-bg-light {
      background-color: var(--vc-accent-100);
    }
    .vc-weekdays {
      padding-bottom: ${_toCSSUnit('10px')};
    }
    .vc-weekday {
      padding-top: ${_toCSSUnit('6px')};
      padding-bottom: ${_toCSSUnit('6px')};
      color: ${DesignConfigColor[DESIGNCONFIG_KEYNAME_COLOR['kcpgray/80']]};
    }
    .vc-weekday-1 {
      color: #fa2828;
    }
    .vc-weekday-7 {
      color: #49a9f5;
    }
    .weekday-1 {
      color: #fa2828;
    }
  }

  .vc-nav-title,
  .vc-nav-arrow,
  .vc-nav-item:not(.is-active) {
    background-color: transparent;
  }
`

export {InputField, InputInnerSectionArea, InputSectionRightArea, colorCSS, Wrapper, IS_FOCUS}
