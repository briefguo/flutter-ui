import React from 'react'
import { Property } from 'csstype'
import { Flex } from './Flex'
import styled from 'styled-components'

interface SpaceProps {
  direction?: 'vertical' | 'horizen'
  children: React.ReactChild[]
  align?: Property.AlignItems
  gutter?: number
  className?: string
  style?: React.CSSProperties
}

export const Space = styled(Flex)<SpaceProps>`
  display: 'inline-flex';
`
