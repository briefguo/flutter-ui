import React from 'react';
import { Property } from 'csstype';
import { textTheme, colors } from './deafultTheme';
interface TextProps {
    children?: any;
    type?: keyof typeof textTheme;
    colorType?: keyof typeof colors;
    color?: string;
    fontWeight?: Property.FontWeight;
    fontSize?: string | number;
    textAlign?: Property.TextAlign;
    whiteSpace?: Property.WhiteSpace;
    onClick?: any;
    maxWidth?: string | number;
    cursor?: Property.Cursor;
    className?: string;
    style?: React.CSSProperties;
}
export declare const Text: (props: TextProps) => JSX.Element;
export {};
