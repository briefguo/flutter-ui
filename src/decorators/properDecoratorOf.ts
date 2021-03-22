import 'reflect-metadata'

type DecoratorFn<T> = (ins: any, key: string, decorator: T) => any

export function properDecoratorOf<T>(id: string, fn?: DecoratorFn<T>) {
  const symbolId = Symbol(id)

  const ProperDecorator = function(arg: T) {
    return Reflect.metadata(symbolId, arg)
  }

  ProperDecorator.get = (instance: any, key: string) =>
    Reflect.getMetadata(symbolId, instance, key)

  ProperDecorator.decorated = (instance: any, key: string) =>
    !!ProperDecorator.get(instance, key)

  ProperDecorator.resolve = (instance: any, key: string) => {
    const decorator = ProperDecorator.get(instance, key)
    if (decorator) {
      return fn?.(instance, key, decorator)
    } else {
      return instance[key]
    }
  }
  return ProperDecorator
}
