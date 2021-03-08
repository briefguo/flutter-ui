import React from 'react';
export declare type LayoutAlignment = 'center' | 'leftCenter' | 'leftBottom' | 'rightCenter' | 'rightBottom' | 'rightTop';
export declare type LayoutProps = LayoutAlignment;
export declare const mapLayoutPropsToCSS: (layout?: LayoutProps) => React.CSSProperties;
export declare const SingleLayout: {
    (p: import("..").SingleProps<{
        alignment: LayoutAlignment;
        style: React.CSSProperties;
    }>): React.ReactElement<import("..").SingleProps<unknown>, string | ((props: any) => React.ReactElement<any, any>) | (new (props: any) => React.Component<any, any, any>)>;
    of: (base: import("..").SingleProps<{
        alignment: LayoutAlignment;
        style: React.CSSProperties;
    }>) => {
        (p: import("..").SingleProps<{
            alignment: LayoutAlignment;
            style: React.CSSProperties;
        }>): JSX.Element;
        of: any;
    };
    props2CSSProperties: (p: import("..").SingleProps<{
        alignment: LayoutAlignment;
        style: React.CSSProperties;
    }>) => React.CSSProperties;
    defaultProps: {
        alignment: LayoutAlignment;
        style: React.CSSProperties;
    };
    selector: string;
};
export declare const Layout: {
    (p: import("..").SingleProps<{
        alignment: LayoutAlignment;
        style: React.CSSProperties;
    }>): React.ReactElement<import("..").SingleProps<unknown>, string | ((props: any) => React.ReactElement<any, any>) | (new (props: any) => React.Component<any, any, any>)>;
    of: (base: import("..").SingleProps<{
        alignment: LayoutAlignment;
        style: React.CSSProperties;
    }>) => {
        (p: import("..").SingleProps<{
            alignment: LayoutAlignment;
            style: React.CSSProperties;
        }>): JSX.Element;
        of: any;
    };
    props2CSSProperties: (p: import("..").SingleProps<{
        alignment: LayoutAlignment;
        style: React.CSSProperties;
    }>) => React.CSSProperties;
    defaultProps: {
        alignment: LayoutAlignment;
        style: React.CSSProperties;
    };
    selector: string;
};
