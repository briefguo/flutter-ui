import React from 'react';
import { RSProperty } from '../interfaces';
declare type SingleImageProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
export declare const SingleImage: (props: SingleImageProps) => JSX.Element;
export declare const Img: (props: SingleImageProps) => JSX.Element;
export interface ResponsiveImageProps {
    src?: RSProperty<string>;
}
export declare const ResponsiveImage: React.FC<ResponsiveImageProps>;
export {};
