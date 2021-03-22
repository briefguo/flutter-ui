import React from 'react'
import { createOf } from '../helpers/createOf'
import { Style } from '../helpers/createRSC'
import { RSProps } from '../interfaces'
import { ContainerProps } from './Container'

export class BackgroundProps extends ContainerProps {
  @Style.As('color')
  contrastingColor = '#fff'

  @Style.Map(p => BackgroundProps.p2Background(p))
  src?: string

  // TODO: src和backround互斥提示

  // TODO: 添加backgroundColor

  static p2Background = (p: BackgroundProps) => ({
    background: p.background ?? BackgroundProps.url2Background(p.src),
  })

  static url2Background = (src?: string) =>
    src ? `center/cover url(${src})` : undefined
}

export const Background = (p: RSProps<BackgroundProps>) =>
  React.createElement('div', BackgroundProps.of(p))

Background.of = createOf(Background)
