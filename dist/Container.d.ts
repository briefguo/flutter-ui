import React from 'react';
import { Property } from 'csstype';
export interface ContainerProps {
    id?: string;
    child?: any;
    onClick?: any;
    children?: React.ReactNode[];
    className?: string;
    backgroundColor?: string;
    background?: string;
    backgroundPosition?: string;
    backgroundSize?: string;
    backgroundImage?: string;
    borderRadius?: string | number;
    contrastingColor?: string;
    padding?: string | number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    borderTop?: string;
    borderBottom?: string;
    textAlign?: Property.TextAlign;
    fontSize?: string | number;
    height?: number;
    width?: number | string;
    flex?: boolean;
    expanded?: boolean;
    visible?: boolean;
    cursor?: string;
    margin?: string;
    marginTop?: number;
    border?: string;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    overflow?: Property.Overflow;
    position?: Property.Position;
}
export declare const Container: {
    (props: ContainerProps): JSX.Element;
    SizedBox(props: SizedBoxProps): JSX.Element;
};
interface SizedBoxProps {
    width?: number;
    height?: number;
}
export {};
