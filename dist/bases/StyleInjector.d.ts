import React from 'react';
export declare const CSSStyleDeclaration2InlineCSSText: (css: React.CSSProperties) => {
    cssText: string;
    uuid: string;
};
export interface StyleInjectorProps {
    classNamePrefix?: string;
    style?: React.CSSProperties;
    children?: (className: string) => JSX.Element;
}
declare function useStyle(selector: string, css: React.CSSProperties): {
    className: string;
};
export declare const StyleInjector: {
    (props: StyleInjectorProps): JSX.Element;
    useStyle: typeof useStyle;
};
export {};
