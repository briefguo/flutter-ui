export declare type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export declare type XOR<T, U> = T | U extends Record<string, unknown> ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
export declare type ProperRSProperty<T> = Partial<Record<'lg' | 'xs', T>>;
export declare type RSProperty<T> = T | ProperRSProperty<T>;
export declare type ValueOf<T> = T[keyof T];
export interface BaseComponentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    'lg'?: boolean;
    'xs'?: boolean;
    'data-screen'?: string;
}
export interface BaseRSComponentProps {
    'id'?: RSProperty<string>;
    'className'?: RSProperty<string>;
    'style'?: RSProperty<React.CSSProperties>;
    'children'?: React.ReactNode;
    'data-screen'?: string;
    'onClick'?: React.MouseEventHandler<HTMLElement>;
}
