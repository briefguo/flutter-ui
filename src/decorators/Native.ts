import { properDecoratorOf } from './properDecoratorOf'

export const As = properDecoratorOf('native-as', (ins, key, as: string) => {
  const t = ins[key]
  // 改名后，去掉源值
  delete ins[key]
  return { [as]: t }
})

export const Data = properDecoratorOf(
  'data',
  (ins, key, mapper: (breakpoint: 'lg' | 'xs') => string) => {
    const lgKey = mapper('lg')
    const xsKey = mapper('xs')
    const t = ins[key]
    // 改名后，去掉源值
    delete ins[key]

    return { [lgKey]: t['lg'], [xsKey]: t['xs'] }
  },
)

export const Native = { As, Data }
