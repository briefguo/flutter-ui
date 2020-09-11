import styled from 'styled-components'
import { Container } from './Container'
import { isMobile, isDesktop } from './Device'

export const Content = styled(Container)`
  ${isDesktop} {
    margin: 0 auto;
    width: ${props => props.theme.contentContainerWidth};
  }
  ${isMobile} {
    margin: 0 24px;
  }
`
