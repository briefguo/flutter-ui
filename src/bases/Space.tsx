import React from 'react'
import { Property } from 'csstype'
import { Style, RSCProps } from '../helpers/createRSC'
import { RSProps } from '../interfaces'

const props2CSSProperties = (p: SpaceItemProps) => {
  const size = p.size ?? 0
  switch (p.direction) {
    case 'vertical':
      return {
        marginTop: size / 2,
        marginBottom: size / 2,
      }
    case 'horizen':
    default:
      return {
        marginLeft: size / 2,
        marginRight: size / 2,
      }
  }
}

class SpaceItemProps extends RSCProps {
  @Style.Calc(direction => ({
    flexDirection: direction === 'vertical' ? 'column' : 'row',
  }))
  direction?: 'vertical' | 'horizen' = 'horizen'

  @Style.Calc(box => ({ display: box }))
  box?: 'inline-flex' | 'flex' = 'inline-flex'

  @Style.As('alignItems')
  align?: Property.AlignItems

  @Style.Map(props2CSSProperties)
  size?: number = 0
}

const SpaceItem = (p: RSProps<SpaceItemProps>) =>
  React.createElement('div', SpaceItemProps.of(p))

// // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
// // https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap

const calcSpaceStyle = (p: SpaceProps) => {
  const size = p.size ?? 0
  switch (p.direction) {
    case 'vertical':
      return {
        marginTop: -size / 2,
        marginBottom: -size / 2,
      }
    case 'horizen':
    default:
      return {
        marginLeft: -size / 2,
        marginRight: -size / 2,
      }
  }
}

export class SpaceProps extends RSCProps {
  @Style.Calc(direction => ({
    flexDirection: direction === 'vertical' ? 'column' : 'row',
  }))
  direction?: 'vertical' | 'horizen' = 'horizen'

  @Style.Calc(box => ({ display: box }))
  box?: 'inline-flex' | 'flex' = 'inline-flex'

  @Style.As('alignItems')
  align?: Property.AlignItems

  @Style.Map(calcSpaceStyle)
  size?: number = 0
}

const SpaceContainer = (p: RSProps<SpaceProps>) =>
  React.createElement('div', SpaceProps.of(p))

export const Space = (p: RSProps<SpaceProps, React.ReactNode[]>) => (
  <SpaceContainer {...p}>
    {p.children?.map((item, index) => (
      <SpaceItem {...p} key={index}>
        {item}
      </SpaceItem>
    ))}
  </SpaceContainer>
)
