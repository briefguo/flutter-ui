import React, { useEffect } from 'react'
import { createOf } from '../helpers/createOf'
import { RSCProps, Native } from '../helpers/createRSC'
import { useWindowScroll } from '../helpers/useWindowScroll'
import { RSProps } from '../interfaces'

export class ImageProps extends RSCProps {
  width: number | string = '100%'
  height: number | string = ''

  @Native.Data(breakpoint => `data-${breakpoint}-src`)
  src?: string
}

export const Image = (p: RSProps<ImageProps>) => {
  const imgRef = React.createRef<HTMLImageElement>()

  const { y } = useWindowScroll()

  useEffect(() => {
    const elem = imgRef.current
    const rect = elem?.getBoundingClientRect() // 出现在视野的时候加载图片
    if (rect?.top && rect?.top < window.innerHeight) {
      const src = RSCProps.getCurrentProperty(p.src)
      // 未加载图片时加载
      src && elem?.setAttribute('src', src)
    }
  }, [y, p.src, imgRef])

  return <img ref={imgRef} {...ImageProps.of(p)} alt="" />
}

Image.of = createOf(Image)

export const Img = Image
