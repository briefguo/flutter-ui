export * from '../decorators/Style';
export * from '../decorators/Native';
export declare class RSCProps {
    static getCurrentProperty: (p: any) => any;
    static isRSProperty: (rs: any) => any;
    private static _omit;
    private static resolveDecoratedStyleProps;
    private static pickByBreakpoint;
    static get identitor(): string;
    static get selector(): string;
    static get commonProps(): string[];
    static get commonReactProps(): string[];
    static props2Style(p: any): any;
    static collectNativeProps(p: any): {};
    static of(p: any): {
        className: string;
        children: any;
        style: any;
    };
}
