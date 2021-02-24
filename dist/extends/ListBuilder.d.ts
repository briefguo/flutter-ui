import React from 'react';
import { RSProperty } from '../interfaces';
export interface ListBuilderProps<T> {
    items?: T[];
    gutter?: RSProperty<number>;
    builder: (item: T) => JSX.Element;
    style?: React.CSSProperties;
}
export declare function ListBuilder<T>(props: ListBuilderProps<T>): JSX.Element;
