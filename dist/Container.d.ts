import React from 'react';
export interface ContainerProps {
    id?: string;
    child?: any;
    children?: any;
    onClick?: any;
    visible?: boolean;
    className?: string;
    contrastingColor?: string;
    background?: string;
    padding?: string | number;
    margin?: string | number;
    height?: string | number;
    width?: number | string;
    borderRadius?: string | number;
    border?: string;
    cursor?: string;
    style?: React.CSSProperties;
}
export declare const Container: (props: ContainerProps) => JSX.Element;
