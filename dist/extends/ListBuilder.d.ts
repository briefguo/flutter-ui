import React from 'react';
import { RSProperty } from '../interfaces';
export interface ListBuilderProps<T> {
    items?: T[];
    gutter?: RSProperty<number>;
    builder?: (item: T) => JSX.Element;
    style?: React.CSSProperties;
}
export declare function ListBuilder<T>(props: ListBuilderProps<T>): JSX.Element;
export declare namespace ListBuilder {
    var of: (base: ListBuilderProps<unknown>) => {
        (p: ListBuilderProps<unknown>): JSX.Element;
        of: any;
    };
}
