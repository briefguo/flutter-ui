import React from 'react';
export interface ContainerProps {
    id?: string;
    visible?: boolean;
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
export declare const Container: import("styled-components").StyledComponent<"div", any, ContainerProps, never>;
export interface SizedBoxProps {
    width?: number | string;
    height?: number | string;
}
export declare const SizedBox: import("styled-components").StyledComponent<"div", any, ContainerProps & SizedBoxProps, never>;
