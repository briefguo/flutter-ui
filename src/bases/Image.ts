import { singleOf } from '../helpers/createSingle'

// TODO: 添加borderd
export const SingleImage = singleOf('img', {
  defaultProps: {
    width: <number | string>'100%',
    src: <string>undefined,
  },
  selector: '.s-img-[uuid]',
  css: p => ({
    width: p.width,
  }),
})

export const Img = SingleImage
