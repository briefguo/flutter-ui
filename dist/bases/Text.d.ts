import { Property } from 'csstype';
import React from 'react';
import { RSCProps } from '../helpers/createRSC';
import { RSProps } from '../interfaces';
export declare class TextProps extends RSCProps {
    fontSize?: number | string;
    color?: string;
    contrastingColor?: string;
    fontWeight?: Property.FontWeight;
    textAlign?: Property.TextAlign;
    whiteSpace?: Property.WhiteSpace;
}
export declare const Text: {
    (p: RSProps<TextProps>): React.DetailedReactHTMLElement<{
        className: string;
        children: any;
    }, HTMLElement>;
    of: (base: RSProps<TextProps, React.ReactNode>) => {
        (p: RSProps<TextProps, React.ReactNode>): JSX.Element;
        displayName: string;
        of: any;
    };
};
