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
export declare const gutterMixin: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<FlexProps, any>>;
export declare const Flex: import("styled-components").StyledComponent<"div", any, import("./Container").ContainerProps & FlexProps, never>;
export declare const Center: import("styled-components").StyledComponent<"div", any, import("./Container").ContainerProps & FlexProps, never>;
