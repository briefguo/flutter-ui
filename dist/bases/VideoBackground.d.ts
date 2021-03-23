import React from 'react';
import { ContainerProps } from './Container';
declare type SingleVideoBackgroundProps = ContainerProps & {
    className?: string;
    children?: React.ReactNode;
    src?: string;
    height: number | string;
    useRef?: any;
    style?: React.CSSProperties;
};
export declare const VideoBackground: (p: SingleVideoBackgroundProps) => JSX.Element;
export {};
