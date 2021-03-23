import React from 'react';
import { Property } from 'csstype';
import { RSCProps } from '../helpers/createRSC';
import { RSProps } from '../interfaces';
export declare class SpaceProps extends RSCProps {
    direction?: 'vertical' | 'horizen';
    box?: 'inline-flex' | 'flex';
    align?: Property.AlignItems;
    size?: number;
}
export declare const Space: (p: RSProps<SpaceProps, React.ReactNode[]>) => JSX.Element;
