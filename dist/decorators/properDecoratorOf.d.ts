import 'reflect-metadata';
declare type DecoratorFn<T> = (ins: any, key: string, decorator: T) => any;
export declare function properDecoratorOf<T>(id: string, fn?: DecoratorFn<T>): {
    (arg: T): {
        (target: Function): void;
        (target: Object, propertyKey: string | symbol): void;
    };
    get(instance: any, key: string): any;
    decorated(instance: any, key: string): boolean;
    resolve(instance: any, key: string): any;
};
export {};
