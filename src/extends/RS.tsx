import { SingleContainer } from '../bases/Container'
import { SingleText } from '../bases/Text'
import { SingleImage } from '../bases/Image'
import { SingleSpace } from '../bases/Space'
import { SingleFlex } from '../bases/Flex'
import { SingleLayout } from '../bases/Layout'

import { SingleBackground } from './Background'

export const ResponsiveContainer = SingleContainer
export const ResponsiveFlex = SingleFlex
export const ResponsiveText = SingleText
export const ResponsiveLayout = SingleLayout
export const ResponsiveImage = SingleImage
export const ResponsiveSpace = SingleSpace
export const ResponsiveBackground = SingleBackground

export const ResponsiveContent = ResponsiveContainer.of({
  margin: { xs: '0 20px', lg: '0 auto' },
  width: { lg: 1200 },
})

export const Content = ResponsiveContent

export const RS = {
  Container: ResponsiveContainer,
  Flex: ResponsiveFlex,
  Text: ResponsiveText,
  Layout: ResponsiveLayout,
  Image: ResponsiveImage,
  Space: ResponsiveSpace,
  Background: ResponsiveBackground,
  Content: ResponsiveContent,
}
