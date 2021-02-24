import React from 'react'
import cx from 'classnames'
import { RSProperty, XOR } from '../interfaces'
import { createRSC } from '../helpers/createRSC'
import {
  ResponsiveContainerProps,
  SingleContainer,
  SingleContainerProps,
} from '../bases/Container'
import { CSSStyleInjector } from '../helpers/CSSStyleInjector'

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

type SingleVideoBackgroundProps = SingleContainerProps & {
  src?: string
  height: number | string
  useRef?: any
}

export const SingleVideoBackground = (p: SingleVideoBackgroundProps) => {
  const { src, useRef, ...props } = p
  return (
    <SingleContainer
      style={{ position: 'relative', overflow: 'hidden', height: props.height }}
      className={cx('single-video-background', p.className)}
    >
      <SingleContainer
        {...props}
        className="single-video-background__text"
        style={{
          position: 'absolute',
          zIndex: 2,
          top: 0,
          width: '100%',
          height: props.height,
          ...props.style,
        }}
      >
        {p.children}
      </SingleContainer>
      <CSSStyleInjector
        classNamePrefix="single-video-background__video"
        style={{
          position: 'absolute',
          zIndex: 1,
          objectFit: 'cover',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          height: props.height,
          width: props.width,
        }}
      >
        {className => (
          <video className={className} autoPlay muted src={src} ref={useRef} />
        )}
      </CSSStyleInjector>
    </SingleContainer>
  )
}

// 互斥类型 https://zhuanlan.zhihu.com/p/82459341
export type ResponsiveBackgroundProps = ResponsiveContainerProps &
  XOR<{ src?: RSProperty<string> }, { background?: string }>

export const ResponsiveBackground: React.FC<ResponsiveBackgroundProps> = createRSC(
  SingleBackground,
)

export const Background = ResponsiveBackground
