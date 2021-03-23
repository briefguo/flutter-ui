export declare const As: {
    (arg: string): {
        (target: Function): void;
        (target: Object, propertyKey: string | symbol): void;
    };
    get(instance: any, key: string): any;
    decorated(instance: any, key: string): boolean;
    resolve(instance: any, key: string): any;
};
export declare const Data: {
    (arg: (breakpoint: 'lg' | 'xs') => string): {
        (target: Function): void;
        (target: Object, propertyKey: string | symbol): void;
    };
    get(instance: any, key: string): any;
    decorated(instance: any, key: string): boolean;
    resolve(instance: any, key: string): any;
};
export declare const Native: {
    As: {
        (arg: string): {
            (target: Function): void;
            (target: Object, propertyKey: string | symbol): void;
        };
        get(instance: any, key: string): any;
        decorated(instance: any, key: string): boolean;
        resolve(instance: any, key: string): any;
    };
    Data: {
        (arg: (breakpoint: 'lg' | 'xs') => string): {
            (target: Function): void;
            (target: Object, propertyKey: string | symbol): void;
        };
        get(instance: any, key: string): any;
        decorated(instance: any, key: string): boolean;
        resolve(instance: any, key: string): any;
    };
};
