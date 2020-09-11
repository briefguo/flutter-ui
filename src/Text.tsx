import { Property } from 'csstype'
import styled from 'styled-components'

interface TextProps {
  color?: string

  fontWeight?: Property.FontWeight
  fontSize?: string | number

  whiteSpace?: Property.WhiteSpace
}

export const Text = styled.span<TextProps>`
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  white-space: ${props => props.whiteSpace};
`
