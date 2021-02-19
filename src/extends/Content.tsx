import React from 'react'
import { ResponsiveContainer, ResponsiveContainerProps } from '../bases/Container'

export type ResponsiveContentProps = ResponsiveContainerProps

export const ResponsiveContent: React.FC<ResponsiveContentProps> = props => {
  return (
    <ResponsiveContainer
      margin={{ xs: '0 20px', lg: '0 auto' }}
      width={{ lg: 1200 }}
      {...props}
    >
      {props.children}
    </ResponsiveContainer>
  )
}

export const Content = ResponsiveContent
