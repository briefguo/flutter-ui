import React from 'react';
import { RSProps } from '../interfaces';
import { ContainerProps } from './Container';
export declare class BackgroundProps extends ContainerProps {
    contrastingColor?: string;
    src?: string;
    static p2Background: (p: BackgroundProps) => {
        background: string | undefined;
    };
    static url2Background: (src?: string | undefined) => string | undefined;
}
export declare const Background: {
    (p: RSProps<BackgroundProps>): React.DetailedReactHTMLElement<{
        className: string;
        children: any;
    }, HTMLElement>;
    of: (base: RSProps<BackgroundProps, React.ReactNode>) => {
        (p: RSProps<BackgroundProps, React.ReactNode>): JSX.Element;
        displayName: string;
        of: any;
    };
};
