import React from 'react';
import { Property } from 'csstype';
import { BaseComponentProps, BaseRSComponentProps, RSProperty } from '../interfaces';
export interface SingleTextProps extends BaseComponentProps {
    fontSize?: number | string;
    color?: string;
    contrastingColor?: string;
    fontWeight?: Property.FontWeight;
    /**
     * @deprecated
     */
    textAlign?: Property.TextAlign;
    /**
     * @deprecated
     */
    whiteSpace?: Property.WhiteSpace;
}
export declare const SingleText: (p: SingleTextProps) => JSX.Element;
export interface ResponsiveTextProps extends BaseRSComponentProps {
    fontSize?: RSProperty<number | string>;
    color?: RSProperty<string>;
    textAlign?: RSProperty<Property.TextAlign>;
    fontWeight?: RSProperty<Property.FontWeight>;
}
export declare const ResponsiveText: React.FC<ResponsiveTextProps>;
export declare const Text: (p: SingleTextProps) => JSX.Element;
