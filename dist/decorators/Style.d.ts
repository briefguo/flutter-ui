export declare const Style: {
    As: {
        (arg: string): {
            (target: Function): void;
            (target: Object, propertyKey: string | symbol): void;
        };
        get(instance: any, key: string): any;
        decorated(instance: any, key: string): boolean;
        resolve(instance: any, key: string): any;
    };
    Calc: {
        (arg: (s: any) => void): {
            (target: Function): void;
            (target: Object, propertyKey: string | symbol): void;
        };
        get(instance: any, key: string): any;
        decorated(instance: any, key: string): boolean;
        resolve(instance: any, key: string): any;
    };
    Map: {
        (arg: (s: any) => void): {
            (target: Function): void;
            (target: Object, propertyKey: string | symbol): void;
        };
        get(instance: any, key: string): any;
        decorated(instance: any, key: string): boolean;
        resolve(instance: any, key: string): any;
    };
};
