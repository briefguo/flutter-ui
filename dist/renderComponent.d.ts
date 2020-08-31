import React from 'react';
export declare type RenderedComponent<T = any> = React.SFC<T & {
    onClose: any;
    onComplete: any;
}>;
export declare function renderComponent<Result>(C: RenderedComponent, props?: {}): Promise<Result>;
