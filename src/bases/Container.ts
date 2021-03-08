import { Property } from 'csstype'
import { singleOf } from '../helpers/createSingle'

const defaultProps = {
  contrastingColor: <string>undefined,
  background: <string>undefined,
  padding: <string | number>undefined,
  margin: <string | number>undefined,
  height: <string | number>undefined,
  width: <number | string>undefined,
  borderRadius: <string | number>undefined,
  border: <string>undefined,
  cursor: <string>undefined,
  textAlign: <Property.TextAlign>undefined,
  children: <React.ReactNode>undefined,
}

export type SingleContainerProps = typeof defaultProps

export const SingleContainer = singleOf('div', {
  defaultProps,
  selector: '.s-container-[uuid]',
  props2CSSProperties: p => ({
    color: p.contrastingColor,
    background: p.background,
    padding: p.padding,
    margin: p.margin,
    height: p.height,
    width: p.width,
    borderRadius: p.borderRadius,
    border: p.border,
    cursor: p.cursor,
    textAlign: p.textAlign,
  }),
})

export const Container = SingleContainer
export const SizedBox = SingleContainer
