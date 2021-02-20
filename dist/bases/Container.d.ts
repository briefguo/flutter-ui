import React from 'react';
import { Property } from 'csstype';
import { BaseComponentProps, BaseRSComponentProps, RSProperty } from '../interfaces';
export interface SingleContainerProps extends BaseComponentProps {
    contrastingColor?: string;
    background?: string;
    padding?: string | number;
    margin?: string | number;
    height?: string | number;
    width?: number | string;
    borderRadius?: string | number;
    border?: string;
    cursor?: string;
    textAlign?: Property.TextAlign;
}
export declare const SingleContainer: React.FC<SingleContainerProps>;
export interface ResponsiveContainerProps extends BaseRSComponentProps {
    contrastingColor?: RSProperty<string>;
    background?: RSProperty<string>;
    padding?: RSProperty<string | number>;
    margin?: RSProperty<string | number>;
    height?: RSProperty<string | number>;
    width?: RSProperty<number | string>;
    borderRadius?: RSProperty<string | number>;
    border?: RSProperty<string>;
    cursor?: RSProperty<string>;
    textAlign?: RSProperty<Property.TextAlign>;
}
export declare const ResponsiveContainer: React.FC<ResponsiveContainerProps>;
export declare const Container: React.FC<SingleContainerProps>;
export declare const SizedBox: React.FC<SingleContainerProps>;
