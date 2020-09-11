import React from 'react';
import { Property } from 'csstype';
interface SpaceProps {
    direction?: 'vertical' | 'horizen';
    children: React.ReactChild[];
    align?: Property.AlignItems;
    gutter?: number;
    className?: string;
    style?: React.CSSProperties;
}
export declare const Space: import("styled-components").StyledComponent<"div", any, import("./Container").ContainerProps & import("./Flex").FlexProps & SpaceProps, never>;
export {};
