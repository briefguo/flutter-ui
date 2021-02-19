import { ResponsiveContainer } from './bases/Container'
import { ResponsiveText } from './bases/Text'
import { ResponsiveImage } from './bases/Image'
import { ResponsiveSpace } from './bases/Space'
import { ResponsiveFlex } from './bases/Flex'

import { ResponsiveBackground } from './extends/Background'
import { ResponsiveContent } from './extends/Content'

export const RS = {
  Container: ResponsiveContainer,
  Text: ResponsiveText,
  Flex: ResponsiveFlex,
  Background: ResponsiveBackground,
  Content: ResponsiveContent,
  Image: ResponsiveImage,
  Space: ResponsiveSpace,
}
