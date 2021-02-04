import React from 'react'
import cx from 'classnames'
import { Property } from 'csstype'

import { pickProps } from './_rsUtil'
import { useDevices } from './Device'
import { ProperRSProperty, RSProperty, XOR } from './_interfaces'

const SHOW_SCREEN_DEBUG = process.env.SHOW_SCREEN_DEBUG

export const rsContainerPropsKeys = [
  'contrastingColor',
  'background',
  'padding',
  'margin',
  'height',
  'width',
  'borderRadius',
  'border',
  'cursor',
  'textAlign',
  'style',
  'className',
  'data-screen',
  'onClick',
]

const mapPropsToStyle = (p: SingleContainerProps): React.CSSProperties => ({
  position:
    SHOW_SCREEN_DEBUG && p['data-screen'] ? 'relative' : p.style?.position,
  background: p.background,
  padding: p.padding,
  margin: p.margin,
  height: p.height,
  color: p.contrastingColor,
  width: p.width,
  borderRadius: p.borderRadius,
  border: p.border,
  cursor: p.cursor,
  textAlign: p.textAlign,
  ...p.style,
})

export interface SingleContainerProps {
  'id'?: string
  'visible'?: boolean
  'lg'?: boolean
  'xs'?: boolean
  'contrastingColor'?: string
  'background'?: string
  'padding'?: string | number
  'margin'?: string | number
  'height'?: string | number
  'width'?: number | string
  'borderRadius'?: string | number
  'border'?: string
  'cursor'?: string
  'textAlign'?: Property.TextAlign
  'style'?: React.CSSProperties
  'onClick'?: React.MouseEventHandler<HTMLDivElement>
  'className'?: string
  'data-screen'?: string
}

export const SingleContainer: React.FC<SingleContainerProps> = props => {
  return (
    <div
      data-screen={props['data-screen']}
      style={mapPropsToStyle(props)}
      className={cx(props.className, 'single-container', {
        lg: props.lg,
        xs: props.xs,
      })}
      onClick={props.onClick}
    >
      {SHOW_SCREEN_DEBUG && props['data-screen'] && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            textAlign: 'right',
            zIndex: 2,
          }}
        >
          <span
            style={{
              background: '#000',
              color: '#fff',
              fontSize: 30,
              padding: 20,
              opacity: 0.4,
            }}
          >
            screen-{props['data-screen']}
          </span>
        </div>
      )}
      {props.children}
    </div>
  )
}

export const Container = SingleContainer
export const SizedBox = SingleContainer

export interface ResponsiveContainerProps {
  'id'?: RSProperty<string>
  'visible'?: RSProperty<boolean>
  'contrastingColor'?: RSProperty<string>
  'background'?: RSProperty<string>
  // 'backgroundImageSrc'?: RSProperty<string>
  'padding'?: RSProperty<string | number>
  'margin'?: RSProperty<string | number>
  'height'?: RSProperty<string | number>
  'width'?: RSProperty<number | string>
  'borderRadius'?: RSProperty<string | number>
  'border'?: RSProperty<string>
  'cursor'?: RSProperty<string>
  'textAlign'?: RSProperty<Property.TextAlign>
  'style'?: RSProperty<React.CSSProperties>
  'className'?: RSProperty<string>
  'data-screen'?: string
  'onClick'?: React.MouseEventHandler<HTMLDivElement>
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = props => {
  const lgProps = pickProps(props, rsContainerPropsKeys, 'lg')
  const xsProps = pickProps(props, rsContainerPropsKeys, 'xs')

  // TODO: 待优化实现
  const { isDefault, isMobile } = useDevices()

  return (
    <>
      {isDefault && (
        <SingleContainer lg {...lgProps}>
          {props.children}
        </SingleContainer>
      )}
      {isMobile && (
        <SingleContainer xs {...xsProps}>
          {props.children}
        </SingleContainer>
      )}
    </>
  )
}

interface SingleBackgroundProps extends SingleContainerProps {
  src?: string
  useRef?: any
}

export const SingleBackground: React.FC<SingleBackgroundProps> = props => {
  return (
    <SingleContainer
      {...props}
      background={props.background ?? `url(${props.src})`}
      className={cx(props.className, 'single-background')}
    >
      {props.children}
    </SingleContainer>
  )
}

export const SingleVideoBackground: React.FC<SingleBackgroundProps> = props => {
  const { isDefault } = useDevices()
  return (
    <SingleContainer className="single-video-background" {...props}>
      <video
        className="single-video-background__video"
        style={{
          height: props.height,
        }}
        autoPlay={!!isDefault}
        muted
        src={props.src}
        ref={props.useRef}
      />
    </SingleContainer>
  )
}

interface RSBackgroundProps extends ResponsiveContainerProps {
  'src'?: RSProperty<string>
  'backgroundColor'?: RSProperty<string>
  'style'?: undefined
  'data-screen'?: string
}

// 互斥类型 https://zhuanlan.zhihu.com/p/82459341
export type ResponsiveBackgroundProps = RSBackgroundProps &
  XOR<{ src?: ProperRSProperty<string> }, { background?: string }>

export const ResponsiveBackground: React.FC<ResponsiveBackgroundProps> = props => {
  return (
    <ResponsiveContainer
      contrastingColor="#fff"
      {...props}
      background={{
        lg:
          props.background ?? `center/cover url(${props.src?.lg || props.src})`,
        xs:
          props.background ?? `center/cover url(${props.src?.xs || props.src})`,
      }}
      className={cx(props.className, 'responsive-background')}
    >
      {props.children}
    </ResponsiveContainer>
  )
}
