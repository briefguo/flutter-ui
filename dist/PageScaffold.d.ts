import React from 'react';
interface PageScaffoldProps {
    child?: React.ReactChild;
    footer?: React.ReactChild;
    modal?: React.ReactChild;
    portal?: React.ReactElement;
    backgroundColor?: string;
    contrastingColor?: string;
    loading?: boolean;
}
export declare const PageScaffold: (props: PageScaffoldProps) => JSX.Element;
export {};
