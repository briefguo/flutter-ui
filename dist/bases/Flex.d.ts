import React from 'react';
import { Property } from 'csstype';
import { BaseComponentProps, RSProperty } from '../interfaces';
import { LayoutProps } from './Layout';
export interface SingleFlexProps extends BaseComponentProps {
    align?: Property.AlignItems;
    justify?: Property.JustifyContent;
    wrap?: Property.FlexWrap;
    expanded?: boolean;
    inline?: boolean;
    direction?: Property.FlexDirection;
    layout?: LayoutProps;
}
export declare const SingleFlex: (p: SingleFlexProps) => JSX.Element;
export declare const SingleColumn: React.FC<SingleFlexProps>;
export declare const SingleCenter: React.FC<SingleFlexProps>;
export declare const Center: React.FC<SingleFlexProps>;
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
export declare const Flex: React.FC<ResponsiveFlexProps>;
