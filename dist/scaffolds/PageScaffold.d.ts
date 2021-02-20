import React from 'react';
interface PageScaffoldProps {
    child?: React.ReactChild;
    children?: React.ReactNode;
    className?: string;
    backgroundColor?: string;
    contrastingColor?: string;
}
export declare const PageScaffold: (props: PageScaffoldProps) => JSX.Element;
export {};
