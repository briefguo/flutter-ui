import React from 'react';
import { RSCProps } from '../helpers/createRSC';
import { RSProps } from '../interfaces';
export declare type LayoutAlignment = 'center' | 'topCenter' | 'leftCenter' | 'leftBottom' | 'rightCenter' | 'rightBottom' | 'rightTop';
export declare const mapLayoutPropsToCSS: (layout?: "center" | "topCenter" | "leftCenter" | "leftBottom" | "rightCenter" | "rightBottom" | "rightTop" | undefined) => React.CSSProperties;
export declare class LayoutProps extends RSCProps {
    alignment?: LayoutAlignment;
}
export declare const Layout: {
    (p: RSProps<LayoutProps>): React.DetailedReactHTMLElement<{
        className: string;
        children: any;
        style: any;
    }, HTMLElement>;
    of: (base: RSProps<LayoutProps, React.ReactNode>) => {
        (p: RSProps<LayoutProps, React.ReactNode>): JSX.Element;
        displayName: string;
        of: any;
    };
};
