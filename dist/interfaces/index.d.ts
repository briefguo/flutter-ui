export declare type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export declare type XOR<T, U> = T | U extends Record<string, unknown> ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
export declare type ProperRSProperty<T> = Partial<Record<'lg' | 'xs', T>>;
export declare type RSProperty<T> = T | ProperRSProperty<T>;
export declare type ValueOf<T> = T[keyof T];
export declare type RSProps<T, C = React.ReactNode> = {
    [P in keyof T]: RSProperty<T[P]>;
} & {
    'lg'?: boolean;
    'xs'?: boolean;
    'className'?: string;
    'data-screen'?: string;
    'children'?: C;
    'style'?: RSProperty<React.CSSProperties>;
};
