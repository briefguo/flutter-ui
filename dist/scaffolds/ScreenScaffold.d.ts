import React from 'react';
import { ContainerProps } from '../bases/Container';
import { LayoutAlignment } from '../bases/Layout';
import { RSProps, XOR } from '../interfaces';
declare type BaseScreenScaffoldProps = {
    layout?: LayoutAlignment;
    content?: React.ReactChild;
    child?: React.ReactChild;
    style?: React.CSSProperties;
};
export declare type ScreenScaffoldProps = RSProps<ContainerProps & BaseScreenScaffoldProps> & XOR<RSProps<{
    src: string;
}>, RSProps<{
    background: string;
}>>;
export declare const ScreenScaffold: (props: ScreenScaffoldProps) => JSX.Element;
export declare const BgScaffold: (props: ScreenScaffoldProps) => JSX.Element;
export {};
