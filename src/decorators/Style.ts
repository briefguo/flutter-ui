import { properDecoratorOf } from './properDecoratorOf'

const As = properDecoratorOf('as', (ins, key, trueKey: string) => {
  ins[trueKey] = ins[key]
  // 改名后，去掉源值
  delete ins[key]
})

const Calc = properDecoratorOf('calc', (ins, key, calc: (s: any) => void) => {
  ins = Object.assign(ins, calc(ins[key]))
  delete ins[key]
})

const Map = properDecoratorOf('map', (ins, key, mapper: (s: any) => void) => {
  ins = Object.assign(ins, mapper(ins))
  delete ins[key]
})

export const Style = { As, Calc, Map }
