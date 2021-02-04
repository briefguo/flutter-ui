import React from 'react'

import { SingleContainer } from './Container'
import { pickProps } from './_rsUtil'
import { RSProperty } from './_interfaces'

const rsImageProps = ['src']

export interface ResponsiveImageProps {
  src?: RSProperty<string>
}

export const ResponsiveImage = (props: ResponsiveImageProps) => {
  const lgProps = pickProps(props, rsImageProps, 'lg')
  const xsProps = pickProps(props, rsImageProps, 'xs')
  return (
    <>
      <SingleContainer style={{ display: 'inline-block', width: '100%' }} lg>
        <img width="100%" {...lgProps} alt="" />
      </SingleContainer>
      <SingleContainer style={{ display: 'inline-block', width: '100%' }} xs>
        <img width="100%" {...xsProps} alt="" />
      </SingleContainer>
    </>
  )
}
