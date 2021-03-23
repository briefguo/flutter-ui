import { Property } from 'csstype';
import { LayoutAlignment } from './Layout';
import { RSCProps } from '../helpers/createRSC';
import { RSProps } from '../interfaces';
import React from 'react';
export declare class FlexProps extends RSCProps {
    align?: Property.AlignItems;
    justify?: Property.JustifyContent;
    wrap?: Property.FlexWrap;
    expanded?: boolean;
    inline?: boolean;
    direction?: Property.FlexDirection;
    layout?: LayoutAlignment;
}
export declare const Flex: {
    (p: RSProps<FlexProps>): React.DetailedReactHTMLElement<{
        className: string;
        children: any;
        style: any;
    }, HTMLElement>;
    of: (base: RSProps<FlexProps, React.ReactNode>) => {
        (p: RSProps<FlexProps, React.ReactNode>): JSX.Element;
        displayName: string;
        of: any;
    };
};
