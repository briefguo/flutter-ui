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
