import { singleOf } from '../helpers/createSingle'

// TODO: 添加borderd
export const SingleImage = singleOf('img', {
  defaultProps: {
    width: <number | string>'100%',
    src: <string>undefined,
    bordered: <boolean>undefined,
    style: <React.CSSProperties>undefined,
  },
  selector: '.s-img-[uuid]',
  props2CSSProperties: p => ({
    width: p.width,
  }),
})

export const Img = SingleImage
