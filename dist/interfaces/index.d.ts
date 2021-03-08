export declare type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export declare type XOR<T, U> = T | U extends Record<string, unknown> ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
export declare type ProperRSProperty<T> = Partial<Record<'lg' | 'xs', T>>;
export declare type RSProperty<T> = T | ProperRSProperty<T>;
export declare type ValueOf<T> = T[keyof T];
export declare type SingleProps<T> = BaseComponentProps & {
    [P in keyof T]?: T[P];
};
export declare type RSProps<T> = {
    [P in keyof T]?: RSProperty<T[P]>;
} & {
    children?: React.ReactNode;
};
export interface BaseComponentProps {
    'lg'?: boolean;
    'xs'?: boolean;
    'data-screen'?: string;
    'style'?: React.CSSProperties;
    'className'?: string;
    'children'?: React.ReactNode;
}
