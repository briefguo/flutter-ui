import React from 'react';
import { ProperRSProperty } from '../interfaces';
export interface MutipleColumnProps {
    count?: ProperRSProperty<number>;
    gap?: [ProperRSProperty<number>, ProperRSProperty<number>];
    children?: React.ReactNode[];
}
export declare const MutipleColumn: {
    (props: MutipleColumnProps): JSX.Element;
    of: (base: MutipleColumnProps) => {
        (p: MutipleColumnProps): JSX.Element;
        displayName: string;
        of: any;
    };
};
