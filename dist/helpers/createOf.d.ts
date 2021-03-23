import React from 'react';
export declare function createOf<T>(C: React.FC<T>): (base: T) => {
    (p: T): JSX.Element;
    displayName: string;
    of: any;
};
