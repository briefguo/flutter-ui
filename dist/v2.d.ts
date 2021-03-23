import { ContainerProps } from './bases/Container';
import { RSProps } from './interfaces';
import { TextProps } from './bases/Text';
export declare type SingleContainerProps = ContainerProps;
export declare const SingleContainer: {
    (p: RSProps<ContainerProps, import("react").ReactNode>): import("react").DetailedReactHTMLElement<{
        className: string;
        children: any;
        style: any;
    }, HTMLElement>;
    of: (base: RSProps<ContainerProps, import("react").ReactNode>) => {
        (p: RSProps<ContainerProps, import("react").ReactNode>): JSX.Element;
        displayName: string;
        of: any;
    };
};
export declare const SizedBox: {
    (p: RSProps<ContainerProps, import("react").ReactNode>): import("react").DetailedReactHTMLElement<{
        className: string;
        children: any;
        style: any;
    }, HTMLElement>;
    of: (base: RSProps<ContainerProps, import("react").ReactNode>) => {
        (p: RSProps<ContainerProps, import("react").ReactNode>): JSX.Element;
        displayName: string;
        of: any;
    };
};
export declare const SingleBackground: {
    (p: RSProps<import("./bases/Background").BackgroundProps, import("react").ReactNode>): import("react").DetailedReactHTMLElement<{
        className: string;
        children: any;
        style: any;
    }, HTMLElement>;
    of: (base: RSProps<import("./bases/Background").BackgroundProps, import("react").ReactNode>) => {
        (p: RSProps<import("./bases/Background").BackgroundProps, import("react").ReactNode>): JSX.Element;
        displayName: string;
        of: any;
    };
};
export declare type SingleTextProps = TextProps;
export declare type ResponsiveTextProps = RSProps<SingleTextProps>;
export declare const SingleText: {
    (p: RSProps<TextProps, import("react").ReactNode>): import("react").DetailedReactHTMLElement<{
        className: string;
        children: any;
        style: any;
    }, HTMLElement>;
    of: (base: RSProps<TextProps, import("react").ReactNode>) => {
        (p: RSProps<TextProps, import("react").ReactNode>): JSX.Element;
        displayName: string;
        of: any;
    };
};
export declare const SingleLayout: {
    (p: RSProps<import("./bases/Layout").LayoutProps, import("react").ReactNode>): import("react").DetailedReactHTMLElement<{
        className: string;
        children: any;
        style: any;
    }, HTMLElement>;
    of: (base: RSProps<import("./bases/Layout").LayoutProps, import("react").ReactNode>) => {
        (p: RSProps<import("./bases/Layout").LayoutProps, import("react").ReactNode>): JSX.Element;
        displayName: string;
        of: any;
    };
};
export declare const SingleFlex: {
    (p: RSProps<import("./bases/Flex").FlexProps, import("react").ReactNode>): import("react").DetailedReactHTMLElement<{
        className: string;
        children: any;
        style: any;
    }, HTMLElement>;
    of: (base: RSProps<import("./bases/Flex").FlexProps, import("react").ReactNode>) => {
        (p: RSProps<import("./bases/Flex").FlexProps, import("react").ReactNode>): JSX.Element;
        displayName: string;
        of: any;
    };
};
export declare const SingleColumn: {
    (p: RSProps<import("./bases/Flex").FlexProps, import("react").ReactNode>): JSX.Element;
    displayName: string;
    of: (base: RSProps<import("./bases/Flex").FlexProps, import("react").ReactNode>) => any;
};
export declare const SingleCenter: {
    (p: RSProps<import("./bases/Flex").FlexProps, import("react").ReactNode>): JSX.Element;
    displayName: string;
    of: (base: RSProps<import("./bases/Flex").FlexProps, import("react").ReactNode>) => any;
};
export declare const Center: {
    (p: RSProps<import("./bases/Flex").FlexProps, import("react").ReactNode>): JSX.Element;
    displayName: string;
    of: (base: RSProps<import("./bases/Flex").FlexProps, import("react").ReactNode>) => any;
};
