import React from 'react'
import cx from 'classnames'
import { Container, ContainerProps } from './Container'

type SingleVideoBackgroundProps = ContainerProps & {
  className?: string
  children?: React.ReactNode
  src?: string
  height: number | string
  useRef?: any
  style?: React.CSSProperties
}

export const VideoBackground = (p: SingleVideoBackgroundProps) => {
  const { src, useRef, ...props } = p
  return (
    <Container
      style={{ position: 'relative', overflow: 'hidden', height: props.height }}
      className={cx('video-background', p.className)}
    >
      <Container
        {...props}
        className="video-background__text"
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
      </Container>
      <video
        className="video-background__video"
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
        autoPlay
        muted
        src={src}
        ref={useRef}
      />
    </Container>
  )
}
