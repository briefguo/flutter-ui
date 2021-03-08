import { SingleContainer } from '../bases/Container'
import { SingleText } from '../bases/Text'
import { SingleImage } from '../bases/Image'
import { SingleSpace } from '../bases/Space'
import { SingleFlex } from '../bases/Flex'
import { SingleLayout } from '../bases/Layout'

import { SingleBackground } from './Background'
import { createRSC } from '../helpers/createRSC'

export const ResponsiveContainer = createRSC(SingleContainer)
export const ResponsiveFlex = createRSC(SingleFlex)
export const ResponsiveText = createRSC(SingleText)
export const ResponsiveLayout = createRSC(SingleLayout)
export const ResponsiveImage = createRSC(SingleImage)
export const ResponsiveSpace = createRSC(SingleSpace)
export const ResponsiveBackground = createRSC(SingleBackground)

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
