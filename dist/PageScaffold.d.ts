import React from 'react';
interface PageScaffoldProps {
    child?: React.ReactChild;
    className?: string;
    children?: React.ReactChild[];
    portal?: React.ReactElement;
    backgroundColor?: string;
    contrastingColor?: string;
    loading?: boolean;
}
export declare const PageScaffold: (props: PageScaffoldProps) => JSX.Element;
export {};
