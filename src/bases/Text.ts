import { Property } from 'csstype'
import { singleOf } from '../helpers/createSingle'

export const SingleText = singleOf('span', {
  defaultProps: {
    fontSize: <number | string>undefined,
    color: <string>undefined,
    contrastingColor: <string>undefined,
    fontWeight: <Property.FontWeight>undefined,
    textAlign: <Property.TextAlign>undefined,
    whiteSpace: <Property.WhiteSpace>undefined,
    style: <React.CSSProperties>undefined,
  },
  selector: '.s-text-[uuid]',
  props2CSSProperties: p => ({
    fontSize: p.fontSize,
    color: p.contrastingColor ?? p.color,
    textAlign: p.textAlign,
    whiteSpace: p.whiteSpace,
    fontWeight: p.fontWeight,
  }),
})

export const Text = SingleText
