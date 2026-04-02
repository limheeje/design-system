import {styled} from '@vue-styled-components/core'
import {_toCSSUnit} from '@/themes/DesignConfig'

const maxColumn = 12
export const columsArray = Array.from(new Array(maxColumn)).map((__, i) => ++i)
export const SPACING_GAP_DEFAULT = _toCSSUnit('4px')
export const JUSTIFY_START = 'justify-start'
export const JUSTIFY_CENTER = 'justify-center'
export const JUSTIFY_END = 'justify-end'
export const ALIGN_SELF_START = 'align-self-start'
export const ALIGN_SELF_CENTER = 'align-self-center'
export const ALIGN_SELF_END = 'align-self-end'
export const PREFIX_ = 'col-'
export const PREFIX_AUTO = 'col-auto'
export const PREFIX_SMALL = `${PREFIX_}sm-`
// const PREFIX_MEDIUM = `${PREFIX_}md-`
// const PREFIX_LARGE = `${PREFIX_}lg-`

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  &.guide-line {
    position: relative;
  }
`
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: calc(${SPACING_GAP_DEFAULT} * 2) 0;
  margin-left: calc(${SPACING_GAP_DEFAULT} * -1);
  margin-right: calc(${SPACING_GAP_DEFAULT} * -1);
  &.${JUSTIFY_START} {
    justify-content: flex-start;
  }
  &.${JUSTIFY_CENTER} {
    justify-content: center;
  }
  &.${JUSTIFY_END} {
    justify-content: flex-end;
  }
`
export const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: ${SPACING_GAP_DEFAULT};
  padding-left: ${SPACING_GAP_DEFAULT};
  &.${ALIGN_SELF_START} {
    align-self: flex-start;
  }
  &.${ALIGN_SELF_CENTER} {
    align-self: center;
  }
  &.${ALIGN_SELF_END} {
    align-self: flex-end;
  }
  &.${PREFIX_AUTO} {
    flex: 0 0 auto;
    max-width: 100%;
    width: auto;
  }
  ${columsArray.map((i) => {
    return `
    &.${PREFIX_}${i}{
    flex: 0 0 calc((10 / ${maxColumn}) * ${i * 10}%);
    max-width: calc((10 / ${maxColumn}) * ${i * 10}%);
    }
    &.${PREFIX_SMALL}${i}{
    }
    `
  })}
`
