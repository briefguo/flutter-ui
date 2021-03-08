import React from 'react';
import { SingleProps, XOR } from '../interfaces';
declare type CSSMapper<T, D> = (p: SingleProps<T & D>) => React.CSSProperties;
export interface SingleOfOption<T, D> {
    defaultProps?: D;
    selector: string;
    props2CSSProperties?: CSSMapper<T, D>;
    renderChildren?: (p: SingleProps<T & D>) => React.ReactElement;
}
export declare function singleOf<T, D>(tag: XOR<keyof React.ReactHTML, React.FunctionComponent<SingleProps<T>> & {
    css?: (p: SingleProps<T & D>) => React.CSSProperties;
    selector: string;
}>, option: SingleOfOption<T, D>): {
    (p: SingleProps<T & D>): React.ReactElement<SingleProps<T>, string | ((props: any) => React.ReactElement<any, any>) | (new (props: any) => React.Component<any, any, any>)>;
    of: (base: SingleProps<T & D>) => {
        (p: SingleProps<T & D>): JSX.Element;
        of: any;
    };
    css: CSSMapper<T, D>;
    defaultProps: {};
    selector: string;
};
export {};
