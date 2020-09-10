/// <reference types="react" />
export declare const colors: {
    alipay: string;
    primary: string;
    secondary: string;
    descriptionColor: string;
    wechat: string;
    success: string;
    white: string;
    fail: string;
};
export declare type Colors = typeof colors;
export declare const theme: {
    borderRadius: string;
    defaultBodyBackground: string;
    defaultContrastingColor: string;
    colors: {
        alipay: string;
        primary: string;
        secondary: string;
        descriptionColor: string;
        wechat: string;
        success: string;
        white: string;
        fail: string;
    };
};
export declare type CustomTheme = typeof theme;
export declare const textTheme: {
    middle: {
        fontSize: number;
    };
    title: {
        fontSize: number;
    };
    light: {
        fontSize: number;
    };
    description: {
        fontSize: number;
        color: string;
    };
    default: {};
    body: {
        fontSize: number;
    };
};
export interface TextTheme {
    [key: string]: React.CSSProperties;
}
export declare type TextThemeKeys = keyof typeof textTheme;
export declare const GlobalStyle: import("styled-components").GlobalStyleComponent<any, import("styled-components").DefaultTheme>;
