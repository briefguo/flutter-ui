import React from 'react';
import { Property } from 'csstype';
import { RSProperty } from './_interfaces';
export interface SingleFlexProps {
    align?: Property.AlignItems;
    gutter?: number;
    justify?: Property.JustifyContent;
    wrap?: Property.FlexWrap;
    expanded?: boolean;
    inline?: boolean;
    direction?: Property.FlexDirection;
    className?: string;
    style?: React.CSSProperties;
    layout?: LayoutProps;
}
export declare const SingleFlex: React.FC<SingleFlexProps>;
export declare const Flex: React.FC<SingleFlexProps>;
export declare const SingleColumn: React.FC<SingleFlexProps>;
export declare const SingleCenter: React.FC<SingleFlexProps>;
export declare const Center: React.FC<SingleFlexProps>;
declare const layouts: Record<'center' | 'leftCenter' | 'leftBottom' | 'rightCenter' | 'rightBottom' | 'rightTop' | 'leftTop', SingleFlexProps>;
export declare type LayoutProps = keyof typeof layouts | ResponsiveFlexProps;
export declare const mapLayoutPropsToFlexProps: (layout?: LayoutProps) => SingleFlexProps;
export interface ResponsiveFlexProps {
    align?: RSProperty<Property.AlignItems>;
    justify?: RSProperty<Property.JustifyContent>;
    wrap?: RSProperty<Property.FlexWrap>;
    expanded?: RSProperty<boolean>;
    inline?: RSProperty<boolean>;
    direction?: RSProperty<Property.FlexDirection>;
    className?: RSProperty<string>;
    style?: RSProperty<React.CSSProperties>;
    layout?: RSProperty<LayoutProps>;
}
export declare const ResponsiveFlex: React.FC<ResponsiveFlexProps>;
export {};
