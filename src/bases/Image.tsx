import React, { useEffect } from 'react'
import { createOf } from '../helpers/createOf'
import { RSCProps, Native } from '../helpers/createRSC'
import { RSProps } from '../interfaces'

export class ImageProps extends RSCProps {
  width: number | string = '100%'

  @Native.Data(breakpoint => `data-${breakpoint}-src`)
  src?: string
}

export const Image = (p: RSProps<ImageProps>) => {
  const imgRef = React.createRef<HTMLImageElement>()
  useEffect(() => {
    const rect = imgRef.current?.getBoundingClientRect() // 出现在视野的时候加载图片
    if (rect?.top && rect?.top < document.documentElement.clientHeight) {
      const src = RSCProps.getCurrentProperty(p.src)      
      src && imgRef.current?.setAttribute('src', src)
    }
  }, [p.src, imgRef])

  return <img ref={imgRef} {...ImageProps.of(p)} alt="" />
}

Image.of = createOf(Image)

export const Img = Image
