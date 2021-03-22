import { Container } from '../bases/Container'
import { Text } from '../bases/Text'
import { Layout } from '../bases/Layout'
import { Background } from '../bases/Background'
import { Flex } from '../bases/Flex'

import { Image } from '../bases/Image'
import { Space } from '../bases/Space'

export const ResponsiveContainer = Container
export const ResponsiveFlex = Flex
export const ResponsiveText = Text
export const ResponsiveLayout = Layout
export const ResponsiveImage = Image
export const ResponsiveBackground = Background

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
  Space: Space,
  Background: ResponsiveBackground,
  Content: ResponsiveContent,
}
