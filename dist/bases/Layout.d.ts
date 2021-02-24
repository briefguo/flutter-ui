import React from 'react';
import { Property } from 'csstype';
import { BaseComponentProps, BaseRSComponentProps, RSProperty } from '../interfaces';
declare const layouts: Record<'center' | 'leftCenter' | 'leftBottom' | 'rightCenter' | 'rightBottom' | 'rightTop' | 'leftTop', React.CSSProperties>;
export declare type LayoutProps = keyof typeof layouts;
export interface SingleLayoutProps extends BaseComponentProps {
    inline?: boolean;
    wrap?: Property.FlexWrap;
    alignment?: LayoutProps;
}
export declare const SingleLayout: {
    (p: SingleLayoutProps): JSX.Element;
    mapLayoutPropsToFlexProps: (layout?: LayoutProps) => React.CSSProperties;
};
export interface RSLayoutProps extends BaseRSComponentProps {
    inline?: RSProperty<boolean>;
    wrap?: RSProperty<Property.FlexWrap>;
    alignment?: RSProperty<LayoutProps>;
}
export declare const RSLayout: React.FC<RSLayoutProps>;
export declare const Layout: {
    (p: SingleLayoutProps): JSX.Element;
    mapLayoutPropsToFlexProps: (layout?: LayoutProps) => React.CSSProperties;
};
export {};
