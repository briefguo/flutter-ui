import React, { PropsWithChildren } from 'react';
import { RSProps } from '../interfaces';
export declare function createRSC<T>(C: React.FC<T>): {
    (props: PropsWithChildren<RSProps<T>>): JSX.Element;
    of: (base: RSProps<T>) => {
        (p: RSProps<T>): JSX.Element;
        of: any;
    };
};
