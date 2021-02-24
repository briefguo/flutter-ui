import React from 'react'
import { RSProperty } from '../interfaces'
import { createRSC } from '../helpers/createRSC'

type SingleImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

// TODO: 添加borderd
export const SingleImage = (props: SingleImageProps) => (
  <img width="100%" {...props} alt="" />
)

export interface ResponsiveImageProps {
  width?: RSProperty<string | number>
  height?: RSProperty<string | number>
  style?: RSProperty<React.CSSProperties>
  src?: RSProperty<string>
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = createRSC(
  SingleImage,
)

export const Img = SingleImage
