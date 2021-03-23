import React from 'react';
/**
 * @deprecated
 */
export declare type RenderedComponent<T = any> = React.FC<T & {
    onClose: any;
    onComplete: any;
}>;
export declare type RCProps<P, R> = P & {
    onClose: () => void;
    onComplete: (r: R) => void;
};
export declare type RC<P, R> = React.FC<RCProps<P, R>>;
export declare function renderComponent<P, R>(C: RC<P, R>, props: P): Promise<R>;
