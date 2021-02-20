import React from 'react';
export declare const CSSStyleDeclaration2InlineCSSText: (css: React.CSSProperties) => {
    cssText: string;
    uuid: any;
};
interface CSSStyleProviderProps {
    classNamePrefix?: string;
    style?: React.CSSProperties;
    children?: (className: string) => JSX.Element;
}
export declare const CSSStyleInjector: (props: CSSStyleProviderProps) => JSX.Element;
export {};
