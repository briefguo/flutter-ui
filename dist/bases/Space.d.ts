import React from 'react';
import { Property } from 'csstype';
import { BaseComponentProps, RSProperty } from '../interfaces';
export interface SpaceProps extends BaseComponentProps {
    direction?: 'vertical' | 'horizen';
    box?: 'inline-flex' | 'flex';
    children: React.ReactElement[];
    align?: Property.AlignItems;
    size?: number;
}
export declare function SingleSpace(p: SpaceProps): JSX.Element;
export interface RSSpaceProps {
    direction?: RSProperty<'vertical' | 'horizen'>;
    align?: RSProperty<Property.AlignItems>;
    size?: RSProperty<number>;
    className?: RSProperty<string>;
    style?: RSProperty<React.CSSProperties>;
    children: React.ReactChild[];
    box?: 'inline-flex' | 'flex';
}
export declare const ResponsiveSpace: React.FC<RSSpaceProps>;
export declare const Space: typeof SingleSpace;
