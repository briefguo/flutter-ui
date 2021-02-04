import React from 'react';
import { Property } from 'csstype';
import { ProperRSProperty, RSProperty, XOR } from './_interfaces';
export declare const rsContainerPropsKeys: string[];
export interface SingleContainerProps {
    'id'?: string;
    'visible'?: boolean;
    'lg'?: boolean;
    'xs'?: boolean;
    'contrastingColor'?: string;
    'background'?: string;
    'padding'?: string | number;
    'margin'?: string | number;
    'height'?: string | number;
    'width'?: number | string;
    'borderRadius'?: string | number;
    'border'?: string;
    'cursor'?: string;
    'textAlign'?: Property.TextAlign;
    'style'?: React.CSSProperties;
    'onClick'?: React.MouseEventHandler<HTMLDivElement>;
    'className'?: string;
    'data-screen'?: string;
}
export declare const SingleContainer: React.FC<SingleContainerProps>;
export declare const Container: React.FC<SingleContainerProps>;
export declare const SizedBox: React.FC<SingleContainerProps>;
export interface ResponsiveContainerProps {
    'id'?: RSProperty<string>;
    'visible'?: RSProperty<boolean>;
    'contrastingColor'?: RSProperty<string>;
    'background'?: RSProperty<string>;
    'padding'?: RSProperty<string | number>;
    'margin'?: RSProperty<string | number>;
    'height'?: RSProperty<string | number>;
    'width'?: RSProperty<number | string>;
    'borderRadius'?: RSProperty<string | number>;
    'border'?: RSProperty<string>;
    'cursor'?: RSProperty<string>;
    'textAlign'?: RSProperty<Property.TextAlign>;
    'style'?: RSProperty<React.CSSProperties>;
    'className'?: RSProperty<string>;
    'data-screen'?: string;
    'onClick'?: React.MouseEventHandler<HTMLDivElement>;
}
export declare const ResponsiveContainer: React.FC<ResponsiveContainerProps>;
interface SingleBackgroundProps extends SingleContainerProps {
    src?: string;
    useRef?: any;
}
export declare const SingleBackground: React.FC<SingleBackgroundProps>;
export declare const SingleVideoBackground: React.FC<SingleBackgroundProps>;
interface RSBackgroundProps extends ResponsiveContainerProps {
    'src'?: RSProperty<string>;
    'backgroundColor'?: RSProperty<string>;
    'style'?: undefined;
    'data-screen'?: string;
}
export declare type ResponsiveBackgroundProps = RSBackgroundProps & XOR<{
    src?: ProperRSProperty<string>;
}, {
    background?: string;
}>;
export declare const ResponsiveBackground: React.FC<ResponsiveBackgroundProps>;
export {};
