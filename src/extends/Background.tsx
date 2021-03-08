import { SingleContainer } from '../bases/Container'
import { singleOf } from '../helpers/createSingle'

const src2Background = (src?: string) =>
  src ? `center/cover url(${src})` : undefined

export const SingleBackground = singleOf(SingleContainer, {
  defaultProps: {
    contrastingColor: '#fff',
    src: '',
  },
  selector: '.s-background-[uuid]',
  props2CSSProperties: p => ({
    background: p.background ?? src2Background(p.src),
  }),
})

export const Background = SingleBackground
