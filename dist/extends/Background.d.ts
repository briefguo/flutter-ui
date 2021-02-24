import React from 'react';
import { RSProperty, XOR } from '../interfaces';
import { ResponsiveContainerProps, SingleContainerProps } from '../bases/Container';
export declare type SingleBackgroundProps = SingleContainerProps & XOR<{
    src?: string;
}, {
    background?: string;
}>;
export declare const SingleBackground: (props: SingleBackgroundProps) => JSX.Element;
declare type SingleVideoBackgroundProps = SingleContainerProps & {
    src?: string;
    height: number | string;
    useRef?: any;
};
export declare const SingleVideoBackground: (p: SingleVideoBackgroundProps) => JSX.Element;
export declare type ResponsiveBackgroundProps = ResponsiveContainerProps & XOR<{
    src?: RSProperty<string>;
}, {
    background?: string;
}>;
export declare const ResponsiveBackground: React.FC<ResponsiveBackgroundProps>;
export declare const Background: React.FC<ResponsiveBackgroundProps>;
export {};
