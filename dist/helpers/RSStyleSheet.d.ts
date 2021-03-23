import React from 'react';
import { ProperRSProperty } from '../interfaces';
export declare class RSStyleSheet {
    static _isMobile: () => boolean;
    static _isDefault: () => boolean;
    static get breakpoint(): "" | "lg" | "xs" | undefined;
    static createStyle(selector: string, css: ProperRSProperty<React.CSSProperties>): {
        className: string;
    };
    collectStyles(a: JSX.Element): JSX.Element;
    getStyleText(): string;
    getStyleElement(): JSX.Element;
}
