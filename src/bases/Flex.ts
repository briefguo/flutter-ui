import { Property } from 'csstype'
import { LayoutProps, mapLayoutPropsToCSS } from './Layout'
import { singleOf } from '../helpers/createSingle'

export const SingleFlex = singleOf('div', {
  defaultProps: {
    align: <Property.AlignItems>undefined,
    justify: <Property.JustifyContent>undefined,
    wrap: <Property.FlexWrap>undefined,
    expanded: <boolean>undefined,
    inline: <boolean>undefined,
    direction: <Property.FlexDirection>undefined,
    layout: <LayoutProps>undefined,
    style: <React.CSSProperties>undefined,
  },
  selector: '.s-flex-[uuid]',
  props2CSSProperties: p => ({
    display: p.inline ? 'inline-flex' : 'flex',
    justifyContent: p.justify,
    flexWrap: p.wrap,
    height: p.expanded ? '100%' : undefined,
    flex: p.expanded ? '1 1 auto' : undefined,
    flexDirection: p.direction,
    alignItems: p.align,
    ...mapLayoutPropsToCSS(p.layout),
  }),
})

export const SingleColumn = SingleFlex.of({ direction: 'column' })
export const SingleCenter = SingleFlex.of({
  direction: 'column',
  layout: 'center',
})

export const Center = SingleCenter

export const Flex = SingleFlex
