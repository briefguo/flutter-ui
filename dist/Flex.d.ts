import React from 'react';
import { Property } from 'csstype';
export interface FlexProps {
    align?: Property.AlignItems;
    gutter?: number;
    justify?: Property.JustifyContent;
    direction?: Property.FlexDirection;
    wrap?: Property.FlexWrap;
    expanded?: boolean;
    inline?: boolean;
    children?: any;
    style?: React.CSSProperties;
}
export declare const Flex: import("styled-components").StyledComponent<(props: import("./Container").ContainerProps) => JSX.Element, any, FlexProps, never>;
export declare const Center: import("styled-components").StyledComponent<(props: import("./Container").ContainerProps) => JSX.Element, any, FlexProps, never>;
