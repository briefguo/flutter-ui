import React from 'react';
import { RSCProps } from '../helpers/createRSC';
import { RSProps } from '../interfaces';
export declare class ImageProps extends RSCProps {
    width: number | string;
    height: number | string;
    src?: string;
}
export declare const Image: {
    (p: RSProps<ImageProps>): JSX.Element;
    of: (base: RSProps<ImageProps, React.ReactNode>) => {
        (p: RSProps<ImageProps, React.ReactNode>): JSX.Element;
        displayName: string;
        of: any;
    };
};
export declare const Img: {
    (p: RSProps<ImageProps>): JSX.Element;
    of: (base: RSProps<ImageProps, React.ReactNode>) => {
        (p: RSProps<ImageProps, React.ReactNode>): JSX.Element;
        displayName: string;
        of: any;
    };
};
