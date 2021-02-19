import React from 'react'
import { RSProperty } from '../interfaces'
import { createRSC } from '../helpers/createRSC'

type SingleImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

export const SingleImage = (props: SingleImageProps) => (
  <img width="100%" {...props} alt="" />
)

export const Img = SingleImage

export interface ResponsiveImageProps {
  src?: RSProperty<string>
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = createRSC(
  SingleImage,
)
