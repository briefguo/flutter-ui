/// <reference types="react" />
export declare const colors: {
    primary: string;
    default: string;
    secondary: string;
    descriptionColor: string;
    success: string;
    warning: string;
    fail: string;
};
export declare type Colors = typeof colors;
export declare const theme: {
    contentContainerWidth: number;
    borderRadius: string;
    defaultBodyBackground: string;
    defaultContrastingColor: string;
    colors: {
        primary: string;
        default: string;
        secondary: string;
        descriptionColor: string;
        success: string;
        warning: string;
        fail: string;
    };
};
export declare type CustomTheme = typeof theme;
export declare const textTheme: {
    light: {
        fontSize: number;
    };
    default: {};
    pageTitle: {
        fontSize: number;
        fontWeight: number;
    };
    title: {
        fontSize: number;
    };
    description: {
        fontSize: number;
        color: string;
        lineHeight: number;
    };
    body: {
        fontSize: number;
    };
};
export interface TextTheme {
    [key: string]: React.CSSProperties;
}
export declare type TextThemeKeys = keyof typeof textTheme;
