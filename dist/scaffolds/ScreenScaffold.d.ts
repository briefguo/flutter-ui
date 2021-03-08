import React from 'react';
import { SingleContainerProps } from '../bases/Container';
import { LayoutProps } from '../bases/Layout';
import { RSProps } from '../interfaces';
declare type BaseScreenScaffoldProps = {
    layout?: LayoutProps;
    content?: React.ReactChild;
    child?: React.ReactChild;
    style?: React.CSSProperties;
};
export declare type ScreenScaffoldProps = RSProps<SingleContainerProps & BaseScreenScaffoldProps>;
export declare const ScreenScaffold: (props: ScreenScaffoldProps) => JSX.Element;
export {};
