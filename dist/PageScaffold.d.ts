import React from 'react';
export interface PageScaffoldProps {
    child?: React.ReactChild;
    children?: React.ReactNode;
    className?: string;
    portal?: React.ReactElement;
    backgroundColor?: string;
    contrastingColor?: string;
}
export declare const PageScaffold: (props: PageScaffoldProps) => JSX.Element;
