import React from 'react';
import { ProperRSProperty, XOR } from '../interfaces';
import { ResponsiveContainerProps, SingleContainerProps } from '../bases/Container';
export declare type SingleBackgroundProps = SingleContainerProps & XOR<{
    src?: string;
}, {
    background?: string;
}>;
export declare const SingleBackground: (props: SingleBackgroundProps) => JSX.Element;
export declare const Background: (props: SingleBackgroundProps) => JSX.Element;
declare type SingleVideoBackgroundProps = SingleContainerProps & {
    src?: string;
    autoPlay?: any;
    useRef?: any;
};
export declare const SingleVideoBackground: (p: SingleVideoBackgroundProps) => JSX.Element;
export declare type ResponsiveBackgroundProps = ResponsiveContainerProps & XOR<{
    src?: ProperRSProperty<string>;
}, {
    background?: string;
}>;
export declare const ResponsiveBackground: React.FC<ResponsiveBackgroundProps>;
export {};
