import { Background } from './bases/Background'
import { Container, ContainerProps } from './bases/Container'
import { RSProps } from './interfaces'
import { Text, TextProps } from './bases/Text'
import { Flex } from './bases/Flex'
import { Layout } from './bases/Layout'

export type SingleContainerProps = ContainerProps
export const SingleContainer = Container
export const SizedBox = SingleContainer
export const SingleBackground = Background

export type SingleTextProps = TextProps
export type ResponsiveTextProps = RSProps<SingleTextProps>

export const SingleText = Text

export const SingleLayout = Layout

export const SingleFlex = Flex
export const SingleColumn = Flex.of({ direction: 'column' })
export const SingleCenter = Flex.of({
  direction: 'column',
  layout: 'center',
})

export const Center = SingleCenter

// base
export * from './bases/Container'
export * from './bases/Text'
export * from './bases/Image'
export * from './bases/Space'
export * from './bases/Layout'
export * from './bases/Flex'
export * from './bases/StopPropagation'
export * from './bases/Background'

// extend
export * from './extends/ListBuilder'
export * from './extends/RS'

// theme and colors
export * from './theme/Colors'
export * from './theme/ThemeData'
export * from './theme/TextThemeData'

// scaffold
export * from './scaffolds/PageScaffold'
export * from './scaffolds/ScreenScaffold'

// helpers
export * from './helpers/renderComponent'
export * from './helpers/RSStyleSheet'

export * from './interfaces'
