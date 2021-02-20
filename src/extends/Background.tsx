import React from 'react'
import cx from 'classnames'
import { ProperRSProperty, XOR } from '../interfaces'
import { createRSC } from '../helpers/createRSC'
import {
  ResponsiveContainerProps,
  SingleContainer,
  SingleContainerProps,
} from '../bases/Container'

export type SingleBackgroundProps = SingleContainerProps &
  XOR<{ src?: string }, { background?: string }>

export const SingleBackground = (props: SingleBackgroundProps) => {
  const { src, background, ...p } = props
  return (
    <SingleContainer
      contrastingColor="#fff"
      {...p}
      className={cx('single-background', p.className)}
      background={background ?? `center/cover url(${src})`}
    >
      {p.children}
    </SingleContainer>
  )
}

export const Background = SingleBackground

type SingleVideoBackgroundProps = SingleContainerProps & {
  src?: string
  autoPlay?: any
  useRef?: any
}

export const SingleVideoBackground = (p: SingleVideoBackgroundProps) => {
  const { src, autoPlay, useRef, ...props } = p
  return (
    <SingleContainer
      {...props}
      className={cx('single-video-background', p.className)}
    >
      <video
        className="single-video-background__video"
        style={{
          height: props.height,
        }}
        autoPlay={autoPlay}
        muted
        src={src}
        ref={useRef}
      />
    </SingleContainer>
  )
}

// 互斥类型 https://zhuanlan.zhihu.com/p/82459341
export type ResponsiveBackgroundProps = ResponsiveContainerProps &
  XOR<{ src?: ProperRSProperty<string> }, { background?: string }>

export const ResponsiveBackground: React.FC<ResponsiveBackgroundProps> = createRSC(
  SingleBackground,
)
