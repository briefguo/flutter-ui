import { Property } from 'csstype';
import React from 'react';
import { RSCProps } from '../helpers/createRSC';
import { RSProps } from '../interfaces';
export declare class ContainerProps extends RSCProps {
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
    boxShadow?: string;
    columnCount?: number;
    columnGap?: number;
}
export declare const Container: {
    (p: RSProps<ContainerProps>): React.DetailedReactHTMLElement<{
        className: string;
        children: any;
    }, HTMLElement>;
    of: (base: RSProps<ContainerProps, React.ReactNode>) => {
        (p: RSProps<ContainerProps, React.ReactNode>): JSX.Element;
        displayName: string;
        of: any;
    };
};
