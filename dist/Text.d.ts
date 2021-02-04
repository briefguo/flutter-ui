import React from 'react';
import { Property } from 'csstype';
import { RSProperty } from './_interfaces';
export interface SingleTextProps {
    fontSize?: number | string;
    color?: string;
    lg?: boolean;
    xs?: boolean;
    fontWeight?: Property.FontWeight;
    textAlign?: Property.TextAlign;
    className?: string;
    style?: React.CSSProperties;
    /**
     * @deprecated
     */
    whiteSpace?: Property.WhiteSpace;
}
export declare const SingleText: React.FC<SingleTextProps>;
export declare const Text: React.FC<SingleTextProps>;
export interface ResponsiveTextProps {
    fontSize?: RSProperty<number | string>;
    color?: RSProperty<string>;
    textAlign?: RSProperty<Property.TextAlign>;
    fontWeight?: RSProperty<Property.FontWeight>;
    className?: RSProperty<string>;
    style?: RSProperty<React.CSSProperties>;
}
export declare const ResponsiveText: React.FC<ResponsiveTextProps>;
