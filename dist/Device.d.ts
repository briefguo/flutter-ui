/// <reference types="react" />
export declare const isMobile = "@media screen and (max-width: 767px)";
export declare const isDesktop = "@media screen and (min-width: 992px)";
/**
 * @deprecated
 */
export declare const isNotMobile = "@media screen and (min-width: 768px)";
export declare const isDefault = "@media screen and (min-width: 768px)";
export declare const useDevices: () => {
    isMobile: any;
    isDefault: any;
};
export declare const Desktop: ({ children }: {
    children: any;
}) => JSX.Element;
export declare const Tablet: ({ children }: {
    children: any;
}) => JSX.Element;
export declare const Mobile: ({ children }: {
    children: any;
}) => any;
export declare const Default: ({ children }: {
    children: any;
}) => JSX.Element;
